export const buildAdDetail = (ad) => {
  const adDate = new Date(ad.updatedAt)
  return `
    <p>${ad.content} - ${adDate.toISOString()}</p>
  `
}