import images from '../imporImages.js';
import React, {Component} from 'react';
import'./ImgHome.css'

class ImgHome extends Component {
 render(){
     return(
        <div className="imgHome">
        <img src={images['lila.png']} className="img-fluid" alt="Responsive image"/>
        </div>

     )
 }
}

export default ImgHome;
