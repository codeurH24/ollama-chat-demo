import { Ollama } from 'ollama';

export default class AI {

    constructor(model='qwen2.5-coder:7b') {
        this.resp = null;
        this.model = model;
        this.messages = [];
        
        this.socket = null;
        this.isStreaming = true;

        this.ollama = new Ollama({ host: 'http://127.0.0.1:11434' })
    }

    setSocket(socket) {
        this.socket = null;
    }

    addMessage(message) {
        this.messages.push({ role: 'user', content: message });
    }

    setMessages(messages) {
        this.messages = messages;
    }

    async toAsk() {
        
        this.resp = await this.ollama.chat({
            model: this.model,
            messages: this.messages,
            stream: true,
        });
        return this.resp;
    }

    getResponse() {
        return this.resp;
    }

    async writeTo(user) {
        let currentMessage = '';
        for await (const part of this.resp) {
            user.socket.emit('response', part.message.content);
            process.stdout.write(part.message.content);
            currentMessage += part.message.content;
        }
        user.socket.emit('response-end', '');
        console.log('');
        user.addMessage(currentMessage, 'assistant');
    }
    
    stopWrite() {
        try {
            this.ollama.abort();
        } catch (error) {
            if (error.name === "AbortError") {
                console.log("ollama stop writing: Aborted operation.");
            } else {
                console.error("*** Unexpected error:", error);
            }
        }
        this.resp = [];
    }
    
}

process.on("unhandledRejection", (reason, promise) => {
    if (reason.name === "AbortError") {
        console.log("Handled AbortError globally.");
    } else {
        console.error("Unhandled rejection:", reason);
    }
});
