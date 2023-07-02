import { createAd } from './createAd.js';

export const createAdController = async (createAdFormElement) => {
  createAdFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(createAdFormElement);

    try {
      await createAd(formData);
      window.location = '/';
    } catch (error) {
      alert(error);
    }
  });
};
