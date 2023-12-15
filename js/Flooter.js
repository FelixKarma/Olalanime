const footer = document.getElementById('customFooter');

// Créer la figure
const figure = document.createElement('figure');


// Créer les liens sociaux
const socialLinks = [
    { href: 'https://fr-fr.facebook.com/', imgSrc: '..//img/fb-icons.png' },
    { href: 'https://www.instagram.com/', imgSrc: '..//img/insta-icons.png' },
    { href: 'https://twitter.com/', imgSrc: '..//img/icon_twitter.png' }
];

socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;

    const img = document.createElement('img');
    img.src = link.imgSrc;
    img.alt = 'Social Media Icon';
    img.className = 'social-icon'; // Ajout de la classe 'social-icon'

    a.appendChild(img);
    figure.appendChild(a);
});

// Créer la division pour les liens
const div = document.createElement('div');

// Créer les liens de pied de page
const footerLinks = [
    'contact.html',
    'RGPD.html',
    'CGU.html',
    'PolitiqueCookies.html',
    'mentionLegales.html',
    'QuiSommesNous.html'
    
];

footerLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link;
    a.textContent = link.replace('.html', '');
    div.appendChild(a);
});

// Ajouter les éléments au pied de page
footer.appendChild(figure);
footer.appendChild(div);

// Appliquer les styles avec JavaScript
footer.style.minWidth = '100%';
footer.style.background = 'linear-gradient(180deg, #412452 0%, #B5617B 71.46%)';
footer.style.textAlign = 'center';
footer.style.position = 'fixed';
footer.style.bottom = '0';  // Modifier la position bottom à '0'
footer.style.display = 'flex';
footer.style.flexDirection = 'column';
footer.style.justifyContent = 'space-between';
footer.style.fontFamily = "'Roboto', sans-serif";
footer.style.margin = '0';


div.style.display = 'flex';
div.style.justifyContent = 'space-between';

const anchorStyle = 'text-align: center; color: black; text-decoration: none; width: 25%; border-left: 1px solid black; font-weight: 600;';
const firstChildStyle = 'border-left: 0;';

div.querySelectorAll('a').forEach((a, index) => {
    a.style.cssText = anchorStyle + (index === 0 ? firstChildStyle : '');
});

// Appliquer la même taille aux logos des réseaux sociaux
figure.querySelectorAll('.social-icon').forEach(img => {
    img.style.height = '25px'; // Remplacez la valeur par la taille souhaitée
});