import React, {Component} from 'react';

import { BrowserRouter, Link } from "react-router-dom";


class InitiavesBanner extends Component {
    render(){
        return(
            <div className="initiaves_banner"  onScroll={ this.handleScroll }>
                <div className="container">
                    <h3 className="banner_title font-weight-bold">Contact more student in a better way</h3>
                    <div className="banner_photo">
                        <img src="images/initiaves_banner_photo.svg" alt="Initiaves"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default  InitiavesBanner;