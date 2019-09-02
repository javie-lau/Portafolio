import React, { Component } from 'react';
import images from '../imporImages'
import './skills.css'
import Responsive from '../componentes/Slider';

class Skills extends Component{
    render(){
        return(
            <div>
            <div className="skills">
                 <h1 className="sk">
                   Skills
                </h1>
           
            </div>
            <div className="logos row">
                <div className="col-4">
                <i className="fab fa-react"></i></div>

                <div className="col-4">
                <i class="fab fa-bootstrap"></i></div>

                <div className="col-4">
                <i class="fab fa-github"></i></div>

                
               
                <div className="col-4">
                <i class="fab fa-js"></i></div>
               
                <div className="col-4">
                <i class="fab fa-css3-alt"></i></div>

                <div className="col-4">
                <i class="fab fa-html5"></i></div>




                
            </div>
            </div>
            
        )
    }
}
export default Skills