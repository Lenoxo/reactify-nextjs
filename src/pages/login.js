import { useContext, useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { Layout } from "@components/Layout"
import { ShoppingCartContext } from "../Context"

// Página que permite iniciar sesión, o permite el acceso a crear una nueva cuenta.
function Login() {
  const context = useContext(ShoppingCartContext)
  // Estado que cambia si el login es false.
  const [loginFailed, setLoginFailed] = useState(false)
  // Guardo los datos del usuario en localStorage, dentro de userSavedData.
  // const userSavedData = JSON.parse(localStorage.getItem("user-data"))
  // const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    // // Se guarda la información puesta por el usuario en el form dentro de loginData.
    // const loginData = {
    //   email: event.target[0].value,
    //   password: event.target[1].value,
    // }

    // // Devuelve true/false dependiendo de si los datos de loginData coinciden con los de userSavedData.
    // const isLoggedIn =
    //   userSavedData &&
    //   userSavedData.email === loginData.email &&
    //   userSavedData.password === loginData.password

    context.setLogged(true)
    
    // if (isLoggedIn) { // Solo cuando isLoggedIn sea true, se ejecuta este bloque de codigo.
    //   localStorage.setItem("logged", JSON.stringify(isLoggedIn))
    //   navigate("/") // Redirige a la página principal.
    // }
    // Se cambia el estado de loginFailed.
    // setLoginFailed(!true)
  }
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <h1 className="font-medium text-xl">Welcome Back</h1>
        {/* renderiza un mensaje para el usuario si el login falla. */}
        {/* {loginFailed && (
          <p className="font-light bg-red-200 text-md rounded-lg my-4 p-2 dark:bg-red-900">
            Email or Password doesn't match, check them and try again
          </p>
        )} */}
        <form
          onSubmit={handleLogin}
          className="flex flex-col text-sm items-start border rounded-lg mt-4 border-inherit space-y-4 p-4 dark:bg-zinc-800 dark:text-white dark:border-inherit"
        >
          <label className="font-medium">Your Email</label>
          <input
            className="text-start bg-zinc-300 dark:bg-zinc-900 border border-inherit dark:border-zinc-800 rounded-lg p-2"
            type="text"
            placeholder="example@gmail.com"
          />
          <label className="font-medium">Your Password</label>
          <input
            className="text-start bg-zinc-300 dark:bg-zinc-900 border border-inherit dark:border-zinc-800 rounded-lg p-2"
            type="password"
            placeholder="Buy Something"
          />
          <button
            className="p-4 font-semibold bg-black text-white w-full rounded-lg"
            type="submit"
          >
            <Link href='/'>
              Login
            </Link>
          </button>
          <label className="font-light">Not having an account?</label>
          <Link
            href="/sign-up"
            className="p-4 font-semibold bg-inherit text-inherit w-full rounded-lg border border-black dark:border-inherit disabled:text-zinc-300 disabled:border-zinc-300 text-center"
          >
            Sign Up
          </Link>
        </form>
      </Layout>
    </>
  )
}

export default Login