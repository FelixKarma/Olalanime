
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function nextSlide() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const newTransformValue = -currentIndex * 100 + '%';
    document.getElementById('carousel').style.transform = 'translateX(' + newTransformValue + ')';
}
// script pour le bouton de deconnexion 
document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logoutBtn');
    const logInBtn = document.getElementById('connexion');
    const signInBtn = document.getElementById('inscription')
    
    
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

