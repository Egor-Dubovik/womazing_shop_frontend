import { $host, $authHost } from './index';
import jwtDecode from 'jwt-decode';
import { IBrandProduct, IColor, IProduct, ITypeProduct } from 'types/product.interface';

export const createColor = async (color: IColor) => {
  const { data } = await $authHost.post('api/color', color);
  return data;
};

export const createType = async (type: ITypeProduct) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const createBrand = async (brand: IBrandProduct) => {
  const { data } = await $authHost.post('api/brand', brand);
  return data;
};

export const createProduct = async (product: FormData) => {
  const { data } = await $authHost.post('api/product', product);
  return data;
};

export const getColor = async () => {
  const { data } = await $host.get('api/color');
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

export const getAllProducts = async (
  typeId: number | undefined,
  brandId: number | undefined,
  page: number,
  limit: number
) => {
  const { data } = await $host.get('api/product', { params: { typeId, brandId, page, limit } });
  return data;
};

export const getOneProduct = async (id: number) => {
  const { data } = await $host.get(`api/product/${id}`);
  return data;
};
