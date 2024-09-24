function Products() {
  let products = [];
  /*Pedimos los productos a la api, fake store trae 20 productos para simular ecomm*/
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      products = json;
      console.log(products);
    });
  /*controlamos si esta vacio, porque las peticiones son asincronicas*/
  if (products.length > 0) {
    products.map((e) => console.log(e));
  }
}
export default Products;
