import { useContext } from "react"
import { Layout } from "@components/Layout"
import { Card } from "@components/Card"
import { ProductDetail } from "@components/ProductDetail"
import { ShoppingCartContext } from "../Context"
import { LoadingCard } from "@components/LoadingCard"

function Home() {
  const context = useContext(ShoppingCartContext)
  function renderCards() {
    if (context.isLoading) {
      return (
        <>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </>
      )
    } else 
        return (
      context.filteredProducts?.map(product => {
        // Envio por props los datos necesarios para renderizar las Cards.
        return <Card key={product.id} id={product.id} category={product.category.name} image={product.category.image} title={product.title} price={product.price} description={product.description}/>
      })
    )
  }
  return (
    <Layout>
      <h1 className="font-extralight text-xl">Time to get you something great!</h1>
      <input id="search-bar" type="text" className="p-3 my-6 border border-slate-950 dark:bg-zinc-800 dark:border-white rounded-lg focus:outline-none" placeholder="Search a product" onChange={(event) => context.setProductSearchValue(event.target.value)}/>
      {/* Esta es la sección de los productos*/}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full max-w-screen-lg place-items-center">
        {renderCards()}
      </section>
      <ProductDetail />
    </Layout>
  )
}

export { Home }
