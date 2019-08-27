import React, { Component } from "react";
import Slider from "react-slick";
import images from '../imporImages'
import './slider.css';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }; 
    return (
      <div id="sslider">
          <div className="row">
          <h4 className="col-12"> conocimientos tecnicos </h4>
          {/* <hr id="divider"></hr> */}
        </div>
               
        <Slider {...settings}>
        <div>
          <img className="center" src={images['logoreact.png']} />
          </div>
         
          <div>
          <img className="center" src={images['bootstraplogo.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['js.png']} alt=""/>
          </div>
                  
        </Slider>
        
      </div>
    );
  }
}