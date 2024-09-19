//import { getProducts } from "../routes/products.router.js";
import { renderProducts } from "../utils/products.utils.js";
//const products = await getProducts();
/* console.log("ramireeeez ", products);

renderProducts(products); */

export class ProductsController {
  async getData(prod) {
    try {
      // console.log("2222222222", products); //aqui ya estoy recibiendo los productos del json aqui voy a juntar la funcion de utils el cual renderiza e itera a cada valor del array con foreach y le contryue su dom
      //console.log(prod);
      const products = await prod;
      console.log(products);
      //aqui conexion de utils con data
      renderProducts(products);
    } catch (error) {
      console.log("Hubo un error en getData ", error);
    }
  }

  //buscar por id
  async getById(pid) {
    try {
      const product = products.find((prod) => prod.id === pid);
      console.log(product);

      return product;
    } catch (error) {
      console.log("hubo un error al traer por ID ", error);
    }
  }

  //actualizar por id
  async updateById(pid) {
    try {
      const product = products.find((prod) => prod.id === pid);
      console.log(product);
    } catch (error) {
      console.log("hubo un error al traer por ID ", error);
    }
  }

  //eliminar por id
  async deleteById(pid) {
    try {
      const product = products.find((prod) => prod.id === pid);
      console.log(product);
    } catch (error) {
      console.log("hubo un error al traer por ID ", error);
    }
  }
}
