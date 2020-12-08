function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";//when close burger
  }
  console.log(x.className);
  console.log(document.reserve.location.value);
  console.log(document.reserve.checkbox1.checked);
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//btn close
const closeBtn = document.querySelectorAll(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Launch btn-close event
closeBtn.forEach((close) => close.addEventListener("click", closeModal));
//close modal form
function closeModal() {
  modalbg.style.display = "none";
}


function validate() {

  const form = document.reserve;
  const email = document.getElementById("email").value;
  const small = document.getElementById("email").nextElementSibling;
  const smallL = document.getElementById("v").nextElementSibling;
  const smallHb = document.getElementById("birthdate").nextElementSibling;
  const smallcheck = document.getElementById("vv").nextElementSibling;

  if (form.checkbox1.checked == false) {
    smallcheck.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions."
    return false;
  }
  if (form.birthdate.value == "") {
    smallHb.innerHTML = "Vous devez entrer votre dâte d'anniversaire";
    return false;
  }
  if (form.location.value == "") {
    smallL.innerHTML = "Vous devez choisir une option";
    return false;
  }
  if(!checkEmail(email)) {
    small.innerHTML = "Veuillez rentrez une adresse mail valide";
    return false;
  }
  if (checkEmail(email) && form.location.value !== "" && form.birthdate.value !== "" && form.checkbox1.checked == true) {
    thx();
    return true;
  }
  else { 
    return false;
  }
}

function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function thx() {
  alert("Merci ! Votre réservation a été reçue.");
  //modal thx ?
}