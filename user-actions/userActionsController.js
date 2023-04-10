import { decodeToken } from "../utils/decodeToken.js"
import { buildGreeting } from "./userActionsView.js"

export function userActionsController (userActionsElement) {
  const token = localStorage.getItem('token')

  if (token) {
    const loginLinkElement = userActionsElement.querySelector('#loginLink')
    const signupLinkElement = userActionsElement.querySelector('#signupLink')
    loginLinkElement.remove()
    signupLinkElement.remove()

    const payload = decodeToken(token)
    userActionsElement.appendChild(buildGreeting(payload.username))
  } else {
    const createAdLinkElement = userActionsElement.querySelector('#createAdLink')
    createAdLinkElement.remove()
  }
}