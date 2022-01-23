import React, {Component} from 'react';
import {  Link } from "react-router-dom";
import 'aos/dist/aos.css';







class JoinSec  extends Component {


    render(){
        return(
            <div className="join_sec">
                <div className="container">
                    <h4 className="join_title">350+ People already Joined to our club, it’s the first step</h4>
                    <Link className="join_btn" to="#">Join Now</Link>
                </div>
            </div>
        );

        
    }

}
export default  JoinSec;