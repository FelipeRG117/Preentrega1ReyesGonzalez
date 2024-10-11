import { CartController } from "../controllers/cartController.js";
const cartController = new CartController();

//de primeras traemos el cart-button
const cartButton = document.getElementById("cart-button");

export const handleCartButton = () => {
  try {
    console.log(cartButton);
    cartButton.addEventListener("click", (e) => {
      cartController.readAllProductsInCart();
    });
  } catch (error) {
    console.log("hubo un error", error);
  }
};
