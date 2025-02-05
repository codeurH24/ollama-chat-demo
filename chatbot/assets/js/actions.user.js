// actions.user.js

/**
 * Copie le contenu d'un élément HTML dans le presse-papiers.
 * @param {string} id - L'ID de l'élément contenant le code à copier.
 */
function copyCode(id) {
    let code = document.getElementById(id).textContent;
    navigator.clipboard.writeText(code).then(() => {
        showToast("Code copié !");
    }).catch(err => {
        console.error("Erreur lors de la copie : ", err);
    });
}

/**
 * Affiche un aperçu du code ou le code source en fonction du bouton cliqué.
 * @param {string} codePreviewId - L'ID de l'élément où l'aperçu sera affiché.
 * @param {string} codeBlocId - L'ID de l'élément contenant le code à prévisualiser.
 */
function codePreview(codePreviewId, codeBlocId) {
    const button = this.event.target;
    const codeBlock = document.getElementById(codeBlocId);
    let code = codeBlock.textContent;
    let preview = document.getElementById(codePreviewId);
    preview.classList.toggle('hidden');
    button.textContent = button.textContent === 'Code source' ? 'Aperçu' : 'Code source'
    codeBlock.parentElement.classList.toggle('hidden');
    preview.srcdoc = code;
}

// Envoi du message vers l'ia
function sendMessage() {
    const input = document.getElementById('input');
    socket.emit('message', input.value);
    input.value = '';
    input.style.height = 'auto';
}

// Arrete la réponse de l'ia
function stopMessage() {
    socket.emit('stop-response');
}
