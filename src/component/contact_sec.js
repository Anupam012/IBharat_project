import React, {Component} from 'react';

import {Container, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import { BrowserRouter, Link } from "react-router-dom";
import 'aos/dist/aos.css';

class ContactSec extends Component {


    render(){
       
        return(
            <React.Fragment>
            <div className="contact_sec" >
                <Container data-aos="fade-down">
                    <div className="address_sec">
                        <ListGroup>
                            <ListGroupItem>
                                <span>Phone No. </span>
                                <BrowserRouter>
                                    <Link to="#">9586331526</Link>
                                </BrowserRouter>
                            </ListGroupItem>
                            <ListGroupItem>
                            <span>Email Id.</span> 
                                <BrowserRouter>
                                    <Link to="#">company@gmail.com</Link>
                                </BrowserRouter>
                            </ListGroupItem>

                            <ListGroupItem> 
                                <span>Address.</span> 4074  Lang Avenue, Salt Lake City
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                    <div className="form_sec" >
                        <h4 className="contact_title">Contact Us</h4>
                        <Form className="contact_form">
                            <FormGroup>
                                <Label>Name</Label>
                                <Input class="form-control" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input  class="form-control" type="email" name="mail"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Phone</Label>
                                <Input  class="form-control" type="number" name="number"/>
                            </FormGroup>
                            <button className="submit_btn">Submit</button>
                        </Form>
                    </div>
                </Container>
            </div>
        </React.Fragment>
            
        );

        
    }

}
export default  ContactSec;