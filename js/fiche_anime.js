
// fonction qui importe un carré où l'image pop

function previewImage() {
    var preview = document.querySelector('#imagePreview');
    var fileInput = document.querySelector('input[type=file]');
    var file = fileInput.files[0];
    var reader = new FileReader();

    // Ajouter la vérification du type de fichier
    if (file && file.type !== 'image/gif') {
        reader.onloadend = function () {
            preview.innerHTML = '<img src="' + reader.result + '">';
        };

        reader.readAsDataURL(file);
    } else {
        // Réinitialiser l'aperçu si le fichier est un GIF ou s'il n'y a pas de fichier
        preview.innerHTML = '';
        
        // Afficher un message d'erreur si le fichier est un GIF
        if (file && file.type === 'image/gif') {
            alert('Les fichiers GIF ne sont pas autorisés.');
            // Réinitialiser le champ de fichier pour supprimer le fichier GIF sélectionné
            fileInput.value = '';
        }
    }
}


// Formulaire
var imageInput = document.getElementById("image");

document.addEventListener("DOMContentLoaded", function () {
    var myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        recupererFormulaire();
    });
});

function recupererFormulaire() {
    // Récupérer la valeur du fichier sélectionné dans un objet
    var imgFile = imageInput.files[0];

    // Récupérer les valeurs des champs du formulaire
    var titreOriginal = document.getElementById("titreOriginal").value;
    var titreFrancais = document.getElementById("titreFrancais").value;
    var origine = document.getElementById("origine").value;
    var annee_de_diffusion = document.getElementById("annee_de_diffusion").value;
    var nombre_d_episode = document.getElementById("nombre_d_episode").value;
    var studio_animation = document.getElementById("studio_animation").value;
    var synob = document.getElementById("synob").value;

    // Récupérer les données des menus déroulants
    const selectGenre = document.getElementById("genre");
    const selectTheme = document.getElementById("thème");
 
    // Utiliser Array.from pour convertir les listes en tableaux
    const selectedGenreValues = Array.from(selectGenre.selectedOptions, option => option.value);
    const selectedThemeValues = Array.from(selectTheme.selectedOptions, option => option.value);

    // Convertir les tableaux en chaînes de caractères
    const genresAsString = selectedGenreValues.join(', ');
    const themesAsString = selectedThemeValues.join(', ');

    // affiche la chaine de caractère
    console.log(themesAsString)



    // Créer un objet FormData
    var formData = new FormData();

    // ajouter les données à la data

    formData.append("titreOriginal", titreOriginal);
    formData.append("titreFrancais", titreFrancais);
    formData.append("origine", origine);
    formData.append("annee_de_diffusion", annee_de_diffusion);
    formData.append("nombre_d_episode", nombre_d_episode);
    formData.append("studio_animation", studio_animation);
    formData.append("synob", synob);
    formData.append("image", imgFile);
    formData.append("genre", genresAsString);
    formData.append("thème", themesAsString);

    // console.log(formData.value)

    // Construire le nom de la fiche
    var nom_fiche = 'ficheAnime' + titreOriginal;

    // Redirection vers la fiche nouvellement créée
    window.location.href = 'file:///C:/Users/nurserie/Desktop/github/Olalanime/html/fiche_anime_affichage_crea.html?nomfiche=' + encodeURIComponent(nom_fiche);


    // Envoyer les données au backend (utilisant Flask en local)
    // adresse du serveur où nos donné sont envoyer :5000 designe le port de Flask
    fetch('http://localhost:5000/upload_form', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Réponse non OK: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Réponse du serveur :', data);
    })
    .catch(error => {
        console.log('Erreur lors de la requête POST :', error);
        console.error('Erreur lors de la requête POST :', error);
    
        // Afficher la réponse de l'API si elle est disponible
        if (error.response) {
            console.error('Réponse de l\'API :', error.response.data);
        }
    });


}

