import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.modules.css"
import escudo from "./assets/logo.png"

const NavBar = () => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={escudo} className="logo" alt="logo" />
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Remeras</a></li>
                        <li><a href="#">Calzado</a></li>
                        <li><a href="#">Shorts</a></li>
                    </ul>
                </nav>
                <div>
                    <CartWidget />
                </div>
            </header>
        </>
    )
}

export default NavBar