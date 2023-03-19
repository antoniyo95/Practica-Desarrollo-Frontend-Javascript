import { createUser } from "./signup.js";

export function signupController (signupElement) {

  signupElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailElement = signupElement.querySelector('#username');
    const passwordElement = signupElement.querySelector('#password');
    const passwordConfirmElement = signupElement.querySelector('#passwordConfirm');

    if (isEmailValid(emailElement.value) && isPasswordValid(passwordElement.value, passwordConfirmElement.value)) {
      try {
        await createUser(emailElement.value, passwordElement.value)
        signupElement.reset();
        alert("User created")
        window.location = '/'
      } catch (error) {
        alert(error.message)
      }
    }
  })

  function isEmailValid(email) {
    const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (!mailRegExp.test(email)) {
      alert('The email does not have a valid format.');
      return false
    }

    return true
  }

  function isPasswordValid(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
      alert('The password does not match.');
      return false;
    }

    return true
  }
  
}
