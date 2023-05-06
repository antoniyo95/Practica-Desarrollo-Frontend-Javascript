export const createAd = (adContent) => {
  fetch('https://localhost:8000/api/ads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: adContent
    })
  })
}