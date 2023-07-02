import { pubSub } from "../pubsub.js";
import { getAds } from "./ads.js";
import { buildAdView, buildSpinnerView, buildEmptyAdList } from "./adView.js";

export async function adListController(adListElement) {
  adListElement.innerHTML = buildSpinnerView();
  let ads = [];
  
  try {
    ads = await getAds();
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'The ads were loaded successfully.')

    adListElement.innerHTML = '';
    
    if (ads.length > 0) {
      drawAds(ads, adListElement);
    } else {
      showEmptyMessage(adListElement);
    }
  
  } catch (error) {
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'The ads could not be loaded.')
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
