import React, {Component} from 'react';

import {  Link } from "react-router-dom";
import 'aos/dist/aos.css';







class InitiavesService  extends Component {


    render(){
        return(
            <div className="initiaves_service">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" data-aos="fade-left">
                            <div className="service_sec">
                                <div className="service_photo">
                                   <img src="images/initiaves_service_photo_one.png" alt="Initiaves"/>
                                </div>
                                <div className="text_content">
                                   <h3 className="service_title"><span>Look At</span> Next Scheduled</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat vel morbi viverra pharetra lectus posuere </p>
                                   <Link className="view_btn" to="#">VIEW ALL</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" data-aos="fade-up">
                            <div className="service_sec">
                                <div className="service_photo">
                                   <img src="images/initiaves_service_photo_two.png" alt="Initiaves"/>
                                </div>
                                <div className="text_content">
                                   <h3 className="service_title"><span>Get Your</span> Education Equipment</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat vel morbi viverra pharetra lectus posuere </p>
                                   <Link className="view_btn" to="#">VIEW ALL</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" data-aos="fade-right">
                            <div className="service_sec">
                                <div className="service_photo">
                                   <img src="images/initiaves_service_photo_three.png" alt="Initiaves"/>
                                </div>
                                <div className="text_content">
                                   <h3 className="service_title"><span>Go to</span> Online Coures</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat vel morbi viverra pharetra lectus posuere </p>
                                   <Link className="view_btn" to="#">VIEW ALL</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        );

        
    }

}
export default  InitiavesService;