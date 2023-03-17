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
  const adsUrl = "https://gist.githubusercontent.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json"

  const response = await fetch(adsUrl);
  const ads = await response.json();

  return ads;
};