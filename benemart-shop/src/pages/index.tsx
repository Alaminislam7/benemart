import * as React from 'react';
import Layout from '@/components/layout/layout';
import HeroBlock from '@/containers/hero-block';

export default function Home() {
  return (
    <>
      <HeroBlock />
      <h2 className="text-center text-2xl">This Is Body Part</h2>
    </>
  );
}

Home.Layout = Layout;
