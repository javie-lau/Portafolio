import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
 import About from '../views/About';
// import Works from '../views/Works';
// import Skills from '../views/Home';


const Routes = () => {
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
         <Route path='/about-me' component={About}/> 
        {/* <Route path='/about' component={About}/>
        <Route path='/works' component={Works}/>
        <Route path='/skills' component={Skills}/> */}
      </Switch>
    )
  }
  
  export default Routes