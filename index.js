import { adListController } from "./ad-list/adListController.js";

const adListElement = document.querySelector('.ads-list');
const loadAdsButtonElement = document.querySelector('#loadAdsButton')

loadAdsButtonElement.addEventListener('click', () => {
  adListController(adListElement);
});
