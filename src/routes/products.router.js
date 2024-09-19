//import productsControllers from "../controllers/productsController";
//NUEVOS COMENTARIOS aqui tarere el controllers para ocpar la funcion de getProducts
import { ProductsController } from "../controllers/productsController.js";
const productsControllers = new ProductsController();
//auqi ira una clase que maneje funciones las cuales tendran sus fetch de get  put delete y update de products del json que voyn a recibri en controllers tengo las funciones para poder tratar la informacionn que me llega desde json y de ahi en controllers tambien me apoyare con repositories en caso de que se pita la misma funcion hacer las funciones necesarias en ese archivo para apoyarme con esa en controllers y la de routes que va a manejar los pedidos de fetch que se  vayan a
//esto es un fetch que tare todos los productos del json ahora estos datos los mando para conrollers y que se manejen

//aqui lo que voy a hacer es esta funcion tomar su valor y utilizarla con getData de productsControllers

//aqui voy a entregar osea retronar la info de getProducts a json y creare otra ufncionque sea getProducts rENDER el cual tendra coneccion con app.js yq eu etendra la funcion conjunta de controllers y en la otra unicamente entrgara el json y   con este se utilziara para el buscador y proximamente que este relacionado con el carrito y sepa que data comparar y traer

/* export const getProducts = async () => {
  return fetch("../src/server/products.json")
    .then((data) => data.json())
    .catch((err) => console.log("error", err));
};
 */

export const getProducts = async () => {
  try {
    const data = await fetch("../src/server/products.json");
    const products = await data.json();
    //console.log(await products);
    return products;
  } catch (error) {
    console.log("hubo un error en getPrducts", error);
  }
};

export const getProductsRender = async () => {
  try {
    const data = await fetch("../src/server/products.json");
    const products = data.json();
    //console.log(await products);
    productsControllers.getData(products);
    return;
  } catch (error) {
    console.log("hubo un error en getPrducts", error);
  }
};
