import { Navbar } from "@components/NavbarAndTabBar/Navbar";
import { ShoppingCartProvider } from 'Context';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Component {...pageProps} />
    </ShoppingCartProvider>
  );
}
