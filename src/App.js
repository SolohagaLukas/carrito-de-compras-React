import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState, Fragment} from "react";
import Producto from "./components/Producto";
import Changuito from "./components/Changuito";


function App() {

  // Listado de productos con un State

  const [productos, guardarProductos] = useState([
    {id:1, articulo:"Boulevard", precio:1100},
    {id:2, articulo:"Heist", precio:1200},
    {id:3, articulo:"El Duelo", precio:910},
    {id:4, articulo:"Personas Desconocidas", precio:850},
    {id:5, articulo:"El Psicoanalista", precio:1120}
  ]);

  //State para el changuito
    
  const [changuito, agregarProducto] = useState([]);

  return (
    <Fragment>
      <Header />
      <h1>Libreria El Ateneo - Compre online</h1>
      {productos.map(producto =>
        (
          <Producto 
            key = {producto.id}
            producto = {producto}
            productos = {productos}
            changuito = {changuito}
            agregarProducto = {agregarProducto}
          /> 
        )
        )}


      <Changuito 
        changuito = {changuito}
        agregarProducto = {agregarProducto}
      />

      <Footer />
    </Fragment>
  );
}

export default App;
