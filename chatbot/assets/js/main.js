const socket = io('http://localhost:4545');

function stopMessage() {
    socket.emit('stop-response');
}



const messagesDiv = document.getElementById('messages');
const textDecoder = new TextEncoder();
let prismBlockCounter = 1;

let codeHTML = '';
let codeHtmlEnCour = false;
socket.on('response', (content) => {

    const newLine = /\r?\n/.test(content);
    let codeHtmlEnCour = /```html/gm.test(messagesDiv.innerHTML);
    let codeJavascriptEnCour = /```javascript/gm.test(messagesDiv.innerHTML);
    let codeCssEnCour = /```css/gm.test(messagesDiv.innerHTML);



    const data = {
        messagesDiv,
        prismBlockCounter,
        codeHtmlEnCour,
        codeJavascriptEnCour,
        codeCssEnCour,
        callback: () => {
            Prism.highlightAll();
            bankMessage();
        }
    };


    if (codeHtmlEnCour) {
        codeHTML += content;
        if (newLine) formateHtml({ ...data, codeHTML });
    }
    else if (codeJavascriptEnCour) {
        codeHTML += content;
        if (newLine) formateJs({ ...data, codeHTML });
    }
    else if (codeCssEnCour) {
        codeHTML += content;
        if (newLine) formateCss({ ...data, codeHTML });
    }
    else {
        content = content.replace("\n", "<br>");
        messagesDiv.innerHTML = messagesDiv.innerHTML.replace(/(`[^\n`]+`)/gi, '<span class="highlight">$1</span>');
        messagesDiv.innerHTML = messagesDiv.innerHTML.replace(/ "([^\n"]+)" /gi, ' <span class="highlight-2">&#34;$1&#34;</span> ');
        messagesDiv.innerHTML = messagesDiv.innerHTML.replace(/\*\*(.*?)\*\*|__(.*?)__/g, '<b>$1</b>');
        messagesDiv.innerHTML = messagesDiv.innerHTML.replace(/#### (.+)<br>/g, '<h4>$1</h4>');
        messagesDiv.innerHTML = messagesDiv.innerHTML.replace(/### (.+)<br>/g, '<h3>$1</h3>');
        messagesDiv.innerHTML += content;
    }

    if (newLine)
        scrollToBottom();

});

socket.on('response-end', () => {
    messagesDiv.innerHTML += '<br />';
});

socket.on('question-user', (question) => {
    messagesDiv.innerHTML += '<div class="question-user">User:  <div>' + question + '</div></div>';
    bankMessage();
});

// Gestion des erreurs
socket.on('error', (error) => {
    console.error('Erreur:', error);
});

// Envoi des messages
function sendMessage() {
    const input = document.getElementById('input');
    socket.emit('message', input.value);
    input.value = '';
    input.style.height = 'auto';
}