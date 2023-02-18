import { $host, $authHost } from './index';
import jwtDecode from 'jwt-decode';
import { IBrandProduct, IProduct, ITypeProduct } from 'types/product.interface';

export const createType = async (type: ITypeProduct) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const createBrand = async (brand: IBrandProduct) => {
  const { data } = await $authHost.post('api/brand', brand);
  return data;
};

export const createProduct = async (product: IProduct) => {
  const { data } = await $authHost.post('api/product', product);
  return data;
};

export const getTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const getBrands = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

export const getAllProducts = async () => {
  const { data } = await $host.get('api/product');
  return data;
};

export const getOneProduct = async (id: number) => {
  const { data } = await $host.get(`api/product/${id}`);
  return data;
};
