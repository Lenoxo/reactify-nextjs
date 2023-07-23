import { useContext } from 'react';
import { ShoppingCartContext } from 'Context';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../utils';
import Link from 'next/link';

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  // Elimina el producto con el id del array de cartProducts, entregando un nuevo array.
  const handleDelete = (id) => {
    const updatedCartProducts = context.cartProducts.filter((product) => product.id != id);
    context.setCartProducts(updatedCartProducts);
  };
  // Añade al estado order los productos dentro de cartProducts. Después limpia cartProducts.
  function handleCheckout() {
    const today = new Date();
    const todayDate = today.toLocaleDateString();
    const newOrder = {
      date: todayDate,
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.closeCheckoutSideMenu();
    context.setOrder([...context.order, newOrder]);
    context.setCartProducts([]);
  }

  return (
    // Con tailwind, se pueden poner propiedades css especificas usando los corchetes [] con el valor de las propiedades dentro.
    <aside // Dependiendo del valor de isCheckoutSideMenuOpen, se muestra/oculta CheckoutSideMenu.
      className={`${
        context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } flex flex-col fixed z-20 right-0 top-0 w-screen h-full overflow-y-auto lg:top-[60px] lg:w-[360px] bg-white dark:bg-zinc-800 dark:text-white border border-inherit rounded-lg lg:h-[calc(100vh-60px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        {/* Icono de cerrar My Order. */}
        <button onClick={() => context.closeCheckoutSideMenu()} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="overflow-y-scroll flex-1">
        {
          // Aquí renderizo cada elemento dentro del cartProducts usando el componente OrderCard.
          context.cartProducts.map((product) => {
            return <OrderCard key={product.id} productInfo={product} handleDelete={handleDelete} />;
          })
        }
      </div>
      <div className="px-6 pb-6">
        <p className="flex justify-between items-center pb-2">
          <span className="font-light text-lg">Total:</span>
          <span className="font-medium text-xl">${totalPrice(context.cartProducts)}</span>
        </p>
        <Link href={`/my-orders/${context.order.length}`}>
          <button className="bg-black rounded-lg text-white w-full h-9 font-bold" onClick={() => handleCheckout()}>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export { CheckoutSideMenu };
