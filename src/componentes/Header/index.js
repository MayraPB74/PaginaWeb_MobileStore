import React from "react";
import mobile from "../../imagenes/logo.jpg";


export const Header = () =>{
    return (
      <header>
        <title>Mobile Store</title>
        <a href = "#">
            <div classname = "logo">
                <img src={mobile} alt="logo" width="150"/>
            </div>
        </a>
        <ul>
            <li>
                <a href = "#"> INICIO</a>
            </li>
            <li>
                <a href = "#"> PRODUCTOS</a>
            </li>
            <li>
                <a href = "./Login/Login"> SING IN</a>
            </li>
        </ul>
        <div className = "cart">
            <box-icon name="cart"></box-icon>
            <span className ="item-total">0</span>
        </div>
      </header>
    )
}
