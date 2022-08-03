function validate() {
  let firstNameInput = document.getElementById("first-name").value;
  let lastNameInput = document.getElementById("last-name").value;
  let emailInput = document.getElementById("email").value;
  let cityInput = document.getElementById("city").value;
  let stateInput = document.getElementById("state").value;
  let zipInput = document.getElementById("zip").value;
  let tnCInput = document.getElementById("tnC").checked;
  
  //for firstName
  if (firstNameInput.length >= 1) {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
  } else {
    document.getElementById("first-name-invalid").style.display = "block";
    document.getElementById("first-name-valid").style.display = "none";
  }

  //for lastName
  if (lastNameInput.length >= 1) {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
  } else {
    document.getElementById("last-name-invalid").style.display = "block";
    document.getElementById("last-name-valid").style.display = "none";
  }
  //for email
  var temp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailInput.match(temp)){
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
      } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
      }

  //for city  
  if(cityInput.length >=1){
        document.getElementById("city-valid").style.display = "block";
        document.getElementById("city-invalid").style.display = "none";
    } else{
        document.getElementById("city-invalid").style.display = "block";
        document.getElementById("city-valid").style.display = "none";
    }
   //for state 
    if(stateInput){
        document.getElementById("state-valid").style.display = "block";
        document.getElementById("state-invalid").style.display = "none";
    } else{
        document.getElementById("state-invalid").style.display = "block";
        document.getElementById("state-valid").style.display = "none";
    }
    //for zip
    if(zipInput.length >=1){
        document.getElementById("zip-valid").style.display = "block";
        document.getElementById("zip-invalid").style.display = "none";
    } else{
        document.getElementById("zip-invalid").style.display = "block";
        document.getElementById("zip-valid").style.display = "none";
    }  
    // for tnC
  if(tnCInput){
    document.getElementById("tnC-valid").style.display = "block";
    document.getElementById("tnC-invalid").style.display = "none";
  } else {
    document.getElementById("tnC-invalid").style.display = "block";
    document.getElementById("tnC-valid").style.display = "none";
  }

  console.log("User Full Name - " + firstNameInput + ' ' + lastNameInput + "\n" + "User Email - " + emailInput + "\n" + "User Address - " + cityInput + ',' + ' ' + stateInput + '(' + zipInput + ')')
}

function firstNameValidation() {
  let firstNameInput = document.getElementById("first-name").value;

  if (firstNameInput.length >= 1) {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
  } else {
    document.getElementById("first-name-invalid").style.display = "block";
    document.getElementById("first-name-valid").style.display = "none";
  }
}
function lastNameValidation() {
  let lastNameInput = document.getElementById("last-name").value;

  if (lastNameInput.length >= 1) {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
  } else {
    document.getElementById("last-name-invalid").style.display = "block";
    document.getElementById("last-name-valid").style.display = "none";
  }
}

function emailValidation(){
    let emailInput = document.getElementById("email").value;

    var temp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(emailInput.match(temp)){
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
      } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
      }
}

function cityValidation() {
    let cityInput = document.getElementById("city").value;
    if(cityInput.length >=1){
        document.getElementById("city-valid").style.display = "block";
        document.getElementById("city-invalid").style.display = "none";
    } else{
        document.getElementById("city-invalid").style.display = "block";
        document.getElementById("city-valid").style.display = "none";
    }
}
function stateValidation(){
    let stateInput = document.getElementById("state").value;

    if(stateInput){
        document.getElementById("state-valid").style.display = "block";
        document.getElementById("state-invalid").style.display = "none";
    } else{
        document.getElementById("state-invalid").style.display = "block";
        document.getElementById("state-valid").style.display = "none";
    }
}
function zipValidation(){
    let zipInput = document.getElementById("zip").value;

    if(zipInput.length >=1){
        document.getElementById("zip-valid").style.display = "block";
        document.getElementById("zip-invalid").style.display = "none";
    } else{
        document.getElementById("zip-invalid").style.display = "block";
        document.getElementById("zip-valid").style.display = "none";
    }
}

function tnCValidation(){
    let tnCInput = document.getElementById("tnC").checked;   
    if(tnCInput){
        document.getElementById("tnC-valid").style.display = "block";
        document.getElementById("tnC-invalid").style.display = "none";
      } else {
        document.getElementById("tnC-invalid").style.display = "block";
        document.getElementById("tnC-valid").style.display = "none";
      }

}