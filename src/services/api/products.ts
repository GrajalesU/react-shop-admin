import axios from 'axios';
import endPoints from '.';

type BodyAddProductType = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: URL[];
};

export const addProduct = async (body: BodyAddProductType) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post(endPoints.products.create, body, config);

  return response.data;
};

export const deleteProduct = async (id: number) => {
  const response = await axios.delete(endPoints.products.delete(id));
  return response.data;
};
