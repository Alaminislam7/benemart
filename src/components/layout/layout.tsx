import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import { NextSeo } from "next-seo";
import MobileNavigation from "@/components/layout/mobile-navigation/mobile-navigation";


const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NextSeo
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
        title="Benemart React - React Next E-commerce Template"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        canonical="https://benemart.vercel.app/"
        openGraph={{
          url: "https://benemart.vercel.app",
          title: "Benemart React - React Next E-commerce Template",
          description:
            "Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
          images: [
            {
              url: "/assets/images/og-image-01.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "/assets/images/og-image-02.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
          ],
        }}
      />

      <Header />
      <main
				className="relative flex-grow"
				style={{
					minHeight: "-webkit-fill-available",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{children}
			</main>
      <Footer/>
      <MobileNavigation />
    </div>
  )
}

export default Layout