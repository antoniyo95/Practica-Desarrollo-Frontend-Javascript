export const createAd = async (adContent) => {
  const newAd = {
    foto: adContent.get('photo'),
    nombre: adContent.get('name'),
    descripcion: adContent.get('description'),
    precio: adContent.get('price'),
    compraVenta: adContent.get('compraVenta')
  };

  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:8000/api/ads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newAd)
  });

  if (!response.ok) {
    throw new Error('Error creating ad');
  }
};
