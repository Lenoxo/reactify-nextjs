import { Layout } from '../../Components/Layout'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../Context'
import { useContext } from 'react'

function MyAccount() {
  const context = useContext(ShoppingCartContext)

  // Obtener los datos del usuario almacenados en el LocalStorage
  const { name, email, password } = JSON.parse(localStorage.getItem('user-data'))

  // Manejar el cierre de sesión
  const handleLogout = () => {
    context.setLogged(false)
    localStorage.setItem('logged', 'false')
  }

  return (
    <Layout>
      {/* Encabezado de la página */}
      <h1 className='font-medium text-xl'>My Account</h1>

      {/* Información del usuario */}
      <div className='w-4/5 lg:w-2/4 flex flex-col text-sm font-normal mt-4 items-start border border-inherit rounded-lg px-8 py-4'>
        <p>Name</p>
        {/* Mostrar el nombre del usuario */}
        <p className='w-full font-light mb-4 rounded-lg bg-zinc-200 p-2 dark:bg-zinc-800 overflow-auto'>{name}</p>

        <p>Email</p>
        {/* Mostrar el email del usuario */}
        <p className='w-full font-light mb-4 rounded-lg bg-zinc-200 p-2 dark:bg-zinc-800 overflow-auto'>{email}</p>

        <p>Password</p>
        {/* Mostrar la contraseña del usuario */}
        <p className='w-full font-light mb-4 rounded-lg bg-zinc-200 p-2 dark:bg-zinc-800 overflow-auto'>{password}</p>

        {/* Enlace de cierre de sesión */}
        <NavLink to='/login' onClick={handleLogout} className='w-full'>
          <button className='font-semibold bg-black text-white p-3 rounded-lg w-full'>Logout</button>
        </NavLink>
      </div>
    </Layout>
  )
}

export { MyAccount }