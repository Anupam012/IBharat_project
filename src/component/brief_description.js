import React, {Component} from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';







class BriefDescription  extends Component {


    render(){
        return(
            <div className="brief_description">
                <div className="container">
                  
                    <div className="brief_contain d-flex align-items-start">
                        <div className="brief_photo mr-5"  data-aos="fade-left">
                            <img src='images/brief_photo.png' alt="Brief"/>
                        </div>
                        <div className="text_contain" data-aos="fade-right">
                            <h3 className="blog_title  font-weight-bold pb-3" data-aos="fade-up">BRIEF DESCRIPTION i-BHARAT  </h3>
                            <p className="description">Education", says Aristotle, “is the creation of a sound mind in a sound body". It encompasses in itself the all-round development of an individual. The aim of education has been categorized variously by different scholars. Herbert Spencer believed in the 'complete-living aim’ which signifies that education should prepare the children for life. Rousseau and Mahatma Gandhi also supported the view as they believed in the complete development or perfection of nature. Education provides a progressive development of innate abilities that creates good citizens. </p>
                            <BrowserRouter>
                                <Link className="more_btn mt-4" to="#">Read More</Link>
                            </BrowserRouter>
                         
                        </div>

                    </div>

                   
                 </div>
            </div>

            
        );

        
    }

}
export default  BriefDescription;