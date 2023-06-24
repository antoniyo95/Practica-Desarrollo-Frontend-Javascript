export const createAd = async (adContent) => {

  const newAd = {
    content: adContent
  }

  const token = localStorage.getItem('token')

  await fetch('http://localhost:8000/api/ads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(newAd)
  })
  if(!response.ok) {
    throw new Error('Error creating ad')
  }
}