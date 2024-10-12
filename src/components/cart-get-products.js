export const cartGetProducts = () => {
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
};
