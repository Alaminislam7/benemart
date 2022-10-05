import ProductsBlock from "@/containers/products-block";
import { useBestSellerProductsQuery } from "@/framework/basic-rest/product/get-best-seller-products";


export default function BestSellerProduct() {
  const {data, isLoading, error} =  useBestSellerProductsQuery({
    limit: 10,
  })

  return (
    <ProductsBlock
      sectionHeading="Best Sellers"
      products={data}
      loading={isLoading}
      error={error?.message}
      uniqueKey="best-sellers"
    />
  )
}