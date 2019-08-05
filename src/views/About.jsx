import React, {Component} from 'react';
import images from '../imporImages';
import './about.css'


class About extends Component{
    render(){
        return(
           <div className="bdy">
            <div className="row">
                <div className="offset-1 col-lg-6 col-md-6 col-sm-12">
                   
                <img src={images['lila.png']}  className='imgRedonda' />

                </div>
                <div className=" text offset-1 col-lg-6 col-md-6 col-sm-12">
                    <h4> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe deleniti nemo maiores necessitatibus recusandae velit sit doloribus cupiditate repellat, dolores sunt voluptate, doloremque neque iusto repudiandae facilis distinctio. Doloribus, quia.

                    </h4>
                </div>

            </div>
            </div>
          
        )
    }
}
export default About