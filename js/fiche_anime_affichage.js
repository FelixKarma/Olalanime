

document.addEventListener('DOMContentLoaded', () => {
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'flex';
    resultContainer.style.justifyContent = 'space-between';

    const synopsisContainer = document.getElementById('synopsisContainer'); // Ajout du container du synopsis

    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    fetch('http://localhost:5000/get_data')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                const anime = data.find(item => item.id === parseInt(itemId));

                if (anime) {
                    // Création de l'image
                    const imageElement = document.createElement('img');
                    imageElement.src = URL.createObjectURL(new Blob([decodeBase64(anime.img)], { type: 'image/png' }));
                    imageElement.alt = 'Image';
                    imageElement.style.width = '200px';
                    imageElement.style.height = '200px';

                    // Ajout de l'image à la section
                    resultContainer.appendChild(imageElement);

                    // Création de la div pour les informations (partie gauche)
                    const infoLeftDiv = document.createElement('div');
                    infoLeftDiv.style.display = 'flex';
                    infoLeftDiv.style.flexDirection = 'column';
                    infoLeftDiv.style.alignItems = 'center';

                    // Ajout des éléments d'information à la div (partie gauche)
                    const leftKeys = ['titreoriginal', 'titrefrancais', 'origine','genre','theme'];
                    leftKeys.forEach(key => {
                        if (key !== 'img' && key !== 'id') {
                            const value = anime[key];
                            infoLeftDiv.appendChild(createParagraph(key, value));
                        }
                    });

                    // Calculez la hauteur disponible pour centrer le contenu
                    const windowHeight = window.innerHeight;
                    const resultContainerHeight = resultContainer.clientHeight;

                    // Calculez la marge supérieure pour centrer le contenu
                    const marginTop = (windowHeight - resultContainerHeight) / 2;

                    // Ajoutez la marge supérieure pour centrer le contenu
                    resultContainer.style.marginTop = marginTop + 'px';



                    // Ajout de la div d'information (partie gauche) au conteneur principal
                    resultContainer.appendChild(infoLeftDiv);

                    // Création de la div pour les informations (partie droite)
                    const infoRightDiv = document.createElement('div');
                    infoRightDiv.style.display = 'flex';
                    infoRightDiv.style.flexDirection = 'column';
                    infoRightDiv.style.alignItems = 'center';

                    // Ajout des éléments d'information à la div (partie droite)
                    const rightKeys = ['annee_de_diffusion', 'nombre_d_episode', 'studio_animation'];
                    rightKeys.forEach(key => {
                        if (key !== 'img' && key !== 'id') {
                            const value = anime[key];
                            infoRightDiv.appendChild(createParagraph(key, value));
                        }
                    });

                    // Ajout de la div d'information (partie droite) au conteneur principal
                    resultContainer.appendChild(infoRightDiv);

                
                    // Ajout d'un espacement avec délimitation entre les deux div
                    const espacementDiv = document.createElement('div');
                    espacementDiv.style.marginTop = "15%" // Ajustez ici la hauteur de la marge
                    resultContainer.appendChild(espacementDiv);

                    // Ajouter la div du synopsis à synopsisContainer
                    const synopsisElement = document.createElement('p'); // Changé de textarea à p
                    synopsisElement.textContent = anime.synob;
                    synopsisContainer.appendChild(synopsisElement);

                    // Ajouter une bordure à la div du synopsis
                    synopsisContainer.style.border = '2px solid #000'; // Couleur noire

                    // Définir une hauteur maximale et gérer le débordement
                    synopsisContainer.style.maxHeight = '200px'; // Ajustez la hauteur maximale selon vos besoins
                    synopsisContainer.style.overflow = 'auto';

                    
                    


                } else {
                    console.error(`Aucune donnée trouvée pour l'identifiant ${itemId}.`);
                }
            } else {
                console.error('Les données ne sont pas sous forme de tableau ou sont vides.');
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });

    function createParagraph(key, value) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${capitalizeFirstLetter(key)}: ${value}`;
        return paragraph;
    }

    function decodeBase64(base64String) {
        const binaryData = atob(base64String);
        const bytes = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
            bytes[i] = binaryData.charCodeAt(i);
        }
        return bytes;
    }

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
});




