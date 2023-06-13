import '../styles/globals.css';
import { ShoppingCartContext, ShoppingCartProvider } from 'Context';

export default function App({ Component, pageProps }) {
  return (
    <ShoppingCartProvider>
      <Component {...pageProps} />
    </ShoppingCartProvider>
  );
}
