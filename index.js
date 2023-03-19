import { adListController } from "./ad-list/adListController.js";
import { notificationController } from "./notifications/notificationsController.js";

const adListElement = document.querySelector('.ads-list');
const notificationsElement = document.querySelector('.notifications')

const showMessage = notificationController(notificationsElement);
adListController(adListElement);

adListElement.addEventListener('newNotification', (event) => {
  console.log('I have received the event.', event.detail.message)
  showMessage(event.detail.message)
})