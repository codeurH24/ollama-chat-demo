export default class User 
{
    constructor(socket) {
        this.socket = socket;
        this.messages = [];
        this.messages.push({
            role: 'system', 
            content: `    
                Vous êtes un assistant qui parle français.
                Vous parlez à des débutants en javascript, css et html.
            ` 
        });
    }

    setSocket(socket) {
        this.socket = socket;
    }
    
    addMessage(message, role='user') {
        this.messages.push({ role: role, content: message });
        if (role === 'user') {
            console.log('--- user:', message);
            this.socket.emit('question-user', message);
        }
    }

    async toAsk(ai) {
        ai.setMessages(this.messages);
        return await ai.toAsk();
    }
} 