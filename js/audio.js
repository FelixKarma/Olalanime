function transformerEnVideo() {
    // Cacher l'image
    document.getElementById('image').style.display = 'none';
    // Afficher le conteneur de la vidéo
    document.getElementById('video-container').style.display = 'block';
    // Démarrer la lecture de la vidéo
    document.getElementById('video').play();
    document.getElementsByTagName('section')[0].style.marginBottom = '0px'
  }

