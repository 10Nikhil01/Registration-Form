// to stop user to access thr code by right clicking then inspect
document.addEventListener(
  "contextmenu",
  (e) => {
    e.preventDefault();
  },
  false
);

//to stop user to inspect by ctrl-u to view source code and also for f12 to bring up console
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.keyCode == 123) {
    e.stopPropagation();
    e.preventDefault();
  }
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function validate() {
  let firstNameInput = document.getElementById("first-name").value;
  let lastNameInput = document.getElementById("last-name").value;
  let emailInput = document.getElementById("email").value;
  let cityInput = document.getElementById("city").value;
  let stateInput = document.getElementById("state").value;
  let zipInput = document.getElementById("zip").value;
  let tnCInput = document.getElementById("tnC").checked;

  let error = false;

  /* ------------------------------ for firstName ----------------------------- */
  if (firstNameInput.length >= 1) {
    document.getElementById("first-name-invalid").style.display = "none";
  } else {
    document.getElementById("first-name-invalid").style.display = "block";
    error = true;
  }

  /* ------------------------------ for lastName ------------------------------ */
  if (lastNameInput.length >= 1) {
    document.getElementById("last-name-invalid").style.display = "none";
  } else {
    document.getElementById("last-name-invalid").style.display = "block";
    error = true;
  }
  /* -------------------------------- for email ------------------------------- */
  if (
    emailInput &&
    emailInput.includes("@") &&
    emailInput.includes(".") &&
    emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
    emailInput.indexOf("@") !== 0 &&
    emailInput.indexOf("-") !== 0 &&
    !emailInput.match(/\ /)
  ) {
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    error = true;
  }

  /* -------------------------------- for city -------------------------------- */
  if (cityInput.length >= 3) {
    document.getElementById("city-invalid").style.display = "none";
  } else {
    document.getElementById("city-invalid").style.display = "block";
    error = true;
  }
  /* -------------------------------- for state ------------------------------- */
  if (stateInput) {
    document.getElementById("state-invalid").style.display = "none";
  } else {
    document.getElementById("state-invalid").style.display = "block";
    error = true;
  }
  /* -------------------------------- for zip ------------------------------- */
  if (zipInput.length >= 6) {
    document.getElementById("zip-invalid").style.display = "none";
  } else {
    document.getElementById("zip-invalid").style.display = "block";
    error = true;
  }
  /* ------------------------------- for tnC ------------------------------- */
  if (tnCInput) {
    document.getElementById("tnC-invalid").style.display = "none";
  } else {
    document.getElementById("tnC-invalid").style.display = "block";
    error = true;
  }
  if (!error) {
    alert("Your details have been saved successfully!");
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("tnC").checked = false;
  }
}

function firstNameValidation() {
  let firstNameInput = document.getElementById("first-name").value;

  if (firstNameInput.length >= 1) {
    document.getElementById("first-name-invalid").style.display = "none";
  } else {
    document.getElementById("first-name-invalid").style.display = "block";
  }
}

function lastNameValidation() {
  let lastNameInput = document.getElementById("last-name").value;

  if (lastNameInput.length >= 1) {
    document.getElementById("last-name-invalid").style.display = "none";
  } else {
    document.getElementById("last-name-invalid").style.display = "block";
  }
}

function emailValidation() {
  let emailInput = document.getElementById("email").value;

  if (
    emailInput &&
    emailInput.includes("@") &&
    emailInput.includes(".") &&
    emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
    emailInput.indexOf("@") !== 0 &&
    emailInput.indexOf("-") !== 0 &&
    !emailInput.match(/\ /)
  ) {
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
  }
}

function cityValidation() {
  let cityInput = document.getElementById("city").value;
  if (cityInput.length >= 3) {
    document.getElementById("city-invalid").style.display = "none";
  } else {
    document.getElementById("city-invalid").style.display = "block";
  }
}

function stateValidation() {
  let stateInput = document.getElementById("state").value;

  if (stateInput) {
    document.getElementById("state-invalid").style.display = "none";
  } else {
    document.getElementById("state-invalid").style.display = "block";
  }
}

function zipValidation() {
  let zipInput = document.getElementById("zip").value;

  if (zipInput.length == 6) {
    document.getElementById("zip-invalid").style.display = "none";
  } else {
    document.getElementById("zip-invalid").style.display = "block";
  }
}

function tnCValidation() {
  let tnCInput = document.getElementById("tnC").checked;
  if (tnCInput) {
    document.getElementById("tnC-invalid").style.display = "none";
  } else {
    document.getElementById("tnC-invalid").style.display = "block";
  }
}
