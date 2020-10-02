import React, { Component } from 'react'
import axios from 'axios';
import './Contact.css';
class Contact extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name:'',
        phone:'',
        email:'',
        message:''
     }
   }
   changeHandler = (e)=>{
     this.setState({[e.target.name]:e.target.value})
   }

   submitHandler =(e)=>{
     e.preventDefault()
      // console.log(this.state)
      axios.post('http://localhost:5000/customer', this.state)
      .then(response=>{
        console.log(response)
      })
      .catch(error=>{
        console.log('failed')
      })
   }
    
    render() {
      const {name,phone,email,message} = this.state
        return (
          <section id="contact">
            <div className="container">
              <h1>Get In Touch</h1>
              <div className="row">
                <div className="col-md-6">
                  <form  onSubmit={this.submitHandler} className="contact-form" >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required="required"
                        value={name}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        name="phone"
                        min="0"
                        className="form-control"
                        placeholder="Phone Number"
                        required="required"
                        value={phone}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required="required"
                        value={email}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="4"
                        placeholder="Message"
                        required="required"
                        value={message}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
                <div className="col-md-6 contact-info">
                  <div className="follow">
                    <b>Address:</b> <i className="fa fa-map-marker"></i> P.o.Box 33318
                    Dar es Salaam Tanzania
                  </div>
                  <div className="follow">
                    <b>Phone Number:</b>
                    <i className="fa fa-phone"></i> +255 758 139619
                  </div>
                  <div className="follow">
                    <b>Email:</b>
                    <i className="fa fa-envelope-o"></i> samwelnm4@gmail.com
                  </div>
                  <div className="follow">
                    <label>
                      <b>Get Social:</b>
                    </label>
                    <a href="">
                      <i className="fa fa-facebook"></i>{" "}
                    </a>
                    <a href="">
                      <i className="fa fa-youtube-play"></i>{" "}
                    </a>
                    <a href="">
                      <i className="fa fa-twitter"></i>{" "}
                    </a>
                    <a href="">
                      <i className="fa fa-google-plus"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}
export default Contact;