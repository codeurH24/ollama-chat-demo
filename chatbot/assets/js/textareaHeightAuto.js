function adjustTextareaHeight(textarea) {
    textarea.style.height = 'auto'; // Réinitialise la hauteur pour obtenir la hauteur réelle du contenu
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajuste la hauteur en fonction de la hauteur du contenu
}

const textarea = document.getElementById('input');
textarea.addEventListener('input', function () {
    adjustTextareaHeight(textarea);
});

// Ajuste la hauteur initiale au chargement de la page
adjustTextareaHeight(textarea);