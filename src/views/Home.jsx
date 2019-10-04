import React, { Component } from 'react';
// import Menu from '../componentes/Menu'
import About from './About'
import Skills from './Skills'
import Works from './Works'
import Contacto from './contacto'
import './home.css'
// ES6 Imports
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'





class Home extends Component {
  componentDidMoun() {

    Events.scrollEvent.register('begin', function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  componentWillUnmoun() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }

  render() {
    return (
      <React.Fragment>

        <div id="navbar">
          <div className="row">
          <div className="col-xs-3">
        <Link  activeClass="active"to="about"spy={true} smooth={true}  duration={600} onSetActive={this.handleSetActive}><a className="ab" title="About" >About</a></Link>
        </div>
        <div className="col-xs-3">
        <Link activeClass="active" to="project" spy={true} smooth={true}  duration={500} onSetActive={this.handleSetActive}> <a  className="pr"title="Projects">Project</a></Link>
        </div>
        <div className="col-xs-3">
        <Link activeClass="active" to="skills" spy={true} smooth={true}  duration={500} onSetActive={this.handleSetActive}>  <a className="sks">Skills</a></Link> 
        </div>
        <div className="col-xs-3">
        <Link activeClass="active" to="contacto" spy={true} smooth={true}  duration={500} onSetActive={this.handleSetActive}>  <a className="sks">Contacto</a></Link> 
        </div>
        </div>
        </div>

        {/*         
        <div className="dotNav">
          <div data-spy="affix" id="dot-nav">
            <ul>

            <Link  activeClass="active" to="about" spy={true} smooth={true}  duration={600} onSetActive={this.handleSetActive}> <button className="awesome-tooltip" title="About"></button></Link>
            <Link activeClass="active" to="project" spy={true} smooth={true}  duration={500} onSetActive={this.handleSetActive}>    <li className="awesome-tooltip" title="Projects"></li></Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true}  duration={500} onSetActive={this.handleSetActive}> <li className="awesome-tooltip" title="Skills"></li></Link>
            </ul>
          </div>
        </div> */}

        <Element name="about" className="element">
          <About />
        </Element>

        <div className="container">

          <Element name="project" className="element">
            <Works />
          </Element>
          <Element name="skills" className="element">

            <Skills />

          </Element>
          <Element name="contacto" className="element">
            <Contacto/>
          </Element>
        </div>

      </React.Fragment>
    )
  }
}
export default Home