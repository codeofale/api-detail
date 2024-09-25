/*Componente presentacional de los Productos*/
import Products from "./Products";
import "../index.css";

function Home() {
  return (
    <>
      <nav>
        <div className="navbar">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      <Products />
    </>
  );
}
export default Home;
