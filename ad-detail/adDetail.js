export const getAdById = async (adId) => {
  const response = await fetch(`http://localhost:8000/api/ads/${adId}`)

  if (!response.ok) {
    throw new Error('The requested advertisement does not exist.')
  }

  const ad = await response.json();

  return ad;
}