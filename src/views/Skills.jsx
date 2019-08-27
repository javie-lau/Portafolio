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
                <div className="col-md-12 col-xs-12">
              <Responsive/>
                </div>
            </div>
            </div>
            
        )
    }
}
export default Skills