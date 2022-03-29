import React from "react";
import "./logInForm.css";
import { SiWebmoney } from "react-icons/si";
import { Link } from "react-router-dom";

function LogInForm() {
  return (
    <>
      <SiWebmoney className="formLogo" />
      <div className="formDisplay">
        <div>
          <form className="form-ingreso">
            <input className="form-ingreso-usuario" type={"text"} placeholder="Usuario" required />
            <input className="form-ingreso-pin" type={"password"} placeholder="Contraseña" required />
            <button className="form-ingreso-boton" type="submit">
              Aceptar
            </button>
            <Link to="/">
              <button className="form-ingreso-boton">Cancelar</button>
            </Link>
          </form>
        </div>
        <div>
          <img className="formImg" src={"https://picsum.photos/900"} alt="ERROR" />
        </div>
      </div>
    </>
  );
}

export default LogInForm;
