import React, { Component } from 'react';
import axios from 'axios'
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  
import './Login.css'
class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
        
    }
    changeHandler = (e) =>{
        
        this.setState({[e.target.name]:e.target.value });
    }
    onSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/user/login', this.state)
        .then(response =>{
            if(response.status === 200){
                this.props.history.push('/customer')
                
            }else{
                const error = new Error(response.error);
                throw error;
            }
        })
        .catch(err=>{
            console.error(err);
            alert('Ooops! Login failed please check your email and password, then try again')
        })
    }
    render() {
        return (
            <div className="app flex-row align-items-center">
            <Container className="container">
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form  onSubmit={this.onSubmit} className="login-form">
                                    <h1>Login Form</h1>
                                    <InputGroup className="mb-3">
                                        <Input type="email" 
                                        name="email" 
                                        required="required"
                                        placeholder="email"
                                        value={this.state.email }
                                        onChange={this.changeHandler}
                                        />
                                    </InputGroup>
                                    
                                    <InputGroup className="mb-3">
                                        <Input type="password" 
                                        name="password" 
                                        required="required"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.changeHandler}
                                        />
                                    </InputGroup> 
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <Button type="submit"  className="btn btn-info mb-1" block><span>Login</span>
                                                </Button>
                                                <a href="/">Home</a>
                                            </Col>
                                        </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
        )
    }
}
export default Login;