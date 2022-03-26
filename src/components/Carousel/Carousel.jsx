import React from "react";
import "./carousel.css";
function Carousel() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide carousel_position" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://actualidadlaboral.com/wp-content/uploads/2022/03/tres-personas-reunidas-en-una-oficina-1024x576.jpg" className="d-block w-100 carousel_img" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Atención personalizada.</h5>
              <p>Vencimos la pandemia! Veni a nuestras sucursales y asesorate con nuestros oficiales</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.tooltyp.com/wp-content/uploads/2019/01/1900x920-como-y-por-que-hacer-descuentos-en-tu-ecommerce.jpg" className="d-block w-100 carousel_img" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Zona de beneficios</h5>
              <p>Sumate a nosotros y obtene increible beneficios en tiendas.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://s1.eestatic.com/2020/07/06/actualidad/actualidad_503210424_155198864_1024x576.jpg" className="d-block w-100 carousel_img" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Inversiones</h5>
              <p>Trabajamos con una cartera de inversiones sostenibles y "eco friendly".</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
