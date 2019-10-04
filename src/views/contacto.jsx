import React, { Component } from 'react';
import './contacto.css'

class Contacto extends Component {
    render() {
        return (
            <div className="contacto">
                <h1 className="sk">
                   Contacto
                </h1>
                <div className="redes ">

                    <a href="http://www.linkedin.com/in/laura-silva-arratia" target="_blank"><span>Linkedin</span></a>
                    <a href="https://github.com/javie-lau" target="_blank"><span>Github</span></a>
                    <a href="https://www.instagram.com/_javie_lau/" target="_blank"><span>App talento</span></a>
                    <a href="https://www.instagram.com/_javie_lau/" target="_blank"><span>Gmail</span></a>

                </div>
            </div>

        )
    }
}
export default Contacto;