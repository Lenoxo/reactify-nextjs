const totalPrice = (arrayWithProducts) => {
  const finalPrice = arrayWithProducts.reduce((prices, product) => {
    return prices + product.price;
  }, 0);
  return finalPrice;
};

function filterBy(searchType, products, productSearchValue, productCategoryValue) {
  if (searchType === "by_title") {
    return filteredProductsByTitle(products, productSearchValue);
  }
  if (searchType === "by_category") {
    return filteredProductsByCategory(products, productCategoryValue);
  }
  if (searchType === "title_and_category") {
    return filteredProductsByCategory(products, productCategoryValue).filter((product) =>
      product.title.toLowerCase().includes(productSearchValue.toLowerCase())
    );
  }
  if (!searchType) {
    return products;
  }
}

// Filtra los productos, recibiendo un array y un texto como valor de búsqueda.
function filteredProductsByTitle(arrayWithProducts, searchValue) {
  // Aquí uso toLowerCase para que no importe si el titulo del producto, o lo que los usuarios escriben esté en mayúsculas o minúsculas.
  return arrayWithProducts?.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );
}
function filteredProductsByCategory(arrayWithProducts, categoryValue) {
  // Aquí uso toLowerCase para que no importe si el titulo del producto, o lo que los usuarios escriben esté en mayúsculas o minúsculas.
  return arrayWithProducts?.filter((product) =>
    product.category.toLowerCase().startsWith(categoryValue.toLowerCase())
  );
}

export { totalPrice, filterBy };

// Esta es otra forma de hacer lo mismo usando map.
// export const totalPrice = (arrayWithProducts) => {
//     let prices = 0
//     arrayWithProducts.map(product => prices += product.price)
//     console.log(prices)
// }
