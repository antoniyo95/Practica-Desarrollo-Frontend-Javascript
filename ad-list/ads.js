/*
export const ads = [{
  name: 'Bicycle',
  description: 'Grey bicycle',
  price: 50,
  image: 'bicycle.jpg',
  type: 'Purchase'
},

{
  name: 'Phone',
  description: 'Redmi Note Phone',
  price: 30,
  image: 'phone.jpg',
  type: 'Purchase'
},

{
  name: 'Car',
  description: 'Red car',
  price: 1200,
  image: 'car.jpg',
  type: 'Sale'
}
];
*/

export async function getAds () {
  const adsUrl = "http://localhost:8000/api/ads";

  const response = await fetch(adsUrl);
  const ads = await response.json();

  return ads;
};