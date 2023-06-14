import { useContext } from 'react';
import { ShoppingCartContext } from '../../../Context';
import Link from 'next/link';

// Aquí uso children para poner el texto en el interior de los elementos.
function NavbarItem({ to, children, category, handleLogout }) {
  const context = useContext(ShoppingCartContext);
  return (
    <li className={`active:bg-zinc-300 rounded-lg px-2`}>
      <Link
        href={to}
        onClick={(event) => {
          event.stopPropagation();
          context.setProductCategoryValue(category);
          handleLogout && handleLogout();
        }}
      >
        {children}
      </Link>
    </li>
  );
}

export { NavbarItem };
