import { createServer } from 'node:http';
import { Server } from 'socket.io';
import AI from './AI/AI.js';
import User from './AI/User.js';

const port = 4545;
const messages = [];
let isStreaming = false;
let currentResponse = null;
// Ajout d'un message initial pour démarrer la conversation
messages.push({
    role: 'system', content: `    
    Vous êtes un assistant qui parle français.
    Vous parlez à des débutants en javascript, css et html.
` });


// Création du serveur HTTP
const server = createServer();
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});


const ai = new AI();
const user = new User();
io.on('connection', (socket) => {
    console.log('Nouvelle connexion:', socket.id);

    socket.on('message', async (userMessage) => {
        
        user.setSocket(socket);
        user.addMessage(userMessage);

        await user.toAsk(ai);
        await ai.writeTo(user);
    });

    // Ajouter un événement pour stopper la réponse
    socket.on('stop-response', () => {
        ai.stopWrite();
    });

    socket.on('disconnect', () => {
        console.log('Déconnexion:', socket.id);
    });
});

// Démarrage du serveur
server.listen(port, () => {
    console.log('Serveur Socket.IO sur http://localhost:4545');
});
