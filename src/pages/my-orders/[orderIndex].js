import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "@components/Layout";
import { OrderCard } from "@components/OrderCard";
import { useRouter } from "next/router";
import Link from "next/link";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const router = useRouter();
  const { orderIndex } = router.query;
  // Establecer ProductSearchValue como null al cargar el componente
  useEffect(() => {
    context.setProductSearchValue(null);
  }, [context]);
  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        {/* Link de volver a My Orders */}
        <Link href="/my-orders" className="absolute left-0">
          {/* Icono de volver */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="w-80">
        {
          // Aquí renderizo los productos dentro del estado global order usando el componente OrderCard. Por el momento, hasta actualizar las rutas usando next, está desactivado.
          context.order[orderIndex]?.products.map((product) => {
            return <OrderCard key={product.id} productInfo={product} />;
          })
        }
      </div>
    </Layout>
  );
}

export default MyOrder;
