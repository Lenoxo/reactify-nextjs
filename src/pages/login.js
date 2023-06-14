import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout } from '@components/Layout';
import { ShoppingCartContext } from '../Context';

// Página que permite iniciar sesión, o permite el acceso a crear una nueva cuenta.
function Login() {
  const context = useContext(ShoppingCartContext);
  // Importo useRouter y lo guardo dentro de router, para una redirección dentro de useEffect.
  const router = useRouter();

  // Estado que cambia si el login es false.
  const [loginFailed, setLoginFailed] = useState(false);

  const [loginData, setLoginData] = useState(false);
  // Este useEffect almacena toda la lógica relacionada al uso de localStorage y validación de Login.
  useEffect(() => {
    // Guardo los datos del usuario en localStorage, dentro de userSavedData.
    const userSavedData = JSON.parse(localStorage.getItem('user-data'));

    if (loginData) {
      // Se guarda la información puesta por el usuario en el form dentro de userData.
      const userData = {
        email: loginData.target.elements.email.value,
        password: loginData.target.elements.password.value,
      };

      // // Devuelve true/false dependiendo de si los datos de userData coinciden con los de userSavedData.
      const isLoggedIn = userSavedData && userSavedData.email === userData.email && userSavedData.password === userData.password;
      context.setLogged(isLoggedIn);

      if (isLoggedIn) {
        // Solo cuando isLoggedIn sea true, se ejecuta este bloque de codigo.
        localStorage.setItem('logged', JSON.stringify(isLoggedIn));
        // Se cambia el estado de loginFailed.
        // Redirige a la página principal.
        router.push('/');
      }
      setLoginFailed(!isLoggedIn);
    }
  }, [loginData, context, router]);

  const handleLogin = (event) => {
    event.preventDefault();
    setLoginData(event);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <h1 className="font-medium text-xl">Welcome Back</h1>
        {/* renderiza un mensaje para el usuario si el login falla. */}
        {loginFailed && <p className="font-light bg-red-200 text-md rounded-lg my-4 p-2 dark:bg-red-900">Email or Password doesn&apos;t match, check them and try again</p>}
        <form onSubmit={handleLogin} className="flex flex-col text-sm items-start border rounded-lg mt-4 border-inherit space-y-4 p-4 dark:bg-zinc-800 dark:text-white dark:border-inherit">
          <label className="font-medium" htmlFor='email'>Your Email</label>
          <input className="text-start bg-zinc-300 dark:bg-zinc-900 border border-inherit dark:border-zinc-800 rounded-lg p-2" type="text" placeholder="example@gmail.com" id='email'/>
          <label className="font-medium" htmlFor='password'>Your Password</label>
          <input className="text-start bg-zinc-300 dark:bg-zinc-900 border border-inherit dark:border-zinc-800 rounded-lg p-2" type="password" placeholder="Buy Something" id='password'/>
          <button className="p-4 font-semibold bg-black text-white w-full rounded-lg" type="submit">
            Login
          </button>
          <p className="font-light">Not having an account?</p>
          <Link
            href="/sign-up"
            className="p-4 font-semibold bg-inherit text-inherit w-full rounded-lg border border-black dark:border-inherit disabled:text-zinc-300 disabled:border-zinc-300 text-center"
          >
            Sign Up
          </Link>
        </form>
      </Layout>
    </>
  );
}

export default Login;
