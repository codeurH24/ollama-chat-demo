/**
 * Ajuste la hauteur d'un élément textarea en fonction de son contenu.
 * @param {HTMLTextAreaElement} textarea - L'élément textarea à ajuster.
 */
function adjustTextareaHeight(textarea) {
    textarea.style.height = 'auto'; // Réinitialise la hauteur pour obtenir la hauteur réelle du contenu
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajuste la hauteur en fonction de la hauteur du contenu
}

// Sélectionne l'élément textarea avec l'ID 'input'
const textarea = document.getElementById('input');
// Ajoute un écouteur d'événement pour ajuster la hauteur du textarea lors de la saisie
textarea.addEventListener('input', function () {
    adjustTextareaHeight(textarea);
});

// Ajuste la hauteur initiale au chargement de la page
adjustTextareaHeight(textarea);