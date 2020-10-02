import React from 'react';
import './Team.css';
import team1 from '../assets/samwel.jpeg';

 function Team() {
  return (
    <section id="team">
        <div className="container">
            <h1>Our Team</h1>
            <div className="row">
                <div className="col-md-3 profile-pic text-center">
                    <div className="img-box">
                        <img src={team1} alt="hakuna picha" className="img-responsive"/>
                        <ul>
                            <a rel='noreferrer noopener' href="https://web.facebook.com/Programming-with-CodeX2020-101471344786320/" target="_blank" ><li><i className="fa fa-facebook"></i></li></a>
                            <a href=""><li><i className="fa fa-twitter"></i></li></a>
                            <a href=""><li><i className="fa fa-linkedin"></i></li></a>
                        </ul>
                    </div>
                    <h2>Samwel Mchomvu</h2>
                    <h3>General Counsel and Chief Legal Officer </h3>
                </div>

                <div className="col-md-3 profile-pic text-center">
                    <div className="img-box">
                        <img src={team1} alt="hakuna picha" className="img-responsive"/>
                        <ul>
                            <a rel='noreferrer noopener' href="https://web.facebook.com/Programming-with-CodeX2020-101471344786320/" target="_blank" ><li><i className="fa fa-facebook"></i></li></a>
                            <a href=""><li><i className="fa fa-twitter"></i></li></a>
                            <a href=""><li><i className="fa fa-linkedin"></i></li></a>
                        </ul>
                    </div>
                    <h2>Samwel Mchomvu</h2>
                    <h3>Criminal Lawyer </h3>
                </div>
                <div className="col-md-3 profile-pic text-center">
                    <div className="img-box">
                        <img src={team1} alt="hakuna picha" className="img-responsive"/>
                        <ul>
                            <a rel='noreferrer noopener' href="https://web.facebook.com/Programming-with-CodeX2020-101471344786320/" target="_blank" ><li><i className="fa fa-facebook"></i></li></a>
                            <a href=""><li><i className="fa fa-twitter"></i></li></a>
                            <a href=""><li><i className="fa fa-linkedin"></i></li></a>
                        </ul>
                    </div>
                    <h2>Samwel Mchomvu</h2>
                    <h3>Employment Lawyer </h3>
                </div>
                <div className="col-md-3 profile-pic text-center">
                    <div className="img-box">
                        <img src={team1} alt="hakuna picha" className="img-responsive"/>
                        <ul>
                            <a rel='noreferrer noopener' href="https://web.facebook.com/Programming-with-CodeX2020-101471344786320/" target="_blank" ><li><i className="fa fa-facebook"></i></li></a>
                            <a href=""><li><i className="fa fa-twitter"></i></li></a>
                            <a href=""><li><i className="fa fa-linkedin"></i></li></a>
                        </ul>
                    </div>
                    <h2>Samwel Mchomvu</h2>
                    <h3>Estate Planning Lawyer </h3>
                </div>

            </div>
        </div>

    </section>
  );
}
export default Team;