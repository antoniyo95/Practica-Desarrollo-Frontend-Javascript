export async function getAds() {
  const adsUrl = "http://localhost:8000/api/ads";

  const response = await fetch(adsUrl);
  const ads = await response.json();

  return ads;
}
