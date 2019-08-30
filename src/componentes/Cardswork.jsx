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
          Proyects
                  </h1>

        <div className="boxesContainer">
          <div className="row">

          <div className="cardBox offset-1 col-md3">
            <div className="card">
            {/*<img className="atacama img-fluid"src={images['atacama.gif']} alt=""/>*/}   
              <div className="front">
               
                <h3></h3>
                <p></p>
                <strong>&#x21bb;</strong>
              </div>
              <div className="back">
                <h3>Back Side One</h3>
                <p>Content in card one</p>
                <a href="#">Button 1</a>
              </div>
            </div>
          </div>
          <div className="cardBox offset-1 col-md3">
            <div className="card">
              <div className="front">
                <h3></h3>
                <p></p>
                <strong>&#x21bb;</strong>
              </div>
              <div className="back">
                <h3>Back Side One</h3>
                <p>Content in card one</p>
                <a href="#">Button 1</a>
              </div>
            </div>
          </div>
          <div className="cardBox offset-1 col-md3">
            <div className="card">
              <div className="front">
                <h3></h3>
                <p></p>
                <strong>&#x21bb;</strong>
              </div>
              <div className="back">
                <h3>Back Side One</h3>
                <p>Content in card one</p>
                <a href="#">Button 1</a>
              </div>
            </div>
          </div>
          <div className="cardBox offset-1 col-md3">
            <div className="card">
              <div className="front">
                <h3></h3>
                <p></p>
                <strong>&#x21bb;</strong>
              </div>
              <div className="back">
                <h3>Back Side One</h3>
                <p>Content in card one</p>
                <a href="#">Button 1</a>
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

