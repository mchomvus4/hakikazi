import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../assets/logo1.png'



function Navbar() {
  return (

    <section id="nav-bar">
   
    <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand hakikazi" href=""><img src={logo} alt="hakuna picha"/>HAKIKAZI ADVOCATES</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        {/* <li className="nav-item">
         <a className="nav-link" href="">home</a>
                
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="#about">about us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team">our team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonials">testimonials</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#contact">contact</a>
            </li>
            
            {/* <li className="nav-item">
              <a className="nav-link" href="/login">login</a>
              
         </li> */}
    
        
      </ul>
    </div>
        </nav>
      
  </section>
  );
}
export default  Navbar;