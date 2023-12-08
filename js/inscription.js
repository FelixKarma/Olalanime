document.addEventListener('DOMContentLoaded', function () {
    
    function createAccount() {
        const newNameInput = document.getElementById('nouvelUtilisateur');
        const newEmailInput = document.getElementById('nouvelEmail');
        const newPasswordInput = document.getElementById('nouveauMotDePasse');
        const statusElement = document.getElementById('status');

        
        if (newPasswordInput.value.trim() === '') {
            statusElement.textContent = "Le mot de passe ne peut pas être vide.";
            return; 
        }
        if(newNameInput.value.trim() === ''){
            statusElement.textContent = "le nom d'utilisateur ne peut pas être vide."
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newEmailInput.value)) {
            statusElement.textContent = "Veuillez saisir une adresse e-mail valide.";
            return; 
        }

        
        if (localStorage.getItem(newEmailInput.value) !== null) {
            statusElement.textContent = "Un compte avec cet email existe déjà.";
            return; 
        }

        
        const userData = {
            name: newNameInput.value,
            email: newEmailInput.value,
            password: newPasswordInput.value
        };

        localStorage.setItem(newEmailInput.value, JSON.stringify(userData));

        
        window.location.href = "../html/Accueil.html";
    }

    
    const confirmButton = document.getElementById('btnInscription');

    
    confirmButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        createAccount(); 
    });
});
const submitButton = document.querySelector(".flip-card__btn");
const form = document.querySelector(".flip-card__form");



