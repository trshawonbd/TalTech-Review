import React from 'react';
import image from '../../assest/about.jpg'
import './About.css'

const About = () => {
    return (
 
            <div classname="card mb-3">
  <div classname="row g-0">
    <div classname="col-md-4 mh">
      <img src={image} classname="img-fluid rounded-start" alt="..."/>
    </div>
    <div classname="col-md-8">
      <div classname="card-body">
        <h5 classname="card-title">Card title</h5>
        <p classname="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       
      </div>
    </div>
  </div>
</div>
      
    );
};

export default About;