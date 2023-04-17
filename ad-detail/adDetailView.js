export const buildAdDetail = (ad) => {
  const adDate = new Date(ad.date)
  return `
  <div class="user-info">
      <span>${ad.handle}</span>
      <img src="${ad.avatar}" />
    </div>
    <p>${ad.content} - ${adDate.toISOString()}</p>
    <span>${ad.retweets}</span><span>${ad.likes}</span><span>${ad.replies}</span>
  `
}