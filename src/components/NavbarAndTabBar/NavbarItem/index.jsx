import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../../pages/Context"

// Aquí uso children para poner el texto en el interior de los elementos.
function NavbarItem({ to, activeStyle, children, category, handleLogout }) {
    const context = useContext(ShoppingCartContext)
    return (
      <li>
        <NavLink
          to={to}
          onClick={(event) => {
            event.stopPropagation()
            context.setProductCategoryValue(category)
            handleLogout && handleLogout()
          }}
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          {children}
        </NavLink>
      </li>
    )
  }

export { NavbarItem }