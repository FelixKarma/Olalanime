const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function(event) {
  event.preventDefault(); 
    const emailInput = document.getElementById("email2");
    const inputValue = emailInput.value.trim();

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(inputValue)) {
    modal.style.display = "block";
    modal.classList.add("fixed-modal");

    
    modal.style.position = "fixed";
  } else {
    
    alert("Veuillez saisir une adresse e-mail valide.");
  }
}
   
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
