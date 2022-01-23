import React, {Component} from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';

import {  Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';







class ExperienceSec  extends Component {


    render(){
        return(
            <div className="experience_sec">
                <div className="container">
                    <h3 className="experience_title" data-aos="fade-right">20 Year Of Experience</h3>
                    <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 </div>
            </div>

            
        );

        
    }

}
export default  ExperienceSec;