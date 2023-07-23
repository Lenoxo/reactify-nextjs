import { useContext } from 'react';
import { ShoppingCartContext } from '../../../Context';
import Link from 'next/link';

// Aquí uso children para poner el texto en el interior de los elementos.
function NavbarItem({ to, children, category, handleLogout }) {
  const context = useContext(ShoppingCartContext);
  return (
    <Link
      href={to}
      className="active:bg-zinc-300 rounded-lg px-2"
      onClick={(event) => {
        event.stopPropagation();
        context.setProductCategoryValue(category);
        handleLogout && handleLogout();
      }}
    >
      <li>{children}</li>
    </Link>
  );
}

export { NavbarItem };
