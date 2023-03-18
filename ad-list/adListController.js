import { getAds } from "./ads.js";
import { buildAdView, buildSpinnerView, buildErrorLoadingAds, buildEmptyAdList } from "./adView.js";

export async function adListController(adListElement, showMessage) {
  adListElement.innerHTML = buildSpinnerView();
  let ads = [];
  
  try {
    ads = await getAds();
    showMessage('The ads were loaded successfully.');

    adListElement.innerHTML = '';
    
    if (ads.length > 0) {
      drawAds(ads, adListElement);
    } else {
      showEmptyMessage(adListElement);
    }
  
  } catch (error) {
    
    //adListElement.innerHTML = buildErrorLoadingAds();
    showMessage('The ads could not be loaded.');
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



