import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 
import './CustomerNavBar.css';
import logo from '../assets/logo1.png'



function CustomerNavBar() {
  return (

    <section id="nav-bar">
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand hakikazi" href="#logo"><img src={logo} alt="hakuna picha"/>HAKIKAZI ADVOCATES</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        
        <li className="nav-item">
                              <Link to={'/createProfile'} className="nav-link">Add New User</Link>                            
        </li>
        <li className="nav-item">
                              <Link to={'/'} className="nav-link">Logout</Link>
        </li>
      </ul>
    </div>
        </nav>
      </Router>
  </section>
  );
}
export default  CustomerNavBar;