import { ShoppingCartContext } from '../Context';
import { useContext } from 'react';
import { Layout } from '@components/Layout';
import { OrdersCard } from '../components/OrdersCard';
import { Link } from 'next/link';

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      My Orders
      {context.order.map((order, index) => {
        return (
          <Link key={index} href={`/my-orders/${index}`}>
            <OrdersCard totalProducts={order.totalProducts} totalPrice={order.totalPrice} date={order.date} />
          </Link>
        );
      })}
    </Layout>
  );
}

export default MyOrders;
