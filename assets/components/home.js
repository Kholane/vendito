import React from "react";
import "../styles/home.css";

export default function Home(){
    return (
        <div className="container h-100 mt-5">
            <div className="row">
                <div className="col-lg-6">
                 <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-touch="false">
                 <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                 </div>
                  <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                  <img src="../img/item.jpg" className="d-block w-100" alt="..."/>
                 </div>
                 <div className="carousel-item" data-bs-interval="2000">
      <img src="../img/item2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../img/item3.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                </div>
                <div className="col-lg-6">
                    <div className="home_header">
                        <h1 className="">Buy or open your online store to sell with us.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}