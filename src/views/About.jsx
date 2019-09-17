import React, { Component } from 'react';
import images from '../imporImages'
import './about.css'

class About extends Component {
    render() {
        return (
            <div className="aboutMe container-fluid">
                <div className="row">
                    <div className="myPhoto col-md-4 col-xs-12">
                        <img className="me" src={images['cross3.png']} alt="Responsive image"></img>
                        
                    </div>
                    <div className="text col-md-8 col-xs-12">
                        <h1 className="name align-items-start">Laura Silva Arratia</h1>
                        <h2 className="front"> Desarrolladora Front-end </h2>
                        <p className="descripcion">Trabajo constantemente para alcanzar un conocimiento holistico, no solo en el área de la tecnología, si no que también en el ámbito social y espiritual, cuento con un el titulo de terapeuta natural, y comunicadora audiovisual y estudios en pedagogía, me gusta estar en constante crecimiento y desafiando mis capacidades tanto física y mentalmente, es por esto que entreno crossfit . Creo que mi mayor fortaleza es la voluntad y el hacer las cosas desde el amor.</p>
                        
                        <div className="redes ">
                        
                            <a href="#"><span>Linkedin</span></a>
                            <a href="#"><span>Github</span></a>
                            <a  href="#"><span>Instagram</span></a>
                    
                        </div>

                    </div>
                   
                    </div>

                   
                        </div>
                
            
        )
    }
}
export default About