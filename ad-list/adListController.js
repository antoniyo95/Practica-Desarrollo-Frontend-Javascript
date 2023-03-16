import { ads } from "./ads.js";
import { buildAdView } from "./adView.js";

export function adListController(adListElement) {
  adListElement.innerHTML = '';
  for (const ad of ads) {
    const newAdElement = buildAdView(ad);
    adListElement.appendChild(newAdElement);
  }
}