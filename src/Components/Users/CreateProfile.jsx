import React ,{useState}from 'react'
import axios from 'axios'
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row, } from 'reactstrap';


 function CreateProfile(props) {
     const [profile , setProfile] = useState({firstname:'', lastname:'',email:'',password:''});
     const apiUrl = "http://localhost:5000/user/signup";

     const insertProfile =(e)=>{
         e.preventDefault();
         debugger;
         const data = {firstname:profile.firstname, lastname:profile.lastname, email:profile.email,password:profile.password };
         axios.post(apiUrl, data)
         .then((result)=>{
             props.history.push('/login')
         });
     };
     const onChange =(e)=>{
         e.persist();
         debugger;
         setProfile({...profile,[e.target.name]:e.target.value});
     }

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={insertProfile}>
                                    <h1>Create User Profile</h1>
                                    
                                     <InputGroup className="mb-3">
                                        <Input type="text" 
                                        name="firstname" 
                                        required="required"
                                        placeholder="Write First Name"
                                        value={profile.firstname}
                                        onChange={onChange}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" 
                                        name="lastname" 
                                        required="required"
                                        placeholder="Write Last Name"
                                        value={profile.lastname}
                                        onChange={onChange}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="email"
                                        name="email"
                                        required="required"
                                        placeholder='Write Email'
                                        value={profile.email}
                                        onChange={onChange}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text"
                                        name="password"
                                        required="required"
                                        placeholder='Write Password'
                                        value={profile.password}
                                        onChange={onChange}/>
                                    </InputGroup>
                                    
                                    
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <Button type="submit" className="btn btn-info mb-1" block><span>Save</span>

                                                </Button>
                                            </Col>
                                            {/* <Col xs="12" sm="6">
                                                <Button className="btn btn-danger mb-1" block><span>Cancel</span>

                                                </Button>
                                            </Col> */}

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
export default CreateProfile