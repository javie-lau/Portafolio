import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Home.css'
import ImgHome from '../componentes/imgHome'
import DraggableList from '../componentes/Menu'
import Forest from '../videos/Forest.mp4';

function Home(){
    return(

        <div className= "Home">
                 <div className="header-video">

                   <video src={Forest} type='video/mp4' autoPlay loop></video>
                 </div>
                 
            <div className="row">
            <div className="inicio col-md-4 ">
            <DraggableList items={'About-Me Works Skill Home'.split(' ')} />
                {/* <ImgHome/> */}
            </div>
            <div className="texto col-md-">
          <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <h1>{'Laura Silva Front End'}</h1>
          </ReactCSSTransitionGroup>
          </div>
          </div>
          <div className="foother">
             
          </div>
        </div>
    )
}
export default Home; 