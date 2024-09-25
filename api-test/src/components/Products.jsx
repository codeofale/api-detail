import React, { useState, useEffect } from "react";
import "../index.css";
function Products() {
  const [products, setProducts] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [comprado, setComprado] = useState({});
  /*Pedimos los productos a la api, fake store trae 20 productos para simular ecomm*/
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  });
  function handleClick(id) {
    setComprado({ ...comprado, [id]: true });
    setMensaje("Gracias por su compra");
    setTimeout(() => {
      setMensaje("");
      setComprado({ ...comprado, [id]: false }); // Limpiamos el mensaje después de 3 segundos
    }, 3000);
    console.log(comprado);
  }
  return (
    <>
      <h1>Lista de Productos</h1>
      <ul>
        {products.length === 0 ? (
          <li>Cargando los productos...</li>
        ) : (
          products.map((product) => {
            return (
              <li key={product["id"]}>
                <img
                  src={product["image"]}
                  alt="not found"
                  className="product-img"
                />
                <div className="product-info">
                  <p className="product-name">{product["title"]}</p>
                  <p className="product-description">
                    {product["description"]}
                  </p>
                  <span className="product-price">${product["price"]}</span>
                </div>
                <button
                  className="buy-btn"
                  onClick={() => handleClick(product["id"])}
                >
                  Comprar
                </button>
                {comprado[product["id"]] && <p>{mensaje}</p>}
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}
export default Products;
