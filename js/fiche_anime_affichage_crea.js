document.addEventListener('DOMContentLoaded', () => {
    const resultContainer = document.getElementById('result-container');
    const imageElement = document.createElement('img');
    const sectionElement = document.createElement('section'); // Nouvel élément de section
    sectionElement.id = 'mySection';
    sectionElement.style.display = 'flex'
    sectionElement.style.justifyContent = 'space-between';

    fetch('http://localhost:5000/get_data')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                // récupère la fiche qui vient d'être créée (la dernière)
                const premierDictionnaire = data[data.length - 1];

                const ordreDesClesGroupe1 = ['titreoriginal', 'titrefrancais', 'origine', 'genre', 'theme'];
                const ordreDesClesGroupe2 = ['annee_de_diffusion', 'nombre_d_episode', 'studio_animation'];

                imageElement.src = URL.createObjectURL(new Blob([decodeBase64(premierDictionnaire.img)], { type: 'image/png' }));
                imageElement.alt = 'Image';
                sectionElement.appendChild(imageElement); // Ajout de l'image à la section
                imageElement.style.width = '250px'; // Ajustez la largeur du carré selon vos préférences
                imageElement.style.height = '250px'; // Ajustez la hauteur du carré selon vos préférences

                // Création de la div pour le groupe 1
                const divGroupe1 = document.createElement('div');
                divGroupe1.id = 'div1'
                ordreDesClesGroupe1.forEach(cle => {
                    if (cle !== 'img' && cle !== 'id') {
                        const valeur = premierDictionnaire[cle];
                        divGroupe1.appendChild(createParagraph(cle, valeur));
                    }
                });
                sectionElement.appendChild(divGroupe1);

                // Création de la div pour le groupe 2
                const divGroupe2 = document.createElement('div');
                divGroupe2.id = 'div2'
                ordreDesClesGroupe2.forEach(cle => {
                    if (cle !== 'img' && cle !== 'id') {
                        const valeur = premierDictionnaire[cle];
                        divGroupe2.appendChild(createParagraph(cle, valeur));
                    }
                });
                sectionElement.appendChild(divGroupe2);

                resultContainer.appendChild(sectionElement); // Ajout de la section au conteneur principal

                // Ajout d'un espacement avec délimitation entre les deux div
                const espacementDiv = document.createElement('div');
                espacementDiv.style.marginTop = "15%" // Ajustez ici la hauteur de la marge
                resultContainer.appendChild(espacementDiv);

                document.body.style.marginTop = '20%'
            
                
                // Ajout du synopsis en dehors de la section
                resultContainer.insertAdjacentHTML('beforeend', '<h1>Synopsis</h1>');
                const synopsisElement = document.createElement('p');
                console.log(premierDictionnaire);
                synopsisElement.innerText = premierDictionnaire.synob;
                synopsisElement.style.width = '95%';
                synopsisElement.style.height = '300px';
                synopsisElement.style.margin = 'auto';
                synopsisElement.style.display = 'block';
                synopsisElement.style.border = '1px solid #000'
                resultContainer.appendChild(synopsisElement);

            } else {
                console.error('Les données ne sont pas sous forme de tableau ou sont vides.');
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });

    function createParagraph(cle, valeur) {
        const paragraphe = document.createElement('p');
        paragraphe.textContent = `${capitalizeFirstLetter(cle)}: ${valeur}`;
        return paragraphe;
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