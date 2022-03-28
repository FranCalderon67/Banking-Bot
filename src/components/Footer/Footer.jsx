import React from "react";
import "./footer.css";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { SiWebmoney } from "react-icons/si";

function Footer() {
  return (
    <>
      <div className="sectionLine">
        <SiWebmoney className="footerLogo" />
        <div className="listFlex">
          <ul>
            <p className="listTitle"> Conocenos </p>
            <li className="listContent">Informacion Financera</li>
            <li className="listContent">Sustentabilidad</li>
            <li className="listContent">Trabaja con nosotros</li>
            <li className="listContent">Comunicacion y Prensa</li>
            <li className="listContent">Politicas de Seguridad</li>
            <li className="listContent">Privacidad de datos</li>
          </ul>
          <ul>
            <p className="listTitle"> Atencion al Cliente </p>
            <li className="listContent">Ayuda</li>
            <li className="listContent">Sucursales y Cajeros</li>
            <li className="listContent">Solicitud de productos</li>
          </ul>
          <ul>
            <p className="listTitle"> Productos </p>
            <li className="listContent">Tarjeta de Credito</li>
            <li className="listContent">Tarjeta de Debito</li>
            <li className="listContent">Prestamos Personales</li>
            <li className="listContent">Plazo Fijo</li>
            <li className="listContent">Cartera de Inversiones</li>
            <li className="listContent">Cobra tu sueldo con nosotros</li>
          </ul>
          <ul>
            <p className="listTitle"> Contacto </p>
            <li>
              <a href="https://wa.link/yydlfp" target={"_blank"} rel="noreferrer">
                <BsWhatsapp className="contactLogo wLogo" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/francalders67/" target={"_blank"} rel="noreferrer">
                <AiOutlineLinkedin className="contactLogo linkedLogo" />
              </a>
            </li>
            <li>
              <a href="mailto:franciscocalderon1990@gmail.com" target={"_blank"} rel="noreferrer">
                <CgMail className="contactLogo mailLogo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
