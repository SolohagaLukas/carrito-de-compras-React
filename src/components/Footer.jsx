import React from 'react'

const Footer = () => {
    
    // Acá pongo el jvascript
    //Calcular el año

    const fecha = new Date().getFullYear()
    
    return ( 
        <h2>Año {fecha}</h2>
     );
}
 
export default Footer;