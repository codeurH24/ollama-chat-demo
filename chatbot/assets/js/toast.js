function showToast(message = "Code HTML copié !") {
    const toast = document.getElementById('toast-message');
    const toastText = document.getElementById('toast-text');
    toastText.textContent = message;
    toast.classList.remove('hidden', 'opacity-0', 'translate-y-2');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
        hideToast();
    }, 3000);
}

function hideToast() {
    const toast = document.getElementById('toast-message');
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 300);
}