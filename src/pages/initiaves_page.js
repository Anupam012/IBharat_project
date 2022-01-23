
import React, {Component} from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

  
  import { BrowserRouter, Link } from "react-router-dom";

import NavMenu from '../component/nav_header.js';
import InitiavesBanner from '../component/initiaves_banner.js';
import InitiavesService from '../component/initiaves_service.js';
import ExperienceSec from '../component/experience_sec.js';
import InitiavesCourses from '../component/initiaves_courses.js';
import InitiavesJoin from '../component/initiaves_join.js';
import FreeTrial from '../component/free_trial.js';
import InitiavesEvent from '../component/initiaves_event.js';
import JoinSec from '../component/join_sec.js';
import FooterSec from '../component/footer_sec.js';








class InitiavesPage extends Component {

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
            <div className={this.state.i_bharat_page ? "i_bharat_page initiaves_page" : "i_bharat_page initiaves_page active"} onClick={this.toggle.bind(this)} style={{background:`url('/images/i-bharat_bg.svg')`,}}>
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
              
               <InitiavesBanner/>
               <InitiavesService/>
               <ExperienceSec/>
               <InitiavesCourses/>
               <InitiavesJoin/>
               <FreeTrial/>
               <InitiavesEvent/>
               <JoinSec/>
               <FooterSec/>

            </div>
        );

        
    }

}
export default  InitiavesPage;