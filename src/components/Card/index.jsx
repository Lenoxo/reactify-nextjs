import { useContext, useState, useEffect } from "react"
import { ShoppingCartContext } from "../../pages/Context"

function Card({ category, title, image, price, description, id }) {
  const productData = { category, title, image, price, description, id }
  const context = useContext(ShoppingCartContext)

  // Abre el detalle del producto
  function showProduct(productDetailData) {
    context.openProductDetail()
    context.setProductToShow(productDetailData)
  }

  // Añade el producto al carrito
  function addToCart(event, productCartData) {
    event.stopPropagation() // Evita que se abra el detalle del producto al hacer clic en el botón de añadir al carrito
    context.openCheckoutSideMenu()
    context.setCartProducts([...context.cartProducts, productCartData])
  }

  // Renderiza el ícono del carrito o la marca de verificación según si el producto está en el carrito o no
  function renderIcon(id) {
    const isInCart = context.cartProducts.some((product) => product.id === id)
    if (isInCart) {
      return (
        <button className="absolute top-0 right-0 flex justify-center items-center m-2 w-6 h-6">
          {/* Ícono del check cuando el producto está en el carrito */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="white"
            className="w-6 h-6 bg-black rounded-full"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </button>
      )
    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center m-2 w-6 h-6"
          onClick={(event) => addToCart(event, productData)}
        >
          {/* Ícono de añadir al carrito */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6 bg-white dark:bg-black rounded-full"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      )
    }
  }
  return (
    <div className="bg-inherit cursor-pointer w-56 h-68 rounded-lg mb-6" onClick={() => showProduct(productData)}>
      <figure className="relative mb-2 w-full h-4/5 rounded-lg">
        {/* Etiqueta que muestra la categoría del producto */}
        <span className="absolute bottom-0 left-0 bg-zinc-300 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        {/* Imagen del producto */}
        <img className="w-full h-full object-cover rounded-lg" src={image} alt={title} />
        {/* Renderiza el ícono de carrito o la marca de verificación */}
        {renderIcon(productData.id)}
      </figure>
      <p className="flex justify-between">
        {/* Título del producto */}
        <span className="text-sm font-light">{title}</span>
        {/* Precio del producto */}
        <span className="text-lm font-bold">${price}</span>
      </p>
    </div>
  )
}

export { Card }