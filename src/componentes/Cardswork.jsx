import React, { Component } from 'react';
import images from '../imporImages'
import './cardswork.css'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


class Cards extends Component {
  render() {
    return (
      // <div className="container">
      <div className="works">

        <h1 className="wk">
          Projects
                  </h1>

        <div className="boxesContainer">
          <div className="row">

          <div className="cardBox col-md3">
            <div className="card">
            {/*<img className="atacama img-fluid"src={images['atacama.gif']} alt=""/>*/}   
              <div className="front">
               
                <h3></h3>
                <p></p>
                <strong>&#x21bb;</strong>
              </div>
              <div className="back">
                <h3>Burger-queer</h3>
                <p>frameworks ReactJs</p>
                <a href="https://burguer-queen-b451c.firebaseapp.com/SCL009-Burger-Queen/"target="_blank">Revisa Aqui</a>
              </div>
            </div>
          </div>
          <div className="cardBox  col-md3">
            <div className="card">
              <div className="front">
                <h3></h3>
                <p></p>
                <strong>&#x21bb;</strong>
              </div>
              <div className="back">
                <h3>Atacama Scope</h3>
                <p>Html y Css</p>
                <a href="https://github.com/javie-lau/Atacama-Scope"target="_blank">Revisa Aqui</a>
              </div>
            </div>
          </div>
          <div className="cardBox  col-md3">
            <div className="card">
              <div className="front">
                <h3></h3>
                <p></p>
                <strong>&#x21bb;</strong>
              </div>
              <div className="back">
              <h3>Dsg-duchenne</h3>
                <p>frameworks ReactJs</p>
                <a href="https://mariia1304.github.io/duchenne-react/"target="_blank">Revisa Aqui</a>
              </div>
            </div>
          </div>
          <div className="cardBox  col-md3">
            <div className="card">
              <div className="front">
                <h3></h3>
                <p></p>
                <strong>&#x21bb;</strong>
              </div>
              <div className="back">
                <h3>Fem Data</h3>
                <p>Js, Html5, css</p>
                <a href="https://github.com/javie-lau/SCL008-data-lovers"target="_blank">Revisa aqui</a>
              </div>
            </div>
          </div>
               
        </div>
        </div>
        </div>




        )
    }
}


export default Cards

