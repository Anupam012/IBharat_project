import React, {Component} from 'react';

import { BrowserRouter, Link } from "react-router-dom";


class Banner extends Component {
    render(){
        return(
            <div className="banner"  onScroll={ this.handleScroll }>
                <div className="i-bharat-banner font-weight-bold banner-photo overflow-hidden" style={{background:`url('/images/banner_photo.png')`,}}>
                    <div className="container">
                        <div className="text_content">
                            <h3 className="banner_title pb-2 mb-3">i-Bharat</h3>
                            <h5 className="education font-weight-bold pb-3">i-Bharat One Education Platform</h5>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                            <BrowserRouter>
                                <Link className="more" to="#">Read More</Link>
                            </BrowserRouter>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default  Banner;