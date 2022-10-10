const form = document.querySelector("#validationForm");
const errorMessage = document.querySelector("#errorMessage");

const validateText = (id) => {
  const input = document.querySelector(id);

  if (input.value.trim() === " ") {
    console.log("YOU NEED TO HAVE A CORRECT NAME  ");
    return setError(input);
  } else if (input.value.length < 5) {
    console.log("YOU NEED TO HAVE A CORRECT name");
    return setError(input);
  } else {
    console.log("GREAT-NAME");
    return setSuccess(input);
  }
};

const validateEmail = (id) => {
  const email = document.querySelector(id);

  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;

  if (email.value.trim() === " ") {
    console.log("YOU NEED TO HAVE A CORRECT EMAIL");
    return setError(email);
  } else if (!regEx.test(email.value)) {
    console.log("YOU NEED TO HAVE A CORRECT EMAIL");
    return setError(email);
  } else {
    console.log("GREAT-EMAIL");
    return setSuccess(email);
  }
};

const validateCheckbox = (id) => {
  const checkbox = document.querySelector(id);
  if (!checkbox.checked) {
    console.log("YOU NEED TO CHECK THE BOX");
    return setError(checkbox);
  } else {
    console.log("GREAT-checked");
    return setSuccess(checkbox);
  }
};

// MINNA ERROR FUNKTIONER

const setSuccess = (input) => {
  input.classList.remove("is-not-ok");
  input.classList.add("is-ok");
  return true;
  //   input.focus();
  //   errorMessage.classList.remove("d-none");
  //   errorMessage.classList.add("d-none");
  //   return true;
};

const setError = (input) => {
  input.classList.add("is-not-ok");
  input.classList.remove("is-ok");
  input.focus();
  //   errorMessage.classList.add("d-none");
  //   errorMessage.classList.remove("d-none");
  return false;
};

// GÖR SÅ ATT SIDAN EJ LADDAR OM

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //MIN ERROR FUNKTION

  const errors = [];

  for (let i = 0; i < form.length; i++) {
    const inputId = "#" + form[i].id;

    if (form[i].type === "text") {
      errors[i] = validateText(inputId);
    } else if (form[i].type === "email") {
      errors[i] = validateEmail(inputId);
    } else if (form[i].type === "checkbox") {
      errors[i] = validateCheckbox(inputId);
    }
  }
});
