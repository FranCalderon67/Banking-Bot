import React, { useState, useEffect } from "react";
import "./logInForm.css";
import { SiWebmoney } from "react-icons/si";
import { Link } from "react-router-dom";

function LogInForm() {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(true);

  const promiseMock = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("https://picsum.photos/900");
    }, 1500);
  });

  useEffect(() => {
    promiseMock
      .then((res) => {
        setImage(res);
      })
      .catch((error) => {
        console.log("error=>", error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

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
        <div>{loading ? <div className="spinner-grow text-danger loadingPosition" role="status"></div> : <img className="formImg" src={image} alt="ERROR" />}</div>
      </div>
    </>
  );
}

export default LogInForm;
