import Head from "next/head";
import { Navbar } from "@components/NavbarAndTabBar/Navbar";
import { TabBar } from "@components/NavbarAndTabBar/TabBar";
import { ShoppingCartProvider } from 'Context';
import { CheckoutSideMenu } from "@components/CheckoutSideMenu";
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        

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
