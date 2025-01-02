import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "../../app.css"

function Navbar() {
  return (
    <header className='container-fluid d-flex justify-content-between align-items-center px-5 py-3 border-bottom border-secondary'>
        <h1 className='h1 titulo'>Camisetas MD</h1>
        <nav className='d-flex gap-3 align-items-center'>
            <ul className='nav gap-3'> 
                <li className='nav-item'><a className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href="#">Inicio</a></li>
                <li className='nav-item'><a className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href="#">Productos</a></li>
                <li className='nav-item'><a className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href="#">Contactos</a></li>
            </ul>
            <CartWidget/>
        </nav>
    </header>
  )
}

export default Navbar