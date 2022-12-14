import { BreadcrumbItems } from '@/components/common/breadcrumb'
import { ShopFilters } from '@/components/shop/filters'
import ActiveLink from '@/components/ui/active-link'
import Container from '@/components/ui/container'
import { ProductGrid } from "@/components/product/product-grid";
import { ROUTES } from '@/utils/routes'
import React from 'react'
import ReactStickyBox from 'react-sticky-box'

const Shop = () => {
  return (
    <Container>
      <div className={`flex pt-8 pb-16 lg:pb-20`}>
        <div className="flex-shrink-0 pe-24 hidden lg:block w-96">
          <ReactStickyBox offsetTop={50} offsetBottom={20}>
            <div className="pb-7">
              <BreadcrumbItems separator='/'>
                <ActiveLink 
                  href={"/"}
                  acriveClassName="font-semibold text-heading"
                >
                  <a>home</a>
                </ActiveLink>
                <ActiveLink
										href={ROUTES.SEARCH}
										activeClassName="font-semibold text-heading"
									>
										<a className="capitalize">search</a>
									</ActiveLink>
              </BreadcrumbItems>
            </div>
            <ShopFilters />
          </ReactStickyBox>
        </div>
        <div className="w-full lg:-ms-9">
          search top bar
          <ProductGrid />
        </div>
      </div>
    </Container>
  )
}

export default Shop