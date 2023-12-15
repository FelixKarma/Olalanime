

// function previewImage() {
//     var preview = document.querySelector('#imagePreview');
//     var fileInput = document.querySelector('input[type=file]');
//     var file = fileInput.files[0];
//     var reader = new FileReader();

//     reader.onloadend = function () {
//         preview.innerHTML = '<img src="' + reader.result + '" alt="Image Preview">';
//     };

//     if (file) {
//         reader.readAsDataURL(file);
//         imageFileName.style.display = 'none';
//     } else {
//         preview.innerHTML = '';
//         document.getElementById('imageFileName').style.display = 'block';
//     }
// }

// function submitForm() {
   
//     var nouveauMotDePasse = document.getElementById('nouveauPassword').value;
//     var nouvelleBio = document.getElementById('profilBio').value;
   
//     // Sert à remplacer les anciens mot de passe et l'ancienne bio
   
//     var ancienMotDePasse = localStorage.getItem('motDePasse');
//     var ancienneBio = localStorage.getItem('bio');


//     localStorage.setItem('nouveauMotDePasse', nouveauMotDePasse);
//     localStorage.setItem('nouvelleBio', nouvelleBio);
   
//     document.getElementById('nouveauPassword').value = '';
//     document.getElementById('profilBio').value = '';
// }



// function previewImage() {
//     var preview = document.querySelector('#imagePreview');
//     var fileInput = document.querySelector('input[type=file]');
//     var file = fileInput.files[0];
//     var reader = new FileReader();

//     var imageFileName = document.getElementById('imageFileName');

//     reader.onloadend = function () {
//         preview.innerHTML = '<img src="' + reader.result + '" alt="Image Preview">';
//         imageFileName.style.display = 'none';
//     };

//     if (file) {
//         reader.readAsDataURL(file);
//     } else {
//         preview.innerHTML = '';
//         imageFileName.style.display = 'block';
//     }
// }

function submitForm() {
    var nouveauMotDePasse = document.getElementById('nouveauPassword').value;
    var nouvelleBio = document.getElementById('profilBio').value;

    // Sert à remplacer les anciens mot de passe et l'ancienne bio
    var ancienMotDePasse = localStorage.getItem('motDePasse');
    var ancienneBio = localStorage.getItem('bio');

    localStorage.setItem('motDePasse', nouveauMotDePasse);
    localStorage.setItem('bio', nouvelleBio);

    document.getElementById('nouveauPassword').value = '';
    document.getElementById('profilBio').value = '';
}