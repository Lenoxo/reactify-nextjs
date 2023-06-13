export const totalPrice = (arrayWithProducts) => {
  const finalPrice = arrayWithProducts.reduce((prices, product) => {
    return prices + product.price;
  }, 0);
  return finalPrice;
};

// Esta es otra forma de hacer lo mismo usando map.
// export const totalPrice = (arrayWithProducts) => {
//     let prices = 0
//     arrayWithProducts.map(product => prices += product.price)
//     console.log(prices)
// }
