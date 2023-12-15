
// Création d'une balise div pour le header
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';
document.body.appendChild(headerContainer);

// Création de l'élément div avec la classe "header"
const header = document.createElement('div');
header.className = 'header';

header.style.background = 'linear-gradient(180deg, #412452 0%, #B5617B 71.46%)';
header.style.minHeight = '200px';

// Création de l'élément div pour les éléments autres que les boutons
const otherElementsDiv = document.createElement('div');

// style du header autre que les boutons
otherElementsDiv.style.display = 'flex';
otherElementsDiv.style.justifyContent = 'space-between';

// Création de l'élément div avec la classe "header-gauche"
const headerGauche = document.createElement('div');
headerGauche.className = 'header-gauche';
headerGauche.style.display = 'flex';


// Création de l'élément img avec l'attribut src correspondant
const emojiJap = document.createElement('img');
emojiJap.src = '../img/emoji jap.png';
emojiJap.alt = 'emoji_jap';
emojiJap.id = 'emoji-jap';

headerGauche.appendChild(emojiJap);

// Création de l'élément h2 avec la classe "title"
const title = document.createElement('h2');
title.className = 'title';
title.textContent = 'Olalanime';
title.style.fontSize = '4rem';
title.style.margin = '15px';
title.style.fontFamily = "'Rock Salt', cursive";
title.style.color = '#DDC772';


// Création de l'élément div avec la classe "header-droite"
const headerDroite = document.createElement('div');
headerDroite.className = 'header-droite';
headerDroite.style.display = 'flex';

// Création de la liste
const headerList = document.createElement('ul');
headerList.className = 'header-list'; // Ajoutez une classe pour le style si nécessaire
headerList.style.listStyleType = 'none'; // Retire les puces de la liste

// Création des boutons "connexion" et "inscription" sous forme de liste
const connexionListItem = document.createElement('li');
const connexionButton = document.createElement('button');
const connexionLink = document.createElement('a');
connexionLink.href = 'connexion.html';
connexionLink.textContent = 'Connexion';
connexionButton.className = 'conection';
connexionButton.appendChild(connexionLink);
connexionListItem.appendChild(connexionButton);

const registerListItem = document.createElement('li');
const registerButton = document.createElement('button');
const registerLink = document.createElement('a');
registerLink.href = 'connexion.html'
registerLink.textContent = 'Inscription';
registerButton.className = 'register';
registerButton.appendChild(registerLink);
registerListItem.appendChild(registerButton);

// Styles pour le bouton "connexion"
connexionButton.style.background = 'linear-gradient(180deg, #412452 39.17%, rgba(31, 18, 64, 0.99) 39.18%, rgba(213, 158, 181, 0.55) 70.42%)';
connexionButton.style.borderRadius = '15px';
connexionButton.style.margin = '10px';
connexionButton.style.height = '30px';
connexionButton.style.fontFamily = 'Roboto, sans-serif';
connexionButton.style.fontSize = '20px';

// Styles pour le lien à l'intérieur du bouton "connexion"
connexionLink.style.textDecoration = 'none';
connexionLink.style.color = '#DDC772';

// Styles pour le bouton "inscription"
registerButton.style.background = 'linear-gradient(180deg, #412452 39.17%, rgba(31, 18, 64, 0.99) 39.18%, rgba(213, 158, 181, 0.55) 70.42%)';
registerButton.style.borderRadius = '15px';
registerButton.style.margin = '10px';
registerButton.style.height = '30px';
registerButton.style.fontFamily = 'Roboto, sans-serif';
registerButton.style.fontSize = '20px';
registerButton.style.color = '#DDC772';

// Styles pour le lien à l'intérieur du bouton "inscription"
registerLink.style.textDecoration = 'none';
registerLink.style.color = '#DDC772';

// Création de l'élément div avec la classe "search"
const searchDiv = document.createElement('div');
searchDiv.className = 'search';
searchDiv.style.display = 'flex';

// Création de l'élément input de type search
const searchInput = document.createElement('input');
searchInput.type = 'search';
searchInput.id = 'search';
searchInput.placeholder = 'Rechercher';

// Création de l'élément img avec l'attribut src correspondant
const searchVector = document.createElement('img');
searchVector.src = '../img/Vector.png';
searchVector.alt = 'vector';
searchVector.id = 'vector';

searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchVector);

// Ajout des éléments à la liste
headerList.appendChild(connexionListItem);
headerList.appendChild(registerListItem);
headerList.appendChild(searchDiv);

// Ajout de la liste à l'élément headerDroite
headerDroite.appendChild(headerList);

// Ajout des éléments à otherElementsDiv
otherElementsDiv.appendChild(headerGauche);
otherElementsDiv.appendChild(title);
otherElementsDiv.appendChild(headerDroite);

// Création de l'élément div pour les boutons
const buttonsDiv = document.createElement('div');

// Ajout des boutons à buttonsDiv
const navigation = document.createElement('nav');
navigation.style.display = 'flex';

// Tableau des noms de boutons de navigation
const navButtonNames = ['fiche', 'decouverte', 'forum', 'goodies'];

// Création des boutons de navigation
navButtonNames.forEach(name => {
    const button = document.createElement('button');
    const buttonText = document.createElement('h2');
    buttonText.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    button.appendChild(buttonText);

    // Attribution d'un ID en fonction du nom du bouton
    button.id = name; 

    // Ajout d'un gestionnaire d'événements pour la redirection vers la page correspondante
    button.addEventListener('click', () => {
        redirectToPage(name);
    });

    // Ajouter un effet de zoom au survol
    button.style.transition = 'transform 0.5s ease-in-out';

    // Ajouter un écouteur d'événements pour le survol
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });

    // Ajouter un écouteur d'événements pour réinitialiser la transformation lorsque le curseur est retiré
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });

    navigation.appendChild(button);
});

