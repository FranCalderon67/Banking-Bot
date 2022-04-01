import React from "react";
import "./options.css";
import { Link } from "react-router-dom";

function Options() {
  return (
    <>
      <div className="flexContainer">
        <Link to="/signup">
          <div className="card">
            <img className="flexImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNn98TntIn-jYjPbUemCKcYDbN9woY0IxUrA&usqp=CAU"} alt="ERROR" />
            <div>Registrate</div>
          </div>
        </Link>
        <div className="card">
          <img className="flexImg" src={"https://images4.content-hci.com/commimg/myhotcourses/blog/post/myhc_63466_255px.jpg"} alt="ERROR" />
          <div>Resuelve tus dudas</div>
        </div>
        <div className="card">
          <img
            className="flexImg"
            src={
              "https://us.123rf.com/450wm/morphart/morphart1904/morphart190401405/123449432-un-tel%C3%A9fono-m%C3%B3vil-con-pantalla-t%C3%A1ctil-elegante-con-dibujo-o-ilustraci%C3%B3n-en-color-vectorial-de-pantal.jpg?ver=6"
            }
            alt="ERROR"
          />
          <div>Descarga nuestra App</div>
        </div>
      </div>
    </>
  );
}

export default Options;
