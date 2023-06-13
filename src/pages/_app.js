import { Navbar } from "@components/NavbarAndTabBar/Navbar";
import { TabBar } from "@components/NavbarAndTabBar/TabBar";
import { ShoppingCartProvider } from 'Context';
import '../styles/globals.css';
import { CheckoutSideMenu } from "@components/CheckoutSideMenu";

export default function App({ Component, pageProps }) {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <TabBar />
      <Component {...pageProps} />
      <CheckoutSideMenu />
    </ShoppingCartProvider>
  );
}
