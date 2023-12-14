// script pour le bouton de deconnexion 
document.addEventListener('DOMContentLoaded', function () {
    const logInBtn = document.getElementById('conection');
    const logoutBtn = document.getElementById('logoutBtn');
    const signInBtn = document.getElementById('register')
    
    
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        logoutBtn.style.display = 'block';
        logInBtn.style.display = 'none';
        signInBtn.style.display = 'none';

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