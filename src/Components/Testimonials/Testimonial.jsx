import React from 'react';
import './Testimonial.css';
import image from '../assets/samwel.jpeg';
 function Testimonial() {
  return (
    <section id="testimonials">
        <div className="container">
            <h1>Testimonials</h1>
            <p className="text-center">Some of our customers</p>
            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="profile">
                        <img src={image} alt="hakuna picha" className="user"/>
                        <blockquote>
                            <p>Hakikazi has a great team, they have been helping our Comapany in all matter related to law, we realy recommend other people and company to try them</p>
                            </blockquote>
                        <h3>Samwel Mchomvu<span> Co-Founder</span></h3>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="profile">
                        <img src={image} alt="hakuna picha" className="user"/>
                        <blockquote>
                            <p>Hakikazi has a great team, they have been helping our Comapany in all matter related to law, we realy recommend other people and company to try them</p>
                            </blockquote>
                        <h3>Samwel Mchomvu<span> Co-Founder</span></h3>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="profile">
                        <img src={image} alt="hakuna picha" className="user"/>
                        <blockquote>
                            <p>Hakikazi has a great team, they have been helping our Comapany in all matter related to law, we realy recommend other people and company to try them</p>
                            </blockquote>
                        <h3>Samwel Mchomvu<span> Co-Founder</span></h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Testimonial;