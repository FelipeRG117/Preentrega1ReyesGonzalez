import {
  addCountProduct,
  removeProduct,
  subtractCountProduct,
} from "../components/cart-buttons-products.js";

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
    productsCartContainer.innerHTML = `<h1>PRODUCTS IN CART</h1>`;

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
      const buttonDelete = document.createElement("button");
      buttonDelete.innerText = "Delete";
      console.log(buttonDelete);

      buttonDelete.addEventListener("click", (e) => {
        removeProduct(element);
      });
      //
      const buttonAdd = document.createElement("button");
      buttonAdd.innerText = "Sumar";
      console.log(buttonAdd);

      buttonAdd.addEventListener("click", (e) => {
        addCountProduct(element);
      });
      //
      const buttonSubtract = document.createElement("button");
      buttonSubtract.innerText = "Restar";
      console.log(buttonSubtract);

      buttonSubtract.addEventListener("click", (e) => {
        subtractCountProduct(element);
      });

      //
      productContainer.appendChild(buttonAdd);
      productContainer.appendChild(buttonSubtract);
      productContainer.appendChild(buttonDelete);
      //
      productsCartContainer.appendChild(productContainer);
    });
    //creare botones que enviara el producto por parametro se recibira en la funcion   de ahi tomara los datos para pdoer setearlos y configurarlos crear un button y hacerle un onClick

    //crear funcionalidades para poder eliminar o sumar o restar el count aqui mismo creare los botones y aduntare las funciones a sus respectivos botones
    //luego quedara el renderizaje de productos por categorias
  } catch (error) {
    console.log("error en productsrender utils ", error);
  }
};
