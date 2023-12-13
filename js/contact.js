


 function openRandomPopup() {
     
     var imagePaths = [
        "../img/kaori-marteau.gif",
        "../img/Romain super 1.gif"
     ];


    var randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];

     
     window.open(randomImagePath, '_blank', 'width=500,height=500');

     
     return true;
}


