import { getAds } from "./ads.js";
import { buildAdView, buildSpinnerView, buildEmptyAdList } from "./adView.js";

export async function adListController(adListElement) {
  adListElement.innerHTML = buildSpinnerView();
  let ads = [];
  
  try {
    ads = await getAds();
    dispatchCustomEvent('The ads were loaded successfully.', adListElement);

    adListElement.innerHTML = '';
    
    if (ads.length > 0) {
      drawAds(ads, adListElement);
    } else {
      showEmptyMessage(adListElement);
    }
  
  } catch (error) {
    dispatchCustomEvent('The ads could not be loaded.', adListElement);
    adListElement.innerHTML = '';
  }
  
}

function drawAds(ads, adListElement) {
  for (const ad of ads) {
    const newAdElement = buildAdView(ad);
    adListElement.appendChild(newAdElement);
  }
}

function showEmptyMessage(adListElement) {
  adListElement.innerHTML = buildEmptyAdList();
}

function dispatchCustomEvent (message, adListElement) {
  const event = new CustomEvent('newNotification', {
    detail: {
      message: message
    }
  })

  adListElement.dispatchEvent(event);
}