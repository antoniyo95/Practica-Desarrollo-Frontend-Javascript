import { createAd } from "./createAd.js";

export const createAdController = async (createAdFormElement) => {
  createAdFormElement.addEventListener('submit', async (event) =>{
    event.preventDefault();

    const formData = new FormData(createAdFormElement);
    const adContent = formData.get('adContent');

    try {
      await createAd(adContent)
      window.location = '/'
    } catch (error) {
      alert(error)
    }
  })
}