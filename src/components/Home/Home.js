import React from 'react';
import image from '../../assest/TalTech-I.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='d-flex align-items-center'>
            <div className="info d-flex-column ">
                <div className="title-part">
                <h2 className='title'>Your Future University</h2>
                <h4 className='Name'>TALTECH</h4>
                </div>
                <p className='description'>Established in 1918, Tallinn University of Technology is the only technical university in Estonia. TalTech, in the capital city of Tallinn, is a university for engineering, business, public administration and maritime affairs. TalTech has colleges in Tartu and Kohtla-Järve.</p>
                <div>
                <button className='live-btn'>Live View</button>
            </div>
            </div>
            <div className="img-university">
                <img className='img-fluid' src={image} alt="" srcset="" />
            </div>

        </div>
    );
};

export default Home;