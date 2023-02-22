import { IBasketData } from 'types/basket.interface';
import { $host, $authHost } from './index';

export const createBasketProduct = async (productId: number, basketId: number) => {
  const { data } = await $authHost.post('api/basket', { productId, basketId });
  return data;
};

// export const deleteBasketProduct = async (basketId: number, id: number) => {
//   const { data } = await $authHost.delete('api/basket', { params: { basketId, id } });
//   return data;
// };

export const getBasketProducts = async (basketId: number): Promise<IBasketData> => {
  const { data } = await $authHost.get(`api/basket/${basketId}`);
  return data;
};

export const getBasketInfo = async (userId: number) => {
  const { data } = await $authHost.get('api/basket', { params: { userId } });
  return data;
};

// export const getOneProduct = async (id: number) => {
//   const { data } = await $host.get(`api/product/${id}`);
//   return data;
// };
