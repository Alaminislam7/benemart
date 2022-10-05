import * as React from 'react';
import Layout from '@/components/layout/layout';
import HeroBlock from '@/containers/hero-block';
import Container from '@/components/ui/container';
import BannerCarousel from '@/containers/banner-carousel';
import BannerWithProducts from '@/containers/product-on-salling';
import BestSellerProduct from '@/components/product/feeds/best-seller-product';
import BannerCard from '@/components/common/banner-card';
import { homeCollectionBanner as banner } from "@/framework/basic-rest/static/banner";
import { ROUTES } from '@/utils/routes';
import ExclusiveBlock from '@/containers/exclusive-block';
import NewArrivalsProduct from '@/components/product/feeds/new-arrivals-product';

export default function Home() {
  return (
    <>
      <HeroBlock />
      <Container>
        <BannerWithProducts
          sectionHeading="On Selling Products"
          categorySlug="/search"
        />
        <BannerCarousel/>
        <BannerCard
					banner={banner[2]}
					href={`${ROUTES.COLLECTIONS}/${banner[2].slug}`}
					className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
				/>
        <NewArrivalsProduct/>
        <ExclusiveBlock className="mb-12 md:mb-14 xl:mb-16 px-2.5 mx-auto max-w-[1920px]"/>
        <BestSellerProduct/>
      </Container>
    </>
  );
}

Home.Layout = Layout;


