import Image from 'next/image';

function OrderCard(props) {
  const { title, image, price, id } = props.productInfo;
  return (
    <div className="flex h-20 justify-between gap-2 items-center mx-3 mb-3 dark:text-white">
      <div className="flex items-center justify-start gap-2 w-3/5 h-full">
        <figure className="w-20 h-20 relative flex-shrink-0 ml-3">
          <Image fill={true} src={image} alt={title} className="object-contain bg-white rounded-lg" />
        </figure>
        <p className="text-sm font-light overflow-ellipsis whitespace-nowrap overflow-hidden">{title}</p>
      </div>
      <div className="flex justify-end items-center gap-2 h-full">
        <p className="text-md sm:text-lg font-medium">${price}</p>
        {/* Solo si se recibe por props handleDelete, se renderiza el icono de eliminar del Cart. */}
        {props.handleDelete && (
          <button onClick={() => props.handleDelete(id)} className="cursor-pointer">
            {/* Este es el icono de eliminar del Cart */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export { OrderCard };
