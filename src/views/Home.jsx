import React, { Component } from 'react';
import Menu from '../componentes/Menu'
import About from '../views/About'

class Home extends Component{
  render(){
    return(
      <React.Fragment>
         <Menu/>
         <div className="bod">
          <About/>
         </div>

        
      </React.Fragment>
    )
  }
}
export default Home