import React, {Component} from 'react';
import Cards from '../componentes/Cardswork'
import Circle from '../componentes/circle'
import './works.css'
class Works extends Component{
    render(){
        return(
            <div className="workcards">
                <Cards/>

            </div>
        )
    }
}
export default Works