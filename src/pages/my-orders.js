import { ShoppingCartContext } from '../Context';
import { useContext } from 'react';
import { Layout } from '@components/Layout';
import { OrdersCard } from '../components/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  console.log(context.order);
  return (
    <Layout>
      My Orders
      {context.order.map((order, index) => {
        return (
          // Por ahora, esta última parte de my-orders, con el render dinámico, no está funcionando.
          <a key={index} href={`/my-orders/`}> 
            <OrdersCard totalProducts={order.totalProducts} totalPrice={order.totalPrice} date={order.date} />
          </a>
        );
      })}
    </Layout>
  );
}

export default MyOrders;
