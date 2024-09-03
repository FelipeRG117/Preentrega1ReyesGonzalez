//aqaui comienza mi proyecto
// calcular el promedio de personas registradas
//al menos una condicional un ciclo t una funcion

//un array que contiene todos los "products"
//tambien se van a agregar un nuevo objeto
const products = [
  "guitarra",
  "mariposa",
  "computadora",
  "montaña",
  "océano",
  "biblioteca",
  "automóvil",
  "elefante",
  "teléfono",
  "cielo",
  "estrella",
  "jirafa",
  "tren",
  "avión",
  "bosque",
  "ciudad",
  "luna",
  "planeta",
  "barco",
  "teclado",
];
let allProducts = ""; //inica en valor de string vacio para pdoer renderizar y pasar los valores de product a allProducts

for (let i = 0; i < products.length; i++) {
  //se recorre todo el array
  //console.log(products[i]);
  allProducts += products[i] + ", "; //se localiza el indice y se asigna el valor a allProducts mas coma y espacio para seguir metiendo ams productos
  // console.log("este es el objeto", products[i]);
}

let product = prompt(
  `si quieres agregar producto escribe su nombre, tenemos estos prducts: ${allProducts}`
); // se muestra mensaje de introducir product y se ensenan los productos de products
//alert(`tenemos los sig productos ${allProduct}`);
console.log(product);
products.push(product); // se pushea el valor tomado de prompt

console.log(allProducts);
console.log(products);

//hacer u nn if para evitar meter contenido que no seastring
if (typeof product === "string") {
  alert(`Ahora lpos productos son, ${products}`); // se muestran todos los products con el nuevo agregado
} else {
  alert("Lo que pusiste no era un striiiing");
}

//esto fue por pura diversion
const title = document.getElementById("title");
console.log(title);

title.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightblue";
});
