export const buildAdDetail = (ad) => {
  const adDate = new Date(ad.updatedAt);
  const adImage = ad.foto ? `<img src="${ad.foto}" alt="Ad Image">` : '';
  const adCompraVenta = ad.compraVenta === 'compra' ? 'Purchase' : 'Sale';

  return `
    <article class="ad">
      ${adImage}
      <div class="ad-info">
        <h2>${ad.nombre}</h2>
        <p>${ad.descripcion}</p>
        <p>Price: ${ad.precio}</p>
        <p>${adCompraVenta}</p>
        <p>Date: ${adDate.toISOString()}</p>
      </div>
    </article>
    <button id="deleteAd">Delete AD</button>
  `;
}
