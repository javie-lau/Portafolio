import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Home.css'
import ImgHome from '../componentes/imgHome'
import DraggableList from '../componentes/Menu'


function Home(){
    return(

        <div className= "Home">
            <div className="inicio">
            <DraggableList items={'About-Me Works Skill Home'.split(' ')} />
                {/* <ImgHome/> */}
            </div>
            <div className="texto">
          <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <h2>{'Laura Silva Front End'}</h2>
          </ReactCSSTransitionGroup>
          </div>
          <div className="foother">
              foother
          </div>
        </div>
    )
}
export default Home; 