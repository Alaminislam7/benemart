import { QueryOptionsType, Product } from "@/framework/basic-rest/types";
import http from "@/framework/basic-rest/utils/http";
import { API_ENDPOINTS } from "@/framework/basic-rest/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchBestSellerProducts = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const { data } = await http.get(API_ENDPOINTS.BEST_SELLER_PRODUCTS);
	return data as Product[];
};
export const useBestSellerProductsQuery = (options: QueryOptionsType) => {
	return useQuery<Product[], Error>(
		[API_ENDPOINTS.BEST_SELLER_PRODUCTS, options],
		fetchBestSellerProducts
	);
};
