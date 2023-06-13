import Head from 'next/head';
import Script from 'next/script';
import { Navbar } from '@components/NavbarAndTabBar/Navbar';
import { TabBar } from '@components/NavbarAndTabBar/TabBar';
import { ShoppingCartProvider } from 'Context';
import { CheckoutSideMenu } from '@components/CheckoutSideMenu';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Reactify</title>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q209P0ECCH" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-Q209P0ECCH');`}
        </Script>
      </Head>
      <ShoppingCartProvider>
        <Navbar />
        <TabBar />
        <Component {...pageProps} />
        <CheckoutSideMenu />
      </ShoppingCartProvider>
    </>
  );
}
