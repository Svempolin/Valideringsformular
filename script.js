const form = document.querySelector("#validationForm");
const errorMessage = document.querySelector("#errorMessage");
const passWord = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeatPassword");

const validateText = (id) => {
  const input = document.querySelector(id);

  if (input.value.trim() === " ") {
    console.log(input.id + "YOU NEED TO HAVE A CORRECT NAME  ");
    return setError(input);
  } else if (input.value.length < 2) {
    console.log(input.id + "You need to have at least 3 characters name");
    return setError(input);
  } else if (/\d/.test(input.value)) {
    console.log(input.id + "your input contains numbers");
    return setError(input);
  } else {
    return setSuccess(input);
  }
};

const validateEmail = (id) => {
  const email = document.querySelector(id);

  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;

  if (email.value.trim() === " ") {
    console.log(input.id + " you have to fill in a email");
    return setError(email);
  } else if (!regEx.test(email.value)) {
    console.log(input.id + " this is not a valid email");
    return setError(email);
  } else {
    return setSuccess(email);
  }
};

const validatePassword = (id) => {
  const passWord = document.querySelector(id);
  const repeatPassword = document.querySelector(id);
  console.log(passWord);
  if (passWord.value.trim() === "") {
    console.log("du har inte skrivit något ");
    setError(passWord, "password is requierd");
  } else if (passWord.value.length < 8) {
    console.log("behöver vara längre än 8");
    setError(passWord, "password must be at least 8 character");
  } else if (repeatPassword.value !== passWord.value) {
    console.log("the password do not match");
    setError(passWord);
    //   } else if (repeatPassword.value === passWord.value) {
    //     console.log("the password match!!!!!!!!!");
    //     return setSuccess(passWord);
  } else {
    console.log("the password match!!!!!!!!!");
    setSuccess(passWord);
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

// const validateRepeatPassword = (id) => {
// //   const repeatPassword = document.getElementById("repeatPassword");
// //   console.log("repeatPassword");
// const repeatPassword = document.querySelector(id);
//   console.log(repeatPassword);
//   if (repeatPassword.value.trim() === "") {
//     setError(passWord);
//   } else if (repeatPassword.value !== passWord.value) {
//     console.log("the password do not match");
//     setError(passWord);
//   } else if (repeatPassword.value === passWord.value) {
//     return setSuccess(passWord);
//   }
// };

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
      // } else if (form[i].value !== repeatPassword.value) {
      //   console.log("the password is not matching");
      //   errors[i] = setError(repeatPassword);
    } else if (form[i].type === "checkbox") {
      errors[i] = validateCheckbox(inputId);
    }
  }

  console.log(errors);

  if (errors.includes(false)) {
    errorMessage.classList.remove("d-none");

    console.log("det finns fel i formuläret");
  } else {
    errorMessage.classList.add("d-none");
    console.log("allt gick igenom");
    const user = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: passWord.value,
    };

    console.log(user);
  }
});
