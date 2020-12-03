function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";//when close burger
  }
  console.log(x.className);
  console.log(document.reserve.location.value);


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
  console.log(form.quantity.value);
  if (checkEmail(email) && form.birthdate.value !== null &&form.quantity.value == 0 )
    return true;
  if (checkEmail(email) && form.birthdate.value !== ""&&form.location.value !== "" )
    return true;
  else {
    console.log('retry ');
    return false;
  }

}
function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}