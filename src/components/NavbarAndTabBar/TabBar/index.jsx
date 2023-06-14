import { useContext, useState } from 'react';
import { NavbarItem } from '../NavbarItem';
import { ShoppingCartContext } from 'Context';
import { ToggleDarkModeButton } from '../ToggleDarkModeButton';
import Link from 'next/link';

function TabBar() {
  const context = useContext(ShoppingCartContext);
  const [hideList, setHideList] = useState(true);

  const handleLogout = () => {
    // Maneja el cierre de sesión
    context.setLogged(false);
    localStorage.setItem('logged', 'false');
  };
  return (
    <ul className="flex flex-row w-full h-[68px] fixed justify-around items-center bottom-0 left-0 bg-white dark:text-white dark:bg-zinc-900 z-10 lg:hidden border-t-2">
      {/* Icono de Search */}
      <Link href="#search-bar">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-auto">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </Link>
      {/* Icono de Categorias */}
      <button onClick={() => setHideList(!hideList)} onKeyDown={() => setHideList(!hideList)} className='active:bg-zinc-300 px-2 rounded-lg'>
        {/* svg del icono de Categorías */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-auto">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
        </svg>
        {/* Lista de categorías */}
        <ul className={`${hideList && 'hidden'} flex items-center flex-col gap-3 absolute bottom-[68px] left-1/9 bg-white dark:text-white dark:bg-zinc-900 rounded-t-lg p-2 border`}>
          {/* En electronics resto de items, mando por props to y activeStyle */}
          <NavbarItem to="/" category={null}>
            All
          </NavbarItem>
          <NavbarItem to="/" category={'Clothes'}>
            Clothes
          </NavbarItem>
          <NavbarItem to="/" category={'Electronics'}>
            Electronics
          </NavbarItem>
          <NavbarItem to="/" category={'Furnitures'}>
            Furnitures
          </NavbarItem>
          <NavbarItem to="/" category={'Toys'}>
            Toys
          </NavbarItem>
          <NavbarItem to="/" category={'Others'}>
            Others
          </NavbarItem>
        </ul>
      </button>
      {context.logged && (
        <>
          {/* icono del perfil */}
          <NavbarItem to="/my-account">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-auto">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </NavbarItem>
          {/* Icono de My Orders */}
          <NavbarItem to="/my-orders">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-auto">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
              />
            </svg>
          </NavbarItem>
          {/* Icono de sign-out */}
          <NavbarItem to="/login" handleLogout={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-auto">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </NavbarItem>
          {/* Carrito de compras */}
          <li className="flex items-center">
            <button onClick={() => context.openCheckoutSideMenu()}>
              {/* Este es el icono del carrito de compras (ShoppingCart) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
            <div>{context.cartProducts.length}</div>
          </li>
        </>
      )}
      {/* Icono de sign-in */}
      {!context.logged && (
        <li>
          {/* Enlace para iniciar sesión */}
          <Link href="/login">
            {/* Icono para iniciar sesión */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </Link>
        </li>
      )}
      <ToggleDarkModeButton />
    </ul>
  );
}

export { TabBar };
