import { useContext } from "react"
import { ShoppingCartContext } from "../../../Context"

// Aquí uso children para poner el texto en el interior de los elementos.
function NavbarItem({ to, activeStyle, children, category, handleLogout }) {
    const context = useContext(ShoppingCartContext)
    return (
      <li>
        <a
          href={to}
          onClick={(event) => {
            event.stopPropagation()
            context.setProductCategoryValue(category)
            handleLogout && handleLogout()
          }}
        >
          {children}
        </a>
      </li>
    )
  }

export { NavbarItem }