function scrollToBottom() {
    const container = document.querySelector('.discussion-block');
    container.scrollTop = container.scrollHeight;
}

function copyCode(id) {
    let code = document.getElementById(id).textContent;
    navigator.clipboard.writeText(code).then(() => {
        showToast("Code copié !");
    }).catch(err => {
        console.error("Erreur lors de la copie : ", err);
    });
}

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