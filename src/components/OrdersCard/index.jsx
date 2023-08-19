function OrdersCard(props) {
  const { totalPrice, totalProducts, date } = props;

  return (
    <div className="flex items-center px-3 py-3 my-3 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="flex flex-col justify-center">
          <span className="dark:text-white text-gray-800 font-medium">{date}</span>
          <span className="dark:text-white text-gray-800">{totalProducts} Products.</span>
        </div>
        <span className="dark:text-white text-gray-800 font-medium text-lg">Total: ${totalPrice}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </div>
    </div>
  );
}

export { OrdersCard };
