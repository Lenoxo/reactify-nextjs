import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider, ShoppingCartContext } from '../Context';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignUp } from '../SignUp';
import { Navbar } from '../../Components/NavbarAndTabBar/Navbar';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';
import { Login } from '../Login';
import { useContext } from 'react';
import { TabBar } from '../../Components/NavbarAndTabBar/TabBar';

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext);
  let routes = useRoutes([
    // Solo si el usuario ha iniciado sesión (context.logged), se permite acceder a la página principal.
    { path: '/', element: context.logged ? <Home /> : <Login /> },
    { path: '/clothes', element: context.logged ? <Home /> : <Login /> },
    { path: '/electronics', element: context.logged ? <Home /> : <Login /> },
    { path: '/furnitures', element: context.logged ? <Home /> : <Login /> },
    { path: '/toys', element: context.logged ? <Home /> : <Login /> },
    { path: '/others', element: context.logged ? <Home /> : <Login /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/login', element: <Login /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <TabBar />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
