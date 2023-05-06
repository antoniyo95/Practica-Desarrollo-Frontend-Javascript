export const buildAdDetail = (ad) => {
  const adDate = new Date(ad.date)
  return `
  <div class="user-info">
      <span>${ad.handle}</span>
      <img src="${ad.avatar}" class="avatar" />
    </div>
    <p>${ad.content} - ${adDate.toISOString()}</p>
    <span>${ad.retweets} Retweets </span><span>${ad.likes} Likes </span><span>${ad.replies} Replies </span>
  `
}