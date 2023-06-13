import Head from "next/head"
import { useContext } from "react"
import { ShoppingCartContext } from "../Context"
import { Layout } from "@components/Layout"

// Página para crear un usuario y guardar sus datos en localStorage.
function SignUp() {
  const context = useContext(ShoppingCartContext)
  const handleSignUp = (event) => {
    event.preventDefault()
    // Toma del evento de Submit los valores de cada input, y los guarda en userData.
    const name = event.target.elements.name.value
    const email = event.target.elements.email.value
    const password = event.target.elements.password.value
    const userData = { name, email, password }

    // Se guarda en localStorage userData.
    // localStorage.setItem("user-data", JSON.stringify(userData))

    // // Se actualiza en Context el estado logged y se guarda en localStorage.
    // context.setLogged(true)
    // localStorage.setItem("logged", "true")
    // navigate("/") // Redirige a la página principal.
  }

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Layout>
        <h1 className="font-medium text-xl">Sign Up</h1>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col text-sm items-start border rounded-lg mt-4 border-inherit space-y-4 p-4 dark:bg-zinc-800 dark:text-white dark:border-inherit"
        >
          <label className="font-medium">Your Name</label>
          <input
            className="text-start bg-zinc-300 dark:bg-zinc-900 border border-inherit dark:border-zinc-800 rounded-lg p-2"
            type="text"
            name="name"
            placeholder="Juan Juanez Perez"
          />
          <label className="font-medium">Your Email</label>
          <input
            className="text-start bg-zinc-300 dark:bg-zinc-900 border border-inherit dark:border-zinc-800 rounded-lg p-2"
            type="text"
            name="email"
            placeholder="example@gmail.com"
          />
          <label className="font-medium">Create Your Password</label>
          <input
            className="text-start bg-zinc-300 dark:bg-zinc-900 border border-inherit dark:border-zinc-800 rounded-lg p-2"
            type="password"
            name="password"
            placeholder="Buy Something"
          />
          <button
            className="p-4 font-semibold bg-black text-white w-full rounded-lg"
            type="submit"
          >
            Create Account
          </button>
        </form>
      </Layout>
    </>
  )
}

export default SignUp