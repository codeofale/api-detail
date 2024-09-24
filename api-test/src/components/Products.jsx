import React, { useState, useEffect } from "react";
function Products() {
  const [products, setProducts] = useState([]);
  /*Pedimos los productos a la api, fake store trae 20 productos para simular ecomm*/
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  });
  return (
    <>
      <h1>Lista de Productos</h1>
      <ul>
        {products.length === 0 ? (
          <li>Cargando el producto...</li>
        ) : (
          products.map((product) => {
            return (
              <li key={product["id"]}>
                {product["title"]}
                <article>{product["description"]}</article> <br />
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}
export default Products;
