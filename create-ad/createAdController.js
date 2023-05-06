export const createAdController = (createAdFormElement) => {
  createAdFormElement.addEventListener('submit', (event) =>{
    event.preventDefault();

    const formData = new formData(createAdFormElement);
    const adContent = formData.get('adContent');
  })
}