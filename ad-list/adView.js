export function buildAdView(ad) {
  const newAdElement = document.createElement('article');
  newAdElement.classList.add('ad')
  const adDate = new Date(ad.date);

  newAdElement.innerHTML = `
    <a href="/ad-detail.html?adID=${ad.id}">
    <div class="user-info">
      <span>${ad.handle}</span>
      <img src="${ad.avatar}" />
    </div>
    <p>${ad.content} - ${adDate.toISOString()}</p>
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