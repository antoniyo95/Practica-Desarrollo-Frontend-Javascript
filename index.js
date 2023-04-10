import { notificationController } from "./notifications/notificationController.js";
import { adListController } from "./ad-list/adListController.js";
import { userActionsController } from "./user-actions/userActionsController.js";

const adListElement = document.querySelector('.ads-list');
const notificationsElement = document.querySelector('.notifications')
const userActionsElement = document.querySelector('.user-actions')

notificationController(notificationsElement);
adListController(adListElement)
userActionsController(userActionsElement)
