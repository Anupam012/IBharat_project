import React, {Component} from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialsSlider from './testimonials_slider.js'






class TestimonialsSec  extends Component {


    render(){
        return(
            <div className="testimonials_sec">
                
                <div className="container testimonials_wrapper" data-aos="fade-down">
                    <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-up">i-BHARAT TESTIMONIALS</h3>
                    <div className="testimonials_contain" data-aos="fade-right">
                        <TestimonialsSlider/>
                    </div>
                 </div>
            </div>

            
        );

        
    }

}
export default  TestimonialsSec;