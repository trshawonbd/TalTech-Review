import React from 'react';

const Review = (props) => {
    console.log(props.review)
    const {picture, name, ratings, review} = props.review
    return (
        <div className="col">
            <div className="card h-100">
                <img src={picture} alt=''/>
            
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <h4 className= "ratings">Rating:{ratings}</h4>
                    <p className="card-text">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;