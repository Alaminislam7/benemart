import { AppProps } from 'next/app';
import { useRef } from "react";
import { ManagedUIContext } from "@/contexts/ui.context";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

// Load Open Sans and satisfy typeface font
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/satisfy";
import "@/styles/scrollbar.css";
import "@/styles/swiper-carousel.css";
import "@/styles/custom-plugins.css";
import '@/styles/tailwind.css';
import ManagedModal from '@/components/common/modal/managed-modal';
import ManagedDrawer from '@/components/common/drawer/managed-drawer';

const Noop: React.FC = ({ children }) => <>{children}</>;

const CustomApp = ({ Component, pageProps }: AppProps) => {

  const queryClientRef = useRef<any>();
	if (!queryClientRef.current) {
		queryClientRef.current = new QueryClient();
	}

  const Layout = (Component as any).Layout || Noop;

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ManagedUIContext>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
          <ManagedModal/>
          <ManagedDrawer/>
        </ManagedUIContext>
      </Hydrate>
    </QueryClientProvider>
    
  );
}

export default CustomApp;
