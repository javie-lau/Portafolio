import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Menu.css'

class Menu extends Component{

  render(){
    return(
      <div className="dotNav">
         <div data-spy="affix" id="dot-nav">
    	<ul>
	    
	      <li className="awesome-tooltip" title="About"><a href="#about"></a></li>
	      <li className="awesome-tooltip" title="Projects"><a href="#project"></a></li>
	      <li className="awesome-tooltip" title="Skills"><a href="#skills"></a></li>
	    </ul>
	</div>
        
        {/* <div className="fixed-top">
            <ul className="gradiant nav ">
                  <li className="nav-item">
                    <a className="menNav nav-link " href="#">About Me</a>
                  </li>
                  <li className="nav-item">
                    <a className="menNav nav-link" href="#">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="menNav nav-link" href="#">Proyects</a>
                  </li>
                   
                
              </ul>
       
        </div> */}


      </div>
    )
  }

}
export default Menu