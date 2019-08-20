import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Menu.css'

class Menu extends Component{

  render(){
    return(
      <div>
        
        <div className="fixed-top">
            <ul className="gradiant nav ">
                  <li className="nav-item">
                    <a className="menNav nav-link " href="#">About Me</a>
                  </li>
                  <li className="nav-item">
                    <a className="menNav nav-link" href="#">Skill</a>
                  </li>
                  <li className="nav-item">
                    <a className="menNav nav-link" href="#">Works</a>
                  </li>
                   
                
              </ul>
       
        </div>


      </div>
    )
  }

}
export default Menu