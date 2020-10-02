import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Login from './Components/Login/Login'
import Customer from './Components/CustomerList/CustomerList';
import CreateProfile from './Components/Users/CreateProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar/Navbar';
import Slider from './Components/Slider/Slider';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import Team from './Components/Team/Team';
import Promo from './Components/Promo/Promo';
import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function MainWebsite() {
  return (
    <div className="App">

      <Navbar/>
      <Slider/>
      <About/>
      <Service/>
      <Team/>
      <Promo/>
      <Testimonial/>
      <Contact/>
      <Footer/>

    </div>
  );
}
function App() {
  return (
    <React.Fragment>
      <Router>  
        <Switch>
          <Route exact path='/createProfile' component={CreateProfile} /> 
          <Route exact path='/login' component={Login} /> 
          <Route exact path='/customer' component={Customer} /> 
          <Route path='/' component={MainWebsite} /> 
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
