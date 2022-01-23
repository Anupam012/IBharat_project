import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {  Link } from "react-router-dom";
import 'aos/dist/aos.css';







class InitiavesCourses  extends Component {


    render(){
        return(
            <div className="initiaves_courses">
                <div className="container">

                    <h3 className="title">Available Courses</h3>
                    <p>It gives us the potential to do something different, challenge the way that people behave and change</p>
                    <div className="initiaves_content">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12" data-aos="fade-left">
                                <div className="courses_sec">
                                    <div className="courses_photo">
                                    <img src="images/courses_photo_1.png" alt="Courses"/>
                                    </div>
                                    <div className="text_content">
                                        <span>Free</span>
                                        <h3 className="courses_title"> Designing Meaningful Tattoos</h3>
                                        <ListGroup className="bottom_sec">
                                            <ListGroupItem tag="a" href="#"><img src="images/lessons_icon.svg" alt="Lessons"/>8 Lessons</ListGroupItem>
                                            <ListGroupItem tag="a" href="#"><img src="images/user_icon.svg" alt="User"/>36</ListGroupItem>
                                        </ListGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12" data-aos="fade-up">
                                <div className="courses_sec">
                                    <div className="courses_photo">
                                        <img src="images/courses_photo_2.png" alt="Courses"/>
                                    </div>
                                    <div className="text_content">
                                        <span>Free</span>
                                        <h3 className="courses_title">Become a PHP Master and Make Money Fast</h3>
                                        <ListGroup className="bottom_sec">
                                            <ListGroupItem tag="a" href="#"><img src="images/lessons_icon.svg" alt="Lessons"/>8 Lessons</ListGroupItem>
                                            <ListGroupItem tag="a" href="#"><img src="images/user_icon.svg" alt="User"/>36</ListGroupItem>
                                        </ListGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12" data-aos="fade-down">
                                <div className="courses_sec">
                                    <div className="courses_photo">
                                        <img src="images/courses_photo_3.png" alt="Courses"/>
                                    </div>
                                    <div className="text_content">
                                        <span>Free</span>
                                        <h3 className="courses_title">Spanish for Beginners to Advanced Training</h3>
                                        <ListGroup className="bottom_sec">
                                            <ListGroupItem tag="a" href="#"><img src="images/lessons_icon.svg" alt="Lessons"/>8 Lessons</ListGroupItem>
                                            <ListGroupItem tag="a" href="#"><img src="images/user_icon.svg" alt="User"/>36</ListGroupItem>
                                        </ListGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12" data-aos="fade-right">
                                <div className="courses_sec">
                                    <div className="courses_photo">
                                        <img src="images/courses_photo_4.png" alt="Courses"/>
                                    </div>
                                    <div className="text_content">
                                        <span>Free</span>
                                        <h3 className="courses_title">Graphic Illustration: Design with Color</h3>
                                        <ListGroup className="bottom_sec">
                                            <ListGroupItem tag="a" href="#"><img src="images/lessons_icon.svg" alt="Lessons"/>8 Lessons</ListGroupItem>
                                            <ListGroupItem tag="a" href="#"><img src="images/user_icon.svg" alt="User"/>36</ListGroupItem>
                                        </ListGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link className="courses_btn" to="#">VIEW ALL COURSES</Link>
                    </div>
                 </div>
            </div>
        );

        
    }

}
export default  InitiavesCourses;