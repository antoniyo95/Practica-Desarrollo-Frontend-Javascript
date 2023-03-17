export function buildAdView(ad) {
  const newAdElement = document.createElement('article');
  newAdElement.classList.add('ad')
  const adDate = new Date(ad.date);

  newAdElement.innerHTML = `
    <div class="user-info">
      <span>${ad.handle}</span>
      <img src="${ad.avatar}" />
    </div>
    <p>${ad.content} - ${adDate.toISOString()}</p>
    <span>${ad.retweets}</span><span>${ad.likes}</span><span>${ad.replies}</span>
  `;

  return newAdElement;
}

export function buildSpinnerView() {
  return `<div class="spinner"></div>`
}

export function buildErrorLoadingAds() {
  return `<p class="load-error">There has been a problem loading the ads. Please try again later.</p>`
}