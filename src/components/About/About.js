import React from 'react';
import image from '../../assest/about.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <div classname="row row-cols-1 row-cols-md-1">
                <div classname="col">
                    <div classname="card">
                        <img src={image} classname="card-img-top" alt="..." />
                        <div classname="card-body">
                            <h5 classname="card-title">Md Taibur Rahman</h5>
                            <p classname="card-text">Email: trshawonbd@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;