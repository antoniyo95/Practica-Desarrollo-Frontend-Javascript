export function buildAdView(ad) {
  const newAdElement = document.createElement('article');
  newAdElement.innerHTML = `
    <p>${ad.name}</p>
    <p>${ad.description} - ${ad.type}</p>
  `;

  return newAdElement;
}