import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Ajout de logs pour le débogage
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Servir les fichiers statiques du dossier assets
app.use('/assets', express.static(join(__dirname, 'assets')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
    console.log(`Dossier assets servi depuis: ${join(__dirname, 'assets')}`);
});