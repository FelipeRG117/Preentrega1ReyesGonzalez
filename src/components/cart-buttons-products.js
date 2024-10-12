//aqui crearremos las funciones de restar sumar y eliminar de carrito aqui exportarmeos las 3  funciones
import { productsInCartRender } from "../utils/cartProducts.js"; //la funcion que renderizara los productos
import { cartGetProducts } from "./cart-get-products.js";

//calse que tiene una funcion para traer todos los producos en local
const removeProduct = (product) => {
  try {
    //paa poder eliminar necesitamos el id del producto ya que es un iddentificador para la key y retornar el removeItem
    localStorage.removeItem(`product${product.id}`);
    console.log("este es el boton para elimianr", product);
    //llamo a la funcion de getAllProducts y reutilizo la funcion principal de render
    //hacemos operacion render
    const productosInLocal = cartGetProducts();
    console.log("DARIUS PERRO ENFERMO", productosInLocal);
    productsInCartRender(productosInLocal);
  } catch (error) {
    console.log(error);
  }
};
//voy a crear una funcion que traiga el estado de count cada dentro de las funciones de sumar restar y eliminar y en caso de que sea liminar pues igual va a ayudar el renderizaje y hacer un render
const addCountProduct = async (product) => {
  try {
    //aqui necesitamos acceder al count aumentarlo en 1 y setear el producto nuevamente y retornar
    console.log("este es el boton para agregar", product);
    //tengo que treaer el objeto de localn para asi pdoer acceder a su count de local y no elq ue llega a la hora  de clickear el producto pq puede enviar muchos, y en m¿vez de manejar algun tipo de componente tipo context mejor lo traigo directo y hago la modificacion
    const Product = JSON.parse(localStorage.getItem(`product${product.id}`));
    console.log("Esto isssssssss product fam", Product);
    ++Product.count;
    const productUpdate = Product;
    console.log("ProductUpdate", productUpdate);
    localStorage.setItem(
      `product${productUpdate.id}`,
      JSON.stringify(productUpdate)
    );
    const productosInLocal = cartGetProducts();
    console.log("DARIUS PERRO ENFERMO", productosInLocal);
    productsInCartRender(productosInLocal);
    return productUpdate;
  } catch (error) {
    console.log(error);
  }
};

const subtractCountProduct = (product) => {
  try {
    //aqui necesitamos acceder a count restar en 1 y setearlo en el local y retronar
    //aqui necesitamos acceder al count aumentarlo en 1 y setear el producto nuevamente y retornar
    console.log("este es el boton para agregar", product);
    //tengo que treaer el objeto de localn para asi pdoer acceder a su count de local y no elq ue llega a la hora  de clickear el producto pq puede enviar muchos, y en m¿vez de manejar algun tipo de componente tipo context mejor lo traigo directo y hago la modificacion
    const Product = JSON.parse(localStorage.getItem(`product${product.id}`));
    console.log("Esto isssssssss product fam", Product);
    --Product.count;
    const productUpdate = Product;
    console.log("ProductUpdate", productUpdate);
    localStorage.setItem(
      `product${productUpdate.id}`,
      JSON.stringify(productUpdate)
    );
    const productosInLocal = cartGetProducts();
    console.log("DARIUS PERRO ENFERMO", productosInLocal);
    productsInCartRender(productosInLocal);

    return productUpdate;
  } catch (error) {
    console.log(error);
  }
};
export { removeProduct, addCountProduct, subtractCountProduct };
