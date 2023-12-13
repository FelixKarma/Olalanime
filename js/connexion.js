document.addEventListener('DOMContentLoaded', function () {

    function loginUser() {
        const emailInput = document.getElementsByName('email')[0];
        const passwordInput = document.getElementsByName('password')[0];
        const statusElement = document.getElementById('status1');
        

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            statusElement.textContent = 'Veuillez saisir une adresse e-mail valide.';
            return;
        }


        const userDataString = localStorage.getItem(emailInput.value);

        if (!userDataString) {
            statusElement.textContent = 'Aucun compte trouvé avec cet email.';
            return;
        }

        const userData = JSON.parse(userDataString);


        if (passwordInput.value !== userData.password) {
            statusElement.textContent = 'Mot de passe incorrect.';
            return;
        }
        
        localStorage.setItem('isLoggedIn', 'true');
        
    }
    
    
    const loginButton = document.getElementById('btnSeConnecter');
    
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        loginUser();
        const previousPage = localStorage.getItem('previousPage');
        if (previousPage) {
            document.getElementById("formSeConnecter").setAttribute("action",previousPage)
            window.location.href = previousPage;
        } else {
        window.location.href = '../html/Accueil.html';
        }
    });
});



