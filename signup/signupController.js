import { pubSub } from "../pubsub.js";
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
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'User created')
        window.location = '/'
      } catch (error) {
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
      }
    }
  })

  function isEmailValid(email) {
    const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (!mailRegExp.test(email)) {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'The email does not have a valid format.')
      return false
    }

    return true
  }

  function isPasswordValid(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'The password does not match.')
      return false;
    }

    return true
  }
  
}
