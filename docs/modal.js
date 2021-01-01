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
  window.location.reload();
}
// f validate form 
function validate() {
  const form = document.reserve;
  const smallFirst = document.getElementById("first").nextElementSibling;
  const smallLast = document.getElementById("last").nextElementSibling;
  const email = document.getElementById("email").value;
  const small = document.getElementById("email").nextElementSibling;
  const smallHb = document.getElementById("birthdate").nextElementSibling;
  const smallQt = document.getElementById("quantity").nextElementSibling;
  const smallL = document.getElementById("v").nextElementSibling;
  const smallcheck = document.getElementById("vv").nextElementSibling;

  // validate first name input
  if (form.first.value == "" || form.first.value.length < 2) {
    // mess error injected <small>
    smallFirst.innerHTML = "Vous devez rentrer votre prénom  (au minimun 2 lettres)."
    // on masque les autres messages d'erreurs
    smallLast.innerHTML = "";
    small.innerHTML = "";
    smallHb.innerHTML = "";
    smallQt.innerHTML = "";
    smallL.innerHTML = "";
    smallcheck.innerHTML = "";
    // color et bordure red pour l'erreur
    form.first.style.border = "2px solid #fe142f";
    // on masque les autres décorations 
    form.last.style.border = "";
    form.email.style.border = "";
    form.birthdate.style.border = "";
    form.quantity.style.border = "";
    return false;
  } else {
    // input valide, color green
    form.first.style.border = "2px solid #279e7a";
  }
  if (form.last.value == "" 
  || form.last.value.length < 2) {
    smallFirst.innerHTML = "";
    smallLast.innerHTML = "Vous devez rentrer votre nom (au minimun 2 lettres)"
    small.innerHTML = "";
    smallHb.innerHTML = "";
    smallQt.innerHTML = "";
    smallL.innerHTML = "";
    smallcheck.innerHTML = "";
    form.first.style.border = "";
    form.last.style.border = "2px solid #fe142f";
    form.email.style.border = "";
    form.birthdate.style.border = "";
    form.quantity.style.border = "";

    return false;
  }else {
    form.last.style.border = "2px solid #279e7a";
  }
  if(!checkEmail(email)) {
    smallFirst.innerHTML = "";
    smallLast.innerHTML = ""
    small.innerHTML = "Vous devez rentrer une adresse mail valide";
    smallHb.innerHTML = "";
    smallQt.innerHTML = "";
    smallL.innerHTML = "";
    smallcheck.innerHTML = "";
    form.first.style.border = "";
    form.last.style.border = "";
    form.email.style.border = "2px solid #fe142f";
    form.birthdate.style.border = "";
    form.quantity.style.border = "";
    return false;
  } else {
    form.email.style.border = "2px solid #279e7a";
  }
  if (form.birthdate.value == "") {
    smallFirst.innerHTML = "";
    smallLast.innerHTML = ""
    small.innerHTML = "";
    smallHb.innerHTML = "Vous devez entrer votre dâte d'anniversaire";
    smallQt.innerHTML = "";
    smallL.innerHTML = "";
    smallcheck.innerHTML = "";
    form.first.style.border = "";
    form.last.style.border = "";
    form.email.style.border = "";
    form.birthdate.style.border = "2px solid #fe142f";
    form.quantity.style.border = "";
    return false;
  }else {
    form.birthdate.style.border = "2px solid #279e7a";
  }
  if (form.quantity.value == "") {
    smallFirst.innerHTML = "";
    smallLast.innerHTML = ""
    small.innerHTML = "";
    smallHb.innerHTML = "";
    smallQt.innerHTML = "Vous devez sélectionner une valeur numérique";
    smallL.innerHTML = "";
    smallcheck.innerHTML = "";
    form.first.style.border = "";
    form.last.style.border = "";
    form.email.style.border = "";
    form.birthdate.style.border = "";
    form.quantity.style.border = "2px solid #fe142f";
    return false;
  } else {
    form.quantity.style.border = "2px solid #279e7a";
  }
  if (form.location.value == "" && form.quantity.value !== "0") {
    smallFirst.innerHTML = "";
    smallLast.innerHTML = ""
    small.innerHTML = "";
    smallHb.innerHTML = "";
    smallQt.innerHTML = "";
    smallL.innerHTML = "Vous devez choisir une option";
    smallcheck.innerHTML = "";
    return false;
  }
  if (form.checkbox1.checked == false) {
    smallFirst.innerHTML = "";
    smallLast.innerHTML = ""
    small.innerHTML = "";
    smallHb.innerHTML = "";
    smallQt.innerHTML = "";
    smallL.innerHTML = "";
    smallcheck.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation."
    return false;
  } 
  if (form.first.value !== "" && 
      form.last.value !== "" && 
      checkEmail(email) && 
      form.birthdate.value !== "" &&
      form.quantity.value !== "" &&
      form.location.value !== "" && 
      form.checkbox1.checked == true 
      ||
      form.first.value !== "" && 
      form.last.value !== "" && 
      checkEmail(email) && 
      form.birthdate.value !== "" &&
      // quand lme nb de tournoi == 0, pas obliger de selec une ville.
      form.quantity.value == "0" &&
      form.location.value == "" && 
      form.checkbox1.checked == true 
  ){
   // Launch modal remerciement
    document.getElementById('thx').innerHTML = `
    <div>
          <div class="thxxx">
            <p class="txtThx">
            Merci ! <br>Votre réservation a bien été enregistré.
            <p>
          <input
          class="btn-submit"
          type="submit"
          class="button"
          value="Quitter"
        />
        </div>
    </div>
    `;
    return false;
  }
}

// f test address mail input with REGEX.
function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}