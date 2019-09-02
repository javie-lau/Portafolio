import React, { Component } from 'react';
// import Menu from '../componentes/Menu'
import About from './About'
import Skills from './Skills'
import Works from './Works'
import './home.css'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="dotNav">
          <div data-spy="affix" id="dot-nav">
            <ul>

              <li className="awesome-tooltip" title="About"><a href="#about"></a></li>
              <li className="awesome-tooltip" title="Projects"><a href="#project"></a></li>
              <li className="awesome-tooltip" title="Skills"><a href="#skills"></a></li>
            </ul>
          </div>
        </div>

        <div id="about">
          <About />
        </div>
        
        <div className="container">

          <div id="project">
            <Works />
          </div>
          <div id="skills">

            <Skills />

          </div>
        </div>

      </React.Fragment>
    )
  }
}
export default Home