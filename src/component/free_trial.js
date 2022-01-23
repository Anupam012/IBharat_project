import React, {Component} from 'react';
import {  Link } from "react-router-dom";
import 'aos/dist/aos.css';







class FreeTrial  extends Component {


    render(){
        return(
            <div className="free_trial">
                <div className="container">
                    <h4 className="courses_title">Try Our Free Trial Courses</h4>
                    <Link className="courses_btn" to="#">Join Now</Link>
                </div>
            </div>
        );

        
    }

}
export default  FreeTrial;