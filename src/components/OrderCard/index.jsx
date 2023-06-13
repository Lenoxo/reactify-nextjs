import Image from "next/image"

function OrderCard(props) {
    const { title, image, price, id } = props.productInfo
    return (
        <div className="flex justify-between items-center mx-3 mb-3 dark:text-white">
            <div className="flex justify-between items-center gap-2">
                <figure className="w-20 h-20">
                    <Image src={image} alt="" className="w-full h-full object-cover rounded-lg"/>
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex justify-between items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
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
    )
}

export { OrderCard }