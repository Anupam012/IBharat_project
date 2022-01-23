import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {  Link } from "react-router-dom";
import 'aos/dist/aos.css';







class InitiavesEvent  extends Component {


    render(){
        return(
            <div className="initiaves_event">
                <div className="container">

                    <h3 className="title">Events</h3>
                    <p>Upcoming Education Events to feed your brain.</p>
                    <div className="event_content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" data-aos="fade-left">
                                <div className="event_sec">
                                    <div className="event_photo">
                                        <img src="images/event_photo_one.png" alt="Event"/>
                                    </div>
                                    <div className="text_content">
                                        <span className="date">8Aug</span> 
                                        <h3 className="event_title">Intern Bootcamp Meetup 2021</h3>
                                        <ListGroup className="time_location">
                                            <ListGroupItem>
                                                <img src="images/clock_icon.svg" alt="Clock"/>12 : 00AM - 5:00 PM 
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <img src="images/location_icon.svg" alt="User"/>Your location here
                                            </ListGroupItem>
                                        </ListGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" data-aos="fade-left">
                                <div className="event_sec">
                                    <div className="event_photo">
                                        <img src="images/event_photo_two.png" alt="Event"/>
                                    </div>
                                    <div className="text_content">
                                        <span className="date">8Aug</span> 
                                        <h3 className="event_title">Intern Bootcamp Meetup 2021</h3>
                                        <ListGroup className="time_location">
                                            <ListGroupItem>
                                                <img src="images/clock_icon.svg" alt="Clock"/>12 : 00AM - 5:00 PM 
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <img src="images/location_icon.svg" alt="User"/>Your location here
                                            </ListGroupItem>
                                        </ListGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        );

        
    }

}
export default  InitiavesEvent;