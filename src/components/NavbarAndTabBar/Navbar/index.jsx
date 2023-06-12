import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../../pages/Context"
import { NavbarItem } from "../NavbarItem"
import { ToggleDarkModeButton } from "../ToggleDarkModeButton"

function Navbar() {
  const context = useContext(ShoppingCartContext)
  let activeStyle = "underline underline-offset-4"
  let email = ''

  const handleLogout = () => {
    // Maneja el cierre de sesión
    context.setLogged(false)
    localStorage.setItem('logged', 'false')
  }
  
  if (context.logged) {
    // Si el usuario ha iniciado sesión, toma del localStorage su dirección de correo electrónico.
    email = JSON.parse(localStorage.getItem('user-data')).email
  }
  return (
    <nav className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center fixed z-10 lg:w-screen py-4 px-8 text-sm font-light rounded-lg top-0 border-b-2 bg-white dark:text-white dark:bg-zinc-900">
      {/* Este es el logo de la página (por ahora), por lo que está con unos estilos diferentes */}
      <h2 className="font-bold text-md cursor-default">Reactify</h2>
      <ul className={`lg:flex lg:items-center lg:flex-row gap-3 `}>
        {/* En el resto de items, mando por props to y activeStyle */}
        <NavbarItem to="/" activeStyle={activeStyle} category={null}>All</NavbarItem>
        <NavbarItem to="/clothes" activeStyle={activeStyle} category={'Clothes'}>Clothes</NavbarItem>
        <NavbarItem to="/electronics" activeStyle={activeStyle} category={'Electronics'}>Electronics</NavbarItem>
        <NavbarItem to="/furnitures" activeStyle={activeStyle} category={'Furnitures'}>Furnitures</NavbarItem>
        <NavbarItem to="/toys" activeStyle={activeStyle} category={'Toys'}>Toys</NavbarItem>
        <NavbarItem to="/others" activeStyle={activeStyle} category={'Others'}>Others</NavbarItem>
      </ul>
      <ul className={`lg:flex lg:items-center lg:flex-row gap-3 `}>
        <ToggleDarkModeButton />
        {context.logged && (
          <>
            <li className="text-black/60 dark:text-white/60">{email}</li>
            <NavbarItem to="/my-orders" activeStyle={activeStyle} category={null}>My Orders</NavbarItem>
            <NavbarItem to="/my-account" activeStyle={activeStyle} category={null}>My Account</NavbarItem>
            <NavbarItem to="/login" activeStyle={activeStyle} category={null} handleLogout={handleLogout}>Sign Out</NavbarItem>
            <li className="flex items-center">
              <button onClick={() => context.openCheckoutSideMenu()}>
                {/* Este es el icono del carrito de compras (ShoppingCart) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </button>
              <div>
                {context.cartProducts.length}
              </div>
            </li>
          </>
        )}
        {!context.logged && (
          <li>
            {/* Enlace para iniciar sesión */}
            <NavLink
              to='/login'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Sign In
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export { Navbar }
