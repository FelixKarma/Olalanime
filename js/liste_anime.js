document.addEventListener('DOMContentLoaded', () => {
    const linksContainer = document.getElementById('links-container');

    fetch('http://localhost:5000/get_data')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(anime => {
                    // Création de l'élément de liste
                    const listItem = document.createElement('li');
                    listItem.style.display = 'flex'; // Utiliser flexbox pour aligner les éléments horizontalement
                
                    // Création de la div contenant l'image
                    const imageContainer = document.createElement('div');
                
                    // Création de l'image
                    const image = document.createElement('img');
                    image.src = URL.createObjectURL(new Blob([decodeBase64(anime.img)], { type: 'image/png' }));
                    image.alt = 'Image';
                    image.style.width = '500px'; // Ajustez la largeur selon vos besoins
                    image.style.height = '300px'; // Ajustez la hauteur selon vos besoins
                    image.style.objectFit = 'cover'; // Redimensionne l'image sans perdre de qualité
                
                    // Ajouter l'image à la div contenant l'image
                    imageContainer.appendChild(image);
                
                    // Ajouter la div contenant l'image à l'élément de liste
                    listItem.appendChild(imageContainer);
                
                    // Création d'une div pour le texte à droite de l'image
                    const textContainer = document.createElement('div');
                    textContainer.style.marginLeft = '10px'; // Marge entre l'image et le texte
                
                    // Création du lien
                    const link = document.createElement('a');
                    link.href = `fiche_anime_affichage.html?id=${anime.id}`;
                    link.textContent = anime.titreoriginal;
                
                    // Ajouter le lien au conteneur de texte
                    textContainer.appendChild(link);
                
                    // Création des éléments pour le genre et le thème
                    const genreElement = document.createElement('p');
                    genreElement.textContent = `Genre: ${anime.genre}`;
                
                    const themeElement = document.createElement('p');
                    themeElement.textContent = `Thème: ${anime.theme}`;
                
                    // Ajouter le genre et le thème au conteneur de texte
                    textContainer.appendChild(genreElement);
                    textContainer.appendChild(themeElement);
                
                    // Ajouter le conteneur de texte à l'élément de liste
                    listItem.appendChild(textContainer);
                
                    // Ajouter l'élément de liste au conteneur
                    linksContainer.appendChild(listItem);
                });
                
            } else {
                console.error('Les données ne sont pas sous forme de tableau ou sont vides.');
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });

    // Ajouter un gestionnaire d'événements de clic au bouton de redirection
    const redirectButton = document.getElementById('redirect-button');
    redirectButton.addEventListener('click', () => {
        // Rediriger vers la nouvelle page
        window.location.href = 'nouvelle_page.html';
    });

    // Fonction pour décoder une chaîne base64
    function decodeBase64(base64String) {
        const binaryData = atob(base64String);
        const bytes = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
            bytes[i] = binaryData.charCodeAt(i);
        }
        return bytes;
    }
});