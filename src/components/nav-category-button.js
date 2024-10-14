//aqui crearemos la escucha de que categoria fue seleccionada haciendo forEach con el drop link de ahi y llamaremos al products de utils para renderizar y esta funcion la pondremos en el app.js domcontent
import { getProducts } from "../routes/products.router.js";
import { renderProducts } from "../utils/products.utils.js";

const sizeCategory = document.querySelectorAll(".dropdown-item");
sizeCategory.forEach((category) => {
  category.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("este es el eventoooo", e);
    console.log(e.target.textContent);
    navCategoryRenderButton(e.target.textContent);
  });
}); //esta va a ahacer la que al final termine exportando e importando a app y no la pedida y filter

export const navCategoryRenderButton = async (category) => {
  try {
    //aqui de primeras
    const productsAll = await getProducts();
    console.log("esto es productos mijo", productsAll);
    console.log("primera revision de la categoria ", category);
    console.log("this is size ", sizeCategory);
    const productsCategory = productsAll.filter(
      (product) => product.size == category
    );
    console.log("este es productsCategory", productsCategory);
    renderProducts(productsCategory);
    return;
  } catch (error) {
    console.log(error);
  }
};
