////////////
//aqui taere la funcion de createProductRenderCart
import { CartController } from "../controllers/cartController.js";
const cartController = new CartController();

//////////////////////

export const renderProducts = (products) => {
  console.log("productoooos felipe", products);
  try {
    const container = document.getElementById("products-container");
    container.innerHTML = ""; //con eso borrarmos toda info que pudiese haber dentro del div

    products.forEach((prod) => {
      const prodCard = document.createElement("div");
      prodCard.className = "prod-card";

      prodCard.innerHTML = `<h3>${prod.name}</h3>
      <img src="${prod.img}">
      <p>${prod.description} </p>
      <h4>Size: ${prod.size} </h4>
      <h4>$ ${prod.price}</h4>
      `; //aqui ponemos la estrucutra html que vayamos a querer en cada objeto
      const button = document.createElement("button");
      button.innerText = "Comprar";
      button.addEventListener("click", () =>
        cartController.createProductInCart(prod)
      );

      prodCard.appendChild(button);

      container.appendChild(prodCard); //aqui meti la card que acbo de crear  en cada iteracion del array lo  acabo de meter dentro del containner que traje antes  dell cilco ferEach
    });
  } catch (error) {
    console.log("HUbo un error ", error);
  }
};
