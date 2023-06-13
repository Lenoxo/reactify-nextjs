import { ShoppingCartContext } from '../Context';
import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { OrdersCard } from '../../Components/OrdersCard';
import { Link } from 'react-router-dom';

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      My Orders
      {context.order.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard totalProducts={order.totalProducts} totalPrice={order.totalPrice} date={order.date} />
          </Link>
        );
      })}
    </Layout>
  );
}

export { MyOrders };