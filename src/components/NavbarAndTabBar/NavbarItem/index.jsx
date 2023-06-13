import { useContext } from "react"
import { ShoppingCartContext } from "../../../Context"
import Link from "next/link"

// Aquí uso children para poner el texto en el interior de los elementos.
function NavbarItem({ to, activeStyle, children, category, handleLogout }) {
    const context = useContext(ShoppingCartContext)
    return (
      <li>
        <Link
          href={to}
          onClick={(event) => {
            event.stopPropagation()
            context.setProductCategoryValue(category)
            handleLogout && handleLogout()
          }}
        >
          {children}
        </Link>
      </li>
    )
  }

export { NavbarItem }