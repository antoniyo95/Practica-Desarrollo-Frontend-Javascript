export function buildAdView(ad) {
  const newAdElement = document.createElement('article');
  newAdElement.classList.add('ad')
  const adDate = new Date(ad.date);

  newAdElement.innerHTML = `
    <a href="/ad-detail.html?adID=${ad.id}">
    <div class="user-info">
    </div>
    <p>${ad.content}</p>
    </a>
  `;

  return newAdElement;
}

export function buildSpinnerView() {
  return `<div class="spinner"></div>`
}

export function buildErrorLoadingAds() {
  return `<p class="load-error">There has been a problem loading the ads. Please try again later.</p>`
}

export function buildEmptyAdList() {
  return `<p>There are no results available.</p>`
}