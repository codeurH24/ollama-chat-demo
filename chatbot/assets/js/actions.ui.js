// actions.ui.js

/**
 * Fait défiler le conteneur de discussion jusqu'en bas.
 */
function scrollToBottom() {
    const container = document.querySelector('.discussion-block');
    container.scrollTop = container.scrollHeight;
}

/**
 * Transfère les messages d'un élément à un autre pour archiver les anciens messages.
 * Cette opération évite de parser une chaîne de caractères trop longue, 
 * ce qui pourrait ralentir le navigateur de l'utilisateur en raison de la charge de traitement.
 */
function bankMessage() {
    const source = document.getElementById('messages');
    const destination = document.getElementById('old-messages');

    if (source && destination) {
        const content = source.innerHTML;
        destination.innerHTML += content;
        source.innerHTML = '';
    }
}

