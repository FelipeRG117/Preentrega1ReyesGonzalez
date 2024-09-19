//primero vamos a traer la data del json
const fetchProducts = async () => {
  const data = await fetch("src/server/products.json");
  console.log(data);
  const products = await data.json();
  console.log(products);
  return products;
};

export { fetchProducts };
