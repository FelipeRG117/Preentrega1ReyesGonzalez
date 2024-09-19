///aqui renderizare la data quie me llegue desde search
//sorprendentemente estoy recibiendo bien la data

const buscar = (d) => {
  console.log("compradiiiis", d);
};

export const searchRender = async (data) => {
  try {
    //primero traerse el div que contiene el search-container donde se renderizara la data
    const searchContainer = document.getElementById("search-container");
    console.log("data recibida cheack", data);
    searchContainer.innerHTML = "";

    const productsContainer = document.getElementById("products-container");
    console.log("ramsajndloandljnsalndj", productsContainer);
    const matches = await data;
    // Aquí evaluamos si matches.length es igual a 100 o no, antes de iterar
    if (matches.length === 100) {
      // Si matches.length es 100, ocultamos el contenedor de búsqueda y mostramos el de productos
      searchContainer.style.display = "none";
      productsContainer.style.display = "block";
    } else if (matches.length > 0) {
      // Si hay coincidencias, mostramos el contenedor de búsqueda y ocultamos el de productos
      searchContainer.style.display = "block";
      productsContainer.style.display = "none";
    }

    matches.forEach((prod) => {
      //ahora que vamos a recorrer el array vamkos a crear las funciones de appendChild y tambien las de crear el innerHTML
      //primero creamos el div que tendra cada obj iterado
      const card = document.createElement("div");
      card.className = "prod-card";

      //sgregarebla funcionalidad de ocultar el div de products-container

      //ahora  que ya tengo el div de la card me toca ajhcer u n innerHTML para poder renderizar toda la data que me esta llegando
      card.innerHTML = `<h3>${prod.name} </h3>
      <img src="${prod.img}">
      <p>${prod.description}</p>
      <h4>${prod.size}</h4>
      <h4>${prod.price}</h4>`;
      const button = document.createElement("button");
      button.className = "button";
      button.innerText = "Comprar";
      button.addEventListener("click", () => buscar(prod.id));
      card.appendChild(button);
      searchContainer.appendChild(card);
    });
  } catch (error) {
    console.log("Buno un error en searchRender", error);
  }
};
