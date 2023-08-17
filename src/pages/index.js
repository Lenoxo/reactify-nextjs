import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "Context";
import { Layout } from "@components/Layout";
import { LoadingCard } from "@components/LoadingCard";
import { Card } from "@components/Card";
import { ProductDetail } from "@components/ProductDetail";
import { useRouter } from "next/router";
import { BiLogoReact } from "react-icons/bi";

export default function Home() {
  const context = useContext(ShoppingCartContext);
  const router = useRouter();
  useEffect(() => {
    if (!context.logged) {
      router.push("/login");
    }
  }, [context.logged, router]);
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
      );
    } else if (context.filteredProducts?.length < 1) {
      return <p className="col-span-4">We don&apos;t have any products here 😞</p>;
    } else {
      return context.filteredProducts?.map((product) => {
        // Envio por props los datos necesarios para renderizar las Cards.
        return <Card key={product.id} id={product.id} category={product.category} image={product.image} title={product.title} price={product.price} description={product.description} />;
      });
    }
  }
  return (
    <Layout>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center">
        <BiLogoReact className="w-10 h-auto sm:mr-2 lg:hidden react-icons-spin" />
        <h1 className="font-semibold text-xl mb-4 sm:mr-4 lg:hidden">Reactify</h1>
        <h2 className="font-extralight text-xl">Time to get you something great!</h2>
      </div>
      <input
        id="search-bar"
        type="text"
        className="p-3 my-6 border border-slate-950 dark:bg-zinc-800 dark:border-white rounded-lg focus:outline-none"
        placeholder="Search a product"
        onChange={(event) => context.setProductSearchValue(event.target.value)}
      />
      {/* Esta es la sección de los productos*/}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full max-w-screen-lg place-items-center h-full">{renderCards()}</section>
      <ProductDetail />
    </Layout>
  );
}
