export const productsInCartRender = async (products) => {
  try {
    //aca tocara hacer el renderizaje de los productos y este se rendizara desde el div de productsCartConteiner
    const productsCartContainer = document.getElementById(
      "products-cart-container"
    );
    console.log("esto es products in cart ", productsCartContainer);
    productsCartContainer.innerHTML = "";
    console.log(
      "esto es  lo que ando recibiendo por parametrooooooooooooooooooooooooooos",
      products
    );
    productsCartContainer.innerHTML = `<h1>PRODUCT IN CART</h1>`;
    await products.forEach((element) => {
      const productContainer = document.createElement("div");
      productContainer.className = "prod-card";

      productContainer.innerHTML = `
        <img src="${element.img}">
        <p>Name: ${element.name}</p>
        <p>${element.description}</p>
        <h4>Amount: ${element.count}</h4>
        <h4>Price: ${element.price}</h4>
        <h4>Size ${element.size}</h4>
        `;
      productsCartContainer.appendChild(productContainer);
    });
  } catch (error) {
    console.log("error en productsrender utils ", error);
  }
};
