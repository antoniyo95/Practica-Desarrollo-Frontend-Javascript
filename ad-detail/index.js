import { notificationController } from "../notifications/notificationController.js";
import { adDetailController } from "./adDetailController.js";

const params = new URLSearchParams(window.location.search)
const adId = params.get('adID');
const notificationsElement = document.querySelector('.notifications')

if (!adId) {
  window.location = '/'
} else {
  const adDetailElement = document.querySelector('.ad-detail');

  adDetailController(adDetailElement, adId)
}
notificationController(notificationsElement)