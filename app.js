import { searchProducts } from "./src/components/search.js";

import { handleCartButton } from "./src/components/cart-button.js";
import { getProductsRender } from "./src/routes/products.router.js";
import { CartController } from "./src/controllers/cartController.js";
import { navCategoryRenderButton } from "./src/components/nav-category-button.js";
const cartController = new CartController();

/* productController.getData();
productController.getById(2);
//aqui seria traerme todoas las etiqeuutas html y adjuntarlas con las fucn iones que contienen los pedidos y sacar los valores de aqui yutilizar los controladores que se encargaran de manejar todos los eventos consiguientes, tambien podria utilizar
///AQQUI AMENJARE TODOS LOS PEDIDOS CON FETCH
const container = document.getElementById("products-container");
console.log(container); */
// Renderizar productos cuando la página cargue

document.addEventListener("DOMContentLoaded", () => {
  navCategoryRenderButton();
  getProductsRender(); // Mostrar productos
  searchProducts();
  handleCartButton();
  cartController.getProductsRenderInCart();
});
