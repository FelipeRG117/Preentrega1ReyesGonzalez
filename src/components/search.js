import { getProducts } from "../routes/products.router.js";
//const products = await getProducts();
//console.log("borraassss", products);
import { searchRender } from "../utils/search.utils.js"; //importacionde utils qu renderizara la data del json
//////

export const searchProducts = async (prods) => {
  //aqui lo que pcupo ahacer es meterle un addEevent Listener con onChange y tomar el valor de primeras y mostrarlo por consola una vez tenmga el valor voya  proceder a hacer un productsJson find prod => prod.name == valor.tomadodesearch

  const searchButton = document.getElementById("search-button");
  console.log(searchButton); //entrega la etiqeuta correctamente
  const productsJSON = await getProducts();
  console.log("datoosoosaks", productsJSON);
  //aqui esta el  eveneto que tomara el valor y buscara con find
  searchButton.addEventListener("input", (event) => {
    //primero tomar el valor
    console.log(event.target.value);
    let val = event.target.value.toLowerCase(); //se toma correctamente el valor
    let match = productsJSON.filter((prod) =>
      prod.name.toLowerCase().includes(val)
    );
    //proposito final retronar todos los que se oparezcan en nombre del nombre que toma del search y tambien del array haria falta recorrerlo para encotnrar las coincidencias
    console.log("dnsadnlsa", match);
    searchRender(match);
    return match;
  });
};
