import { createContext, useState, useEffect } from 'react';
import { filterBy } from '@components/utils';
const API = 'https://api.escuelajs.co/api/v1/products';

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  // Estado de inicio de sesión
  const [logged, setLogged] = useState(false);
  // Estado de carga
  const [isLoading, setIsLoading] = useState(true);
  // Relacionado a ProductDetail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); // Almacena un valor para posteriormente mostrar/ocultar ProductDetail.
  const [productToShow, setProductToShow] = useState({}); // Almacena los datos del producto que se muestra en ProductDetail.
  function openProductDetail() {
    setIsProductDetailOpen(true);
  }
  function closeProductDetail() {
    setIsProductDetailOpen(false);
  }
  // ProductCart

  // Almacena en un estado, un array con los productos dentro del carrito de compras (ShoppingCart)
  const [cartProducts, setCartProducts] = useState([]);

  // CheckoutSideMenu

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  function openCheckoutSideMenu() {
    setIsCheckoutSideMenuOpen(true);
  }
  function closeCheckoutSideMenu() {
    setIsCheckoutSideMenuOpen(false);
  }

  // Este estado almacena la orden cuando se hace click en Checkout en CheckoutSideMen
  const [order, setOrder] = useState([]);

  // Product Search/Filter

  const [products, setProducts] = useState(null);
  // Aquí uso useEffect porque estoy consumiendo la API de Platzi Fake Store
  useEffect(() => {
    setLogged(Boolean(JSON.parse(localStorage.getItem('logged')))); // Se actualiza el estado logged con el guardado en localStorage.
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []); // El array de dependencias vacio está aquí para hacer que se ejecute solo una vez este efecto.

  // Almacena el valor del input en Home.
  const [productSearchValue, setProductSearchValue] = useState(null);
  // Almacena el valor de la categoria que viene de Navbar.
  const [productCategoryValue, setProductCategoryValue] = useState(null);
  // Almacena los productos filtrados.
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Este efecto modifica el estado de filteredProducts cuando cambia el valor de productSearchValue
  useEffect(() => {
    if (productSearchValue && productCategoryValue) setFilteredProducts(filterBy('title_and_category', products, productSearchValue, productCategoryValue));
    if (productSearchValue && !productCategoryValue) setFilteredProducts(filterBy('by_title', products, productSearchValue, productCategoryValue));
    if (!productSearchValue && productCategoryValue) setFilteredProducts(filterBy('by_category', products, productSearchValue, productCategoryValue));
    if (!productSearchValue && !productCategoryValue) setFilteredProducts(filterBy(null, products, productSearchValue, productCategoryValue));
  }, [products, productSearchValue, productCategoryValue]);

  return (
    // Exporto así el elemento para que sea un poco más facil de leer desde otros archivos, como en App/index.jsx
    <ShoppingCartContext.Provider
      value={{
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        products,
        setProducts,
        productSearchValue,
        setProductSearchValue,
        filteredProducts,
        productCategoryValue,
        setProductCategoryValue,
        isLoading,
        logged,
        setLogged,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartProvider, ShoppingCartContext };
