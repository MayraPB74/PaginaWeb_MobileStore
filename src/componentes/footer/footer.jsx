import React from "react";
import './footer.css';
import fb from "../../imagenes/fb.png";
import twitter from "../../imagenes/twitter.png";
import insta from "../../imagenes/insta.png";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="sb_-footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Ayuda</h4>
                        <a href="/employer">
                            <p>Atencion al cliente</p>
                        </a>
                        <a href="/employer">
                            <p>Preguntas frecuentes</p>
                        </a>
                        <a href="/employer">
                            <p>Mi cuenta</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Telefonos</h4>
                        <a href="/resource">
                            <p>Motorola</p>
                        </a>
                        <a href="/resource">
                            <p>Xiaomi</p>
                        </a>
                        <a href="/resource">
                            <p>Samsung</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Planes</h4>
                        <a href="/employer">
                            <p>Planes con equipo</p>
                        </a>
                        <a href="/employer">
                            <p>Planes sin equipo</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Sobre</h4>
                        <a href="/about">
                            <p>Quienes somos</p>
                        </a>
                        <a href="/press">
                            <p>Equipo directivo</p>
                        </a>
                        <a href="/career">
                            <p>Politica de privacidad</p>
                        </a>
                        <a href="/contact">
                            <p>Contactanos</p>
                        </a>
                    </div>
                    <div className = "sb__footer-links_div">
                        <h4>Siguenos en</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={twitter} alt=""/></p>
                            <p><img src={insta} alt=""/></p>
                        </div>
                    </div>
                </div>
            <hr></hr>
            <div className="sb__footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} Mobile Store. Todos los derechos reservados.
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms"><div><p>Terminos y Condiciones</p></div></a>
                    <a href="/privacy"><div><p>Privacidad</p></div></a>
                    <a href="/garantias"><div><p>Garantias</p></div></a>
                    <a href="/cookie"><div><p>Politica de CookiesS</p></div></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;