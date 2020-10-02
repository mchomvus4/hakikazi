import React from 'react'
import axios from 'axios'
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
// import jsPDF from 'jspdf'
import {useState, useEffect} from  'react'
import CustomerNavBar from '../CustomerNavBar/CustomerNavBar';

 function CustomerList(props) {
     const [data, setData] = useState([]);
     useEffect(()=>{
         const getData =async()=>{
             const result = await axios('http://localhost:5000/customer');
             setData(result.data)
         };
         getData();
     },[]);
     const deleteProfile =(id)=>{
         debugger;
         axios.delete('http://localhost:5000/customer/' +id)
         .then((result)=>{
             props.history.push('/')
         });
     };
    
    return (
        <div className="annimated fadeIn">
           <CustomerNavBar/>
            <Row>
                <Col>
                <Card>
                    <CardHeader>
                            <i className="fa fa-align-justify">Customer List</i>       
                    </CardHeader>
                    <CardBody>
                        <Table hover bordered striped responsive size="sm">
                            <thead>
                                <tr>
                                    <th>S/No</th>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                     <th>Email Address</th>
                                        <th>Message</th>
                                        <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index)=>{
                                        return<tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.email}</td>
                                            <td>{item.message}</td>
                                            <td>{item.createdAt}</td>
                                            <td>
                                                <div className="btn-group">
                                                    <button className="btn btn-danger" onClick={()=>{
                                                        deleteProfile(item.id)
                                                    }}>Delete</button>

                                                   
                                                </div>
                                            </td>
                                        </tr>

                                    })
                                }
                            </tbody>
                        </Table>

                    </CardBody>
                </Card>
                </Col>
            </Row>
            
        </div>
    )
}
export default CustomerList;