// Fonction pour rediriger vers la page correspondante
function redirectToPage(pageName) {
    // Générer le chemin de la page en fonction du nom du bouton (ajustez le chemin selon votre structure)
    let pagePath = '';
    if (pageName === 'fiche') {
        pagePath = '..\\html\\liste_anime.html';
    } else if (pageName === 'forum') {
        pagePath = 'https://www.manga-fan.org/';
    } else if (pageName === 'decouverte') {
        pagePath = '..\\html\\decouverte.html';
    } else if (pageName === 'goodies') {
        pagePath = '..\\html\\goodies.html';
    } else {
    }

    // Redirection vers la page correspondante
    window.location.href = pagePath;
}

// Appliquer les styles à l'élément "buttonsDiv"
buttonsDiv.appendChild(navigation);
buttonsDiv.style.alignContent = 'space-between'

// Sélection de tous les boutons à l'intérieur de l'élément "buttonsDiv"
const boutonChildren = buttonsDiv.querySelectorAll('button');

// Appliquer le style à chaque bouton
boutonChildren.forEach(element => {
    element.style.width = '100%';
    element.style.background = 'linear-gradient(180deg, #734573 26.04%, #D59EB5 100%)';
    element.style.width = '25%';
    element.style.borderRadius = '0 0 10px 10px'
});




// Ajouter buttonsDiv à la structure HTML (remplacez cet élément par l'élément auquel vous souhaitez ajouter buttonsDiv)
document.body.appendChild(buttonsDiv);

// Ajout de l'élément nav à la structure HTML
buttonsDiv.appendChild(navigation);

// Ajout de otherElementsDiv et buttonsDiv à containerDiv
const containerDiv = document.createElement('div');
containerDiv.appendChild(otherElementsDiv);
containerDiv.appendChild(buttonsDiv);

// Ajout de containerDiv à la structure HTML du header
header.appendChild(containerDiv);

// Fixer le header en haut de la page
header.style.background = 'linear-gradient(180deg, #412452 0%, #B5617B 71.46%)';
header.style.minHeight = '200px';
header.style.width = '100%';
header.style.position = 'absolute';
header.style.top = '0';





// Ajout du header à la balise div dédiée
headerContainer.appendChild(header);

// Création de l'élément li avec la classe "logout"
const logoutListItem = document.createElement('li');

// Création de l'élément button avec la classe "logout"
const logoutButton = document.createElement('button');
const logoutLink = document.createElement('a');
logoutLink.href = 'file:///C:/Users/nurserie/Desktop/github/Olalanime/html/Accueil.html';  // Ajoutez l'URL appropriée
logoutLink.textContent = 'Déconnexion';
logoutButton.className = 'logout';
logoutButton.appendChild(logoutLink);
logoutListItem.appendChild(logoutButton);

logoutButton.style.background = 'linear-gradient(180deg, #412452 39.17%, rgba(31, 18, 64, 0.99) 39.18%, rgba(213, 158, 181, 0.55) 70.42%)';
logoutButton.style.borderRadius = '15px';
logoutButton.style.margin = '10px';
logoutButton.style.height = '30px';
logoutButton.style.fontFamily = 'Roboto, sans-serif';
logoutButton.style.fontSize = '20px';
logoutButton.style.color = '#DDC772';

// Styles pour le lien à l'intérieur du bouton "déconnexion"
logoutLink.style.textDecoration = 'none';
logoutLink.style.color = '#DDC772';

// Ajout du bouton "déconnexion" à la liste
headerList.appendChild(logoutListItem);

// Création de l'élément li avec la classe "page-perso"
const pagePersoListItem = document.createElement('li');

// Création de l'élément button avec la classe "page-perso"
const pagePersoButton = document.createElement('button');
const pagePersoLink = document.createElement('a');
pagePersoLink.href = 'http://127.0.0.1:5500/html/ficheUtilisateur.html';  // Ajoutez l'URL appropriée
pagePersoLink.textContent = 'Page Perso';
pagePersoButton.className = 'page-perso';
pagePersoButton.appendChild(pagePersoLink);
pagePersoListItem.appendChild(pagePersoButton);

pagePersoButton.style.background = 'linear-gradient(180deg, #412452 39.17%, rgba(31, 18, 64, 0.99) 39.18%, rgba(213, 158, 181, 0.55) 70.42%)';
pagePersoButton.style.borderRadius = '15px';
pagePersoButton.style.margin = '10px';
pagePersoButton.style.height = '30px';
pagePersoButton.style.fontFamily = 'Roboto, sans-serif';
pagePersoButton.style.fontSize = '20px';
pagePersoButton.style.color = '#DDC772';

// Styles pour le lien à l'intérieur du bouton "Page Perso"
pagePersoLink.style.textDecoration = 'none';
pagePersoLink.style.color = '#DDC772';

// Ajout du bouton "Page Perso" à la liste
headerList.appendChild(pagePersoListItem);





document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn') == 'true';

    if (isLoggedIn) {
        logoutButton.style.display = 'block';
        registerButton.style.display = 'none';
        connexionButton.style.display = 'none';
        pagePersoButton.style.display = 'block'

    } else {
        logoutButton.style.display = 'none';
        registerButton.style.display = 'block';
        connexionButton.style.display = 'block';
        pagePersoButton.style.display = 'none'
        
    }
    
    logoutButton.addEventListener('click', function () {

        localStorage.setItem('isLoggedIn', 'false');

        // Redirigez l'utilisateur vers la page de connexion
        window.location.href = 'login.html';
    });
});




