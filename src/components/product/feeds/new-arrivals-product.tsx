import ProductsBlock from "@/containers/products-block";
import { useNewArrivalProductsQuery } from "@/framework/basic-rest/product/get-all-new-product";


export default function NewArrivalsProduct() {
  const {data, error, isLoading} = useNewArrivalProductsQuery({
    limit: 10,
  })
  return (
    <ProductsBlock
      sectionHeading="New Arrivals"
      products={data}
      loading={isLoading}
      error={error?.message}
      uniqueKey="new-arrivals"
    />
  )

}