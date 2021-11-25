import React from 'react';
import './header.css';
import logo from '../images/logo-libro.jpg'

const Header = () => {
    return ( 
        <header className="bienvenida">
        <br></br>
            <h4 id="titulo-bienvenida">¡Bienvenidos a Libreria Ateneo!</h4>
            <br></br>

            <div className="d-flex justify-content-end">
                <ul className="p2 contactos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/> </svg>
                    1166118844
                </ul>
                <ul className="p2 contactos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16"> <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/> </svg>
                    solohagalukas@gmail.com
                </ul>
                <ul className="me-4 contactos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16"> <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/> </svg>
                    Leandro N. Alem 3078, Merlo, BsAs
                </ul>      
            </div>

            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar..."></input>
                            <button className="btn btn-outline-success" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
                            </button>
                        </form>
                        <img src={logo} className="logo"></img>
                        <ul className="d-flex justify-content-end login">
                            <ul className="me-4">
                                <a>CREAR CUENTA</a>
                            </ul>|
                            <ul className="me-4">
                                <a>INICIAR SESION</a>
                            </ul>
                        </ul>
                    </div>
                </nav> 
            </div>

            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse navbar-center">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">INICIO</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">TÍTULOS</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">EMPRENDIMIENTO</a></li>
                                    <li><a className="dropdown-item" href="#">JUVENILES</a></li>
                                    <li><a className="dropdown-item" href="#">WATTPAD</a></li>
                                    <li><a className="dropdown-item" href="#">NOVELAS</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACTO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16"> <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/> </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            

        </header>

     );
}
 
export default Header;
