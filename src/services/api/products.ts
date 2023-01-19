import axios from 'axios';
import endPoints from '.';

type BodyType = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: URL[];
};

export const addProduct = async (body: BodyType) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  console.log(body);

  const response = await axios.post(endPoints.products.create, body, config);

  return response.data;
};
