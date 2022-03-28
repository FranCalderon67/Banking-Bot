import React from "react";
import "./body.css";

function Body() {
  return (
    <>
      <section className="bodyFlex">
        <div className="bodyFlex_content">
          <h3 style={{ textAlign: "center", textDecoration: "underline" }}>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
            was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
        </div>
        <div className="bodyFlex_content">
          <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Why do we use it?</h3>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </section>
      <section>
        <h2 style={{ textAlign: "center", marginTop: "1rem" }}>Te podria interesar</h2>
        <div className="cardFlex">
          <div className="cardOne">
            <h5 className="card-content_title">Realiza todos tus pagos desde nuestra App</h5>
            <p className="card-content_text">Mira como pagar con QR, hacer recargas, abonar servicios y mucho mas</p>
          </div>
          <div className="cardTwo">
            <h5 className="card-content_title">Conoce mas de nuestra cartera Eco Friendly</h5>
            <p className="card-content_text">Te contamos todo lo que necesitas para hacer rendir tu dinero sin ningun impacto en nuestro ambiente</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
