import React from "react";
import IMG from "../../imagenes/img01.jpg"
import IMG_2 from "../../imagenes/img02.jpg"
import IMG_3 from "../../imagenes/img03.jpg"
import IMG_4 from "../../imagenes/img04.jpg"

export const ProductosLista = () =>{
    return (
        <>
        <h1 className ="title">PRODUCTOS</h1>
        <div className = "productos">
            <div className="producto">
                <a href = "#">
                    <div className="producto__img">
                        <img src={IMG} alt=""/>
                    </div>
                </a>
                <div className = "producto__footer">
                    <h1> Khall </h1>
                    <p> Telefono Khall </p>
                    <p className = "price">$1,021.36</p>
                </div>
                <div className="buttom">
                    <button className="btn">
                    Añadir al carrito
                </button>
                <div>
                    <a href ="#" className ="btn">Vista</a>
                </div>
                </div>
            </div>
            <div className="producto">
                <a href = "#">
                    <div className="producto__img">
                        <img src={IMG_2} alt=""/>
                    </div>
                </a>
                <div className = "producto__footer">
                    <h1> Xiaomi </h1>
                    <p> Xiaomi Redmi 10C </p>
                    <p className = "price">$2,449.00</p>
                </div>
                <div className="buttom">
                    <button className="btn">
                    Añadir al carrito
                </button>
                <div>
                    <a href ="#" className ="btn">Vista</a>
                </div>
                </div>
            </div>
            <div className="producto">
                <a href = "#">
                    <div className="producto__img">
                        <img src={IMG_3} alt=""/>
                    </div>
                </a>
                <div className = "producto__footer">
                    <h1> Motorola </h1>
                    <p>Motorola g52 </p>
                    <p className = "price">$3,699.00</p>
                </div>
                <div className="buttom">
                    <button className="btn">
                    Añadir al carrito
                </button>
                <div>
                    <a href ="#" className ="btn">Vista</a>
                </div>
                </div>
            </div>
            <div className="producto">
                <a href = "#">
                    <div className="producto__img">
                        <img src={IMG_4} alt=""/>
                    </div>
                </a>
                <div className = "producto__footer">
                    <h1> Samsung  </h1>
                    <p> Galaxy Z FLIP 4 </p>
                    <p className = "price">$23,416.80</p>
                </div>
                <div className="buttom">
                    <button className="btn">
                    Añadir al carrito
                </button>
                <div>
                    <a href ="#" className ="btn">Vista</a>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
