import { CategoryIcon } from "@components/Icons/CategoryIcon";
import { MyOrdersIcon } from "@components/Icons/MyOrdersIcon";
import { ProfileIcon } from "@components/Icons/ProfileIcon";
import { SearchBarIcon } from "@components/Icons/SearchBarIcon";
import { ShoppingCartIcon } from "@components/Icons/ShoppingCartIcon";
import { SignInIcon } from "@components/Icons/SignInIcon";
import { SignOutIcon } from "@components/Icons/SignOutIcon";
import { ShoppingCartContext } from "Context";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { NavbarItem } from "../NavbarItem";
import { ToggleDarkModeButton } from "../ToggleDarkModeButton";

function TabBar() {
  const router = useRouter();
  const context = useContext(ShoppingCartContext);
  const [hideList, setHideList] = useState(true);
  const listRef = useRef(null);
  const toggleListButtonRef = useRef(null);
  // Este efecto detecta clicks por fuera del ul con la ref=listRef
  useEffect(() => {
    function handleClickOutside(event) {
      // Aqui también uso toggleListButtonRef para evitar un conflicto al hacer click en el y que no funcione su respectivo onCLick.
      if (
        listRef.current &&
        !listRef.current.contains(event.target) &&
        !toggleListButtonRef.current.contains(event.target)
      ) {
        // console.log("Clic fuera del menú desplegable");
        setHideList(true);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, [listRef]);

  const handleLogout = () => {
    // Maneja el cierre de sesión
    context.setLogged(false);
    localStorage.setItem("logged", "false");
    router.push("/login");
  };
  return (
    <ul className="flex flex-row w-full h-[68px] fixed justify-around items-center bottom-0 left-0 bg-white dark:text-white dark:bg-zinc-900 z-10 lg:hidden border-t-2">
      {/* Icono de Search */}
      <Link href="/#search-bar">
        <SearchBarIcon />
      </Link>
      {/* Icono de Categorias */}
      <button
        onClick={() => setHideList(!hideList)}
        onKeyDown={() => setHideList(!hideList)}
        ref={toggleListButtonRef}
        className="active:bg-zinc-300 px-2 rounded-lg"
      >
        <CategoryIcon />
        {/* Lista de categorías */}
        <ul
          ref={listRef}
          className={`${
            hideList && "hidden"
          } flex items-center flex-col gap-3 absolute bottom-[68px] left-1/9 bg-white dark:text-white dark:bg-zinc-900 rounded-t-lg p-2 border`}
        >
          {/* En electronics resto de items, mando por props to y activeStyle */}
          <NavbarItem to="/" category={null}>
            All
          </NavbarItem>
          <NavbarItem to="/" category={"Electronics"}>
            Electronics
          </NavbarItem>
          <NavbarItem to="/" category={"Jewelery"}>
            Jewelery
          </NavbarItem>
          <NavbarItem to="/" category={"Men's clothing"}>
            Men&apos;s clothing
          </NavbarItem>
          <NavbarItem to="/" category={"Women's clothing"}>
            Women&apos;s clothing
          </NavbarItem>
        </ul>
      </button>
      {context.logged && (
        <>
          {/* icono del perfil */}
          <NavbarItem to="/my-account">
            <ProfileIcon />
          </NavbarItem>
          {/* Icono de My Orders */}
          <NavbarItem to="/my-orders">
            <MyOrdersIcon />
          </NavbarItem>
          {/* Icono de sign-out */}
          <NavbarItem to="/login" handleLogout={handleLogout}>
            <SignOutIcon />
          </NavbarItem>
          {/* Carrito de compras */}
          <li className="flex items-center">
            <button onClick={() => context.openCheckoutSideMenu()}>
              {/* Este es el icono del carrito de compras (ShoppingCart) */}
              <ShoppingCartIcon />
            </button>
            <div>{context.cartProducts.length}</div>
          </li>
        </>
      )}
      {!context.logged && (
        <li>
          {/* Enlace para iniciar sesión */}
          <Link href="/login">
            {/* Icono para iniciar sesión */}
            <SignInIcon />
          </Link>
        </li>
      )}
      <ToggleDarkModeButton />
    </ul>
  );
}

export { TabBar };
