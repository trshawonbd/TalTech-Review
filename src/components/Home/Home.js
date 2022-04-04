import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewsContext } from '../../App';
import image from '../../assest/TalTech-I.jpg';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const context = useContext(ReviewsContext);
    const { reviews } = context
    const firstThree = reviews.slice(0, 3)
    const navigate = useNavigate();
    console.log(navigate)
    return (
        <div>
            <div className='d-md-flex align-items-center'>
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

            <h3 className='mt-5'>Reviews</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    firstThree.map((review) => <Review
                        key={review._id}
                        review={review}
                    ></Review>)

                }

            </div>

            <div>
                <button className='see-more-btn mt-3' onClick={() => navigate('/reviews')}>See More Review</button>
            </div>

        </div>

    );
};

export default Home;