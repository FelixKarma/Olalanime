// script pour le bouton de deconnexion 
document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logoutBtn');
    const logInBtn = document.getElementById('conection');
    
    
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        logoutBtn.style.display = 'block';
        logInBtn.style.display = 'none';

    } else {
        logoutBtn.style.display = 'none';
        
    }
    
    logoutBtn.addEventListener('click', function () {

        localStorage.setItem('isLoggedIn', 'false');

        // Redirigez l'utilisateur vers la page de connexion
        window.location.href = 'login.html';
    });
});
//fin script bouton connexion

