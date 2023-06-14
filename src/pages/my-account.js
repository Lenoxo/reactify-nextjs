import { Layout } from '@components/Layout';
import { ShoppingCartContext } from '../Context';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

function MyAccount() {
  const context = useContext(ShoppingCartContext);
  // Estado que almacena los datos del usuario
  const [userData, setUserData] = useState({});
  // Manejar el cierre de sesión
  const handleLogout = () => {
    context.setLogged(false);
    localStorage.setItem('logged', 'false');
  };

  useEffect(() => {
    // Obtener los datos del usuario almacenados en el LocalStorage
    const parsedData = JSON.parse(localStorage.getItem('user-data'));
    setUserData(parsedData);
  }, []);

  return (
    <Layout>
      {/* Encabezado de la página */}
      <h1 className="font-medium text-xl">My Account</h1>

      {/* Información del usuario */}
      <div className="w-4/5 lg:w-2/4 flex flex-col text-sm font-normal mt-4 items-start border border-inherit rounded-lg px-8 py-4">
        <p>Name</p>
        {/* Mostrar el nombre del usuario */}
        <p className="w-full font-light mb-4 rounded-lg bg-zinc-200 p-2 dark:bg-zinc-800 overflow-auto">{userData.name}</p>

        <p>Email</p>
        {/* Mostrar el email del usuario */}
        <p className="w-full font-light mb-4 rounded-lg bg-zinc-200 p-2 dark:bg-zinc-800 overflow-auto">{userData.email}</p>

        <p>Password</p>
        {/* Mostrar la contraseña del usuario */}
        <p className="w-full font-light mb-4 rounded-lg bg-zinc-200 p-2 dark:bg-zinc-800 overflow-auto">{userData.password}</p>

        {/* Enlace de cierre de sesión */}
        <Link href="/login" onClick={handleLogout} className="w-full">
          <button className="font-semibold bg-black text-white p-3 rounded-lg w-full">Logout</button>
        </Link>
      </div>
    </Layout>
  );
}

export default MyAccount;
