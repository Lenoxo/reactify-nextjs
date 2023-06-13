import { useContext, useEffect } from 'react';
import { ShoppingCartContext } from '../Context';
import { Layout } from '../../Components/Layout';
import { OrderCard } from '../../Components/OrderCard';
import { Link } from 'react-router-dom';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  // Guardo en currentPath la URL actual.
  const currentPath = window.location.pathname;
  // Guardo solo la parte después del ultimo / de la URL en orderIndex.
  let orderIndex = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  // Si está en la última orden, se establece el valor de orderIndex como el ultimo indice del estado global Order.
  if (orderIndex === 'last') {
    orderIndex = context.order?.length - 1;
  }
  // Establecer ProductSearchValue como null al cargar el componente
  useEffect(() => {
    context.setProductSearchValue(null);
  }, []);
  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        {/* Link de volver a My Orders */}
        <Link to="/my-orders" className="absolute left-0">
          {/* Icono de volver */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="w-80">
        {
          // Aquí renderizo los productos dentro del estado global order usando el componente OrderCard.
          context.order[orderIndex]?.products.map((product) => {
            return <OrderCard key={product.id} productInfo={product} />;
          })
        }
      </div>
    </Layout>
  );
}

export { MyOrder };