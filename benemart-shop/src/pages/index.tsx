import * as React from 'react';
import Layout from '@/components/layout/layout';
import HeroBlock from '@/containers/hero-block';
import Container from '@/components/ui/container';
import BannerCarousel from '@/containers/banner-carousel';
import BannerWithProducts from '@/containers/best-seller-product';


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
        <h1>hello from developer</h1>
      </Container>
    </>
  );
}

Home.Layout = Layout;


