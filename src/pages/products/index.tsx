import Container from "@/components/ui/container";
import Layout from "@/components/layout/layout";
import { ShopFilters } from "@/components/shop/filters";
import StickyBox from "react-sticky-box";
import { ProductGrid } from "@/components/product/product-grid";
import ActiveLink from "@/components/ui/active-link";
import { BreadcrumbItems } from "@/components/common/breadcrumb";
import { ROUTES } from "@/utils/routes";

export default function Products() {

	return (
		<>
			<Container>
				<div className={`flex pt-8 pb-16 lg:pb-20`}>
					<div className="flex-shrink-0 pe-24 hidden lg:block w-96">
						<StickyBox offsetTop={50} offsetBottom={20}>
							<div className="pb-7">
								<BreadcrumbItems separator="/">
									<ActiveLink
										href={"/"}
										activeClassName="font-semibold text-heading"
									>
										<a>Home</a>
									</ActiveLink>
									<ActiveLink
										href={ROUTES.PRODUCT}
										activeClassName="font-semibold text-heading"
									>
										<a className="capitalize">products</a>
									</ActiveLink>
								</BreadcrumbItems>
							</div>
							<ShopFilters />
						</StickyBox>
					</div>

					<div className="w-full lg:-ms-9">
						<ProductGrid />
					</div>
				</div>
			</Container>
		</>
	);
}

Products.Layout = Layout;

