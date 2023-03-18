import { adListController } from "./ad-list/adListController.js";
import { notificationController } from "./notifications/notificationsController.js";

const adListElement = document.querySelector('.ads-list');
const notificationsElement = document.querySelector('.notifications')

const showMessage = notificationController(notificationsElement);
adListController(adListElement, showMessage);