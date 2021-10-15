import React from 'react'
import { Fragment } from 'react';

const Producto = ({producto, productos, changuito, agregarProducto}) => {
    
    const {id,articulo,precio} = producto;

    //Funcion para agregar productos al changuito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        agregarProducto([...changuito, producto]);
        //console.log(producto);
        console.log(changuito);
    } 

    //función para quitar productos del changuito
    const eliminarProducto = (id) => {
        //Me quedo con los productos que no son el que estoy eliminando
        const productos = changuito.filter( producto => producto.id !== id );
        agregarProducto(productos);
    }
    
    return ( 
        <Fragment>
            <div>
                <h3>{id} - {articulo} - {precio}</h3>
                {
                    productos
                    ?
                        <button 
                            type="button"
                            onClick={ () => seleccionarProducto(id) }
                        >Comprar</button>
                    :
                        <button
                            type="button"
                            onClick={ () => eliminarProducto(id)}
                        >Eliminar</button>
                }
                
            </div>
        </Fragment>
     );
}
 
export default Producto;
