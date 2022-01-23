
import React, {Component} from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

  
  import { BrowserRouter, Link } from "react-router-dom";

import NavMenu from '../component/nav_header.js';
import Banner from '../component/banner.js';
import IBharatDashboardSec from '../component/i_bharat_dashboard_sec.js';
import BriefDescription from '../component/brief_description.js';
import IBharatService from '../component/i_bharat_service.js';
import TestimonialsSec from '../component/testimonials_sec.js';
import ContactSec from '../component/contact_sec.js';
import FooterSec from '../component/footer_sec.js';






class Home extends Component {

    /* On Scroll Js */
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 10) {
          document.querySelector(".header_sec").className = "header_sec sticky"
        } else {
          document.querySelector(".header_sec").className = "header_sec";
        }
      };


      /* Toggle Js */
    constructor(props) {
        super();

        this.state = {
            i_bharat_page : true,
        };
    }
    toggle() {
        this.setState({ i_bharat_page: !this.state.i_bharat_page});
    }



    render(){
        
        return(
            <div className={this.state.i_bharat_page ? "i_bharat_page" : "i_bharat_page  active"}   onClick={this.toggle.bind(this)} style={{background:`url('/images/i-bharat_bg.svg')`,}}>
                <div className="header_sec border-top border-white" onScroll={ this.handleScroll }>
                    <div className="container">
                        <BrowserRouter>
                            <Link className="i_bharat_logo" to="#">
                                <img src="images/i-bharat-logo.png" alt="i bharat logo"/>
                            </Link>
                        </BrowserRouter>
                    
                        <NavMenu/>

                        <BrowserRouter>
                            <Link className="toggle_btn" to="#">
                                <span>&nbsp;</span>
                                <span>&nbsp;</span>
                                <span>&nbsp;</span>
                            
                            </Link>
                        </BrowserRouter>
                    </div>
                </div>
              
               <Banner/>
               <IBharatDashboardSec/>
               <BriefDescription/>
               <IBharatService/>
               <TestimonialsSec/>
               <ContactSec/>
               <FooterSec/>

            </div>
        );

        
    }

}
export default  Home;