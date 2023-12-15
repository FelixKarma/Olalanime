function scrollWin() {
    let resultat = vhToPixels(100)
    window.scrollBy(0 , resultat)
}

function scrollWin2() {
    let resultat = vhToPixels(100)
    window.scrollBy(0 , -resultat ) 
}

function vhToPixels(vh) {
    // Obtenir la hauteur de la fenêtre en pixels
    const windowHeight = window.innerHeight;
  
    // Calculer la valeur en pixels
    const pixels = (vh * windowHeight) / 100;
  
    // Retourner le résultat arrondi
    return Math.round(pixels);
  }
  
  // Exemple d'utilisation :
  const vhValue = 50; // Remplacez cela par la valeur en vh que vous souhaitez convertir
  const pixelsValue = vhToPixels(vhValue);
  console.log(`${vhValue}vh équivaut à ${pixelsValue}px`);