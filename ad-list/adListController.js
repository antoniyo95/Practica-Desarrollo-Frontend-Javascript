import { getAds } from "./ads.js";
import { buildAdView, buildSpinnerView, buildErrorLoadingAds } from "./adView.js";

export async function adListController(adListElement) {
  adListElement.innerHTML = buildSpinnerView();
  let ads = [];
  
  try {
    ads = await getAds();
    adListElement.innerHTML = '';

    for (const ad of ads) {
      const newAdElement = buildAdView(ad);
      adListElement.appendChild(newAdElement);
    }
  } catch (error) {
    
    adListElement.innerHTML = buildErrorLoadingAds();
  }
  
}