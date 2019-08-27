import React, { Component } from 'react';
import Menu from '../componentes/Menu'
import About from './About'
import Skills from './Skills'
import  Works from './Works'

class Home extends Component{
  render(){
    return(
      <React.Fragment>
         <Menu/>
         <div className="bod">
          <About/>
         </div>
         
         <div className="proyect">
           <Works/>
         </div>
         <div className="skills">
          
           <Skills/>
           
         </div>

        
      </React.Fragment>
    )
  }
}
export default Home