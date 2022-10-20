const form = document.querySelector("#validationForm");
const errorMessage = document.querySelector("#errorMessage");
const passWord = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeatPassword");

const validateText = (id) => {
  const input = document.querySelector(id);

  if (input.value.trim() === " ") {
    // console.log("YOU NEED TO HAVE A CORRECT NAME  ");
    return setError(input);
  } else if (input.value.length < 5) {
    // console.log("YOU NEED TO HAVE A CORRECT name");
    return setError(input);
  } else {
    // console.log("GREAT-NAME");
    return setSuccess(input);
  }
};

const validateEmail = (id) => {
  const email = document.querySelector(id);

  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;

  if (email.value.trim() === " ") {
    // console.log("YOU NEED TO HAVE A CORRECT EMAIL");
    return setError(email);
  } else if (!regEx.test(email.value)) {
    // console.log("YOU NEED TO HAVE A CORRECT EMAIL");
    return setError(email);
  } else {
    console.log("GREAT-EMAIL");
    return setSuccess(email);
  }
};

const validateCheckbox = (id) => {
  const checkbox = document.querySelector(id);
  if (!checkbox.checked) {
    // console.log("YOU NEED TO CHECK THE BOX");
    return setError(checkbox);
  } else {
    // console.log("GREAT-checked");
    return setSuccess(checkbox);
  }
};

// const validatePassword = (input) => {
//   console.log();

//   if (passWord.value.trim() == " ") {
//     console.log("skriv in lösen");
//     return setError(passWord);
//   } else if (passWord.value.length < 8) {
//     return setError;
//   } else if (repeatPassword.input.trim() == " ") {
//     console.log("repetera lösen");
//     return setError(passWord);
//   } else if (passWord.value !== repeatPassword.value) {
//     console.log("the password doset match");
//     return setError(passWord);
//   } else {
//     return setSuccess;
//   }
// };

const validatePassword = (id) => {
  const passWord = document.querySelector(id);
  if (passWord.value.trim() === "") {
    console.log("du har inte skrivit något ");
    return setError(passWord);
  } else if (passWord.length < 8) {
    console.log("behöver vara längre än 8");
    setError(passWord);
  } else {
    return setSuccess;
  }
};

const validateRepeatPassword = (id) => {
  //   console.log("repeat password");
  const repeatPassword = document.querySelector(id);
  if (repeatPassword.value.trim() === "") {
    setError(passWord);
  } else if (validatePassword.value !== validateRepeatPassword.value) {
    console.log("the password do not match");
    setError(passWord);
  } else if (validatePassword.value === validateRepeatPassword.value) {
    return setSuccess(passWord);
  }
};

// MINNA ERROR FUNKTIONER

const setSuccess = (input) => {
  input.classList.remove("is-not-ok");
  input.classList.add("is-ok");
  //   console.log()

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
  errorMessage.classList.add("d-none");
  errorMessage.classList.remove("d-none");
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
    } else if (form[i].type === "password") {
      errors[i] = validatePassword(inputId);
    } else if (form[i].type === "checkbox") {
      errors[i] = validateCheckbox(inputId);
    }
  }

  console.log(errors);

  if (errors.includes(false)) {
    errorMessage.classList.remove("d-none");
    // visa fel längst ner
    console.log("det finns fel i formuläret");
  } else {
    errorMessage.classList.add("d-none");
    // dölja
    const user = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: passWord.value,
    };

    console.log(user);
    // console.log(document.getElementById("firstName").value);
    // console.log(document.getElementById("lastName").value);
    // console.log(document.getElementById("email").value);
    // console.log(document.getElementById("checkbox"));
    // console.log(document.getElementById("password").value);
    // console.log(document.getElementById("repeatPassword").value);
  }
});
