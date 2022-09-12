import * as React from 'react';
import Layout from '@/components/layout/layout';
import HeroBlock from '@/containers/hero-block';
import Container from '@/components/ui/container';
import BannerCarousel from '@/containers/banner-carousel';


export default function Home() {
  return (
    <>
      <HeroBlock />
      <Container>
        <BannerCarousel/>
        <h1>hello from developer</h1>
      </Container>
    </>
  );
}

Home.Layout = Layout;


