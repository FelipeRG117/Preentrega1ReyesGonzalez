//necesito una fucnion para recibir los objetos ponerlos en local
//necesito hacer un CRUD para eliminar del cart  los ob jetos requeridos
//con utils renderizare los objetos que tengo en cart que esta en localStorage
import { productsInCartRender } from "../utils/cartProducts.js";

export class CartController {
  async getProductsRenderInCart() {
    try {
      //aqui crearemos el enlace a documet.getElementById dl elemento que en si es carrito para pdoer renderizar los productos en base a readAllProductsInCart en utils haremos lan funcionalidad de dom
      const cartButton = document.getElementById("cart-button");
      console.log("cxart  button", cartButton);
      const ProductsInLocal = await this.readAllProductsInCart();
      console.log("estos SON LOS PRODUCTOS a RENERIZAR ", ProductsInLocal);
      return cartButton.addEventListener("click", (e) => {
        productsInCartRender(ProductsInLocal);
      });
    } catch (error) {
      console.log("hubo un error en getProductsRender", error);
    }
  }

  postProductsRender() {
    try {
      //esta funcion estara enlazada y exportada en utils de products en su boton para poder conseguir el producto destrcuturarlo y meterle un nuevo campo de count, y en caso de que ya exista el campo de count sumarlo y hacer un conteo hats ao que paguen y le den a comprar o lo eliminen
    } catch (error) {
      console.log("hubo un error en postProductsRender", error);
    }
  }

  putProductsRender() {
    try {
    } catch (error) {
      console.log("hubo un error en putProductsRender", error);
    }
  }

  deleteProductsRender() {
    try {
    } catch (error) {
      console.log("hubo un error en deleteProductsRender", error);
    }
  }
  /* <------  de aqui empiezan las funciones basicas con las que se enlazaran al CRUD del render  que serian leer porductos con la key, crear productos con su key y trayendo el  objeto de;l front y transfondandolos a texto , eliminar productos, osea leer en base a la key y hacer un delete con removeItem en base a la key, tambien usar un ciclo pasra leer todos los productos acumulados en el carrito*/
  createProductInCart(product) {
    try {
      //creare un product con su key y el objeto con su campo de count agregado
      //recibo product por params
      //ya estoy recibiendo el producto en la key voy a poner product y el id con un ${} y de contenido es ...product, count: 1
      //se van a leer todos los productos cada que se garegue uno neuvo y se va a hacer un find se si este producto ya existe en cart se va a llamr a la funcion de updateProductInCar
      const productsInCart = this.readAllProductsInCart();
      const productInCar = productsInCart.find(
        (produc) => produc.id === product.id
      );

      console.log("ESTE ES PRODUCT IN CAAAAAART ", productInCar);
      if (productInCar) {
        return this.updateProductInCart(productInCar); //hacer spreed operator y luego hacer una suma al campo de ++ dentro de la funcion pdate product in cart
      }

      const prod = { ...product, count: 1 }; //ya destrcucture el objeto y le agregue un campo ahora guardo en el localStorage con setItem
      console.log("this is prod", prod);
      localStorage.setItem(`product${prod.id}`, JSON.stringify(prod));
      //
      const getProductsInCart = this.readAllProductsInCart();
      productsInCartRender(getProductsInCart);

      console.log("este es product para cart", product);
    } catch (error) {
      console.log("hubo un error en createProduct", error);
    }
  }

  readProductInCart(pid) {
    try {
      //aqui ya recibo un id entonces solo trqaigo un item que tenga esta id
      console.log("esto es lo que recibo por readProductInCart", pid);
      const product = localStorage.getItem(`product${pid}`);
      console.log("RAMIRRRRRRREEEEEEEEEEEEEEEEEZ", product);
      return product;
    } catch (error) {
      console.log("hubo un error en createProduct", error);
    }
  }

  readAllProductsInCart() {
    try {
      const products = []; // Aquí almacenaremos los productos
      let mmM = localStorage.key(0);
      console.log("probando proban", mmM);

      // Recorremos todas las claves en localStorage
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // Obtener la clave actual

        // Verificar si la clave empieza con "Products"
        if (key.startsWith("product")) {
          const product = JSON.parse(localStorage.getItem(key)); // Obtener y parsear el producto
          products.push(product); // Añadir el producto al array
        }
      }
      console.log("no puede seeer ", products);
      return products; // Devolver el array con todos los productos
      //aqui realizare un ciclo en base a las key  de acrts
    } catch (error) {
      console.log("hubo un error en createProduct", error);
    }
  }

  readLastProductInCart() {
    try {
      const prods = this.readAllProductsInCart();

      const last = prods.reduce((prev, current) => {
        prev.id > current.id ? current.id : prev.id;
      });
      console.log("esto vieneeeeeeeeeeeeeeeeeeee", prods);
      console.log("barra rsknad", last);
      //aqui debo encontrar el ultimo producto agregado y en readAll  voy a estar leyendo y recorriendo todas las claves que esten en localStorage
    } catch (error) {
      console.log("error en leer el ultimo product");
    }
  }

  updateProductInCart(prod) {
    try {
      //se recibe el producto se destructura y se le suma el count con ++ y se hace un localStorage.setItem despues de trasnformar esto a stringify que localStorage solo acepta texto y no llamo denuevo a createProductInCart porque o si no se podria crear conflictos o bucle infinito

      console.log("ESTO ES LO QUE RECIBO EN UPDATE", prod);
      console.log(
        "ESTOS SON LOS CAMPOS DE PROD UPDATE",
        prod.count,
        "y su ID ",
        prod.id
      );

      const ProductUpdate = { ...prod, count: ++prod.count };
      console.log("eroreoroijneprniebwr", ProductUpdate);
      //ya tengo el producto ahora aqui utilizo el buscar por key que es el id del producto y una vez lo encuentro seteo esa clave con el ProductUpdate
      const prodUpdate = JSON.stringify(ProductUpdate);
      console.log("esto es lo que llegfara para local ", prodUpdate);
      const LocalProduct = localStorage.setItem(
        `product${prod.id}`,
        prodUpdate
      );
      return LocalProduct;
    } catch (error) {
      console.log("hubo un error en createProduct", error);
    }
  }

  deleteProductInCart() {
    try {
      //aplicar el removeItem de localStorage
    } catch (error) {
      console.log("hubo un error en createProduct", error);
    }
  }
}
