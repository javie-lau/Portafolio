import React, { Component } from 'react';
import images from '../imporImages'
import './circle.css'


class Circle extends Component {
    render() {
        return (


            <div className="row">
                <div className="col-sm-6">

                    {/* <!-- normal --> */}
                    <div className="ih-item circle effect1"><a href="#">
                        <div className="spinner"></div>
                        <div className="img"><img src={images['cross3.png']}/></div>
                            <div className="info">
                                <div className="info-back">
                                    <h3>Heading here</h3>
                                    <p>Description goes here</p>
                                </div>
                            </div></a></div>
                        {/* <!-- end normal --> */}

                    </div>

                    <div className="col-sm-6">

                        {/* <!-- colored --> */}
                        <div className="ih-item circle colored effect1"><a href="#">
                            <div className="spinner"></div>
                            <div className="img"><img src={images['cross3.png']}  /></div>
                                <div className="info">
                                    <div className="info-back">
                                        <h3>Heading here</h3>
                                        <p>Description goes here</p>
                                    </div>
                                </div></a></div>
                            {/* <!-- end colored --> */}

                        </div>
                    </div>
                
        )
    }
};
export default Circle
