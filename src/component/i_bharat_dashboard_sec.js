import React, {Component} from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';







class IBharatDashboardSec  extends Component {


    render(){
        return(
            <div className="i_bharat_dashboard_sec">
                <div className="container">
                    <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-up">i-BHARAT DASHBOARD </h3>
                    <ListGroup>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid border-0"  data-aos="fade-left">
                            <div className="top_sec">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Vidyarambh</h4>
                                <div className="icon">
                                    <img src='images/dashboard_icon_one.png' alt="Dashboard"/>
                                </div>
                            </div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                            
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid health_grid border-0" data-aos="fade-up">
                            <div className="top_sec">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">i-HEALTH</h4>
                                <div className="icon">
                                    <img src='images/dashboard_icon_two.png' alt="Dashboard"/>
                                </div>
                            </div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid border-0" data-aos="fade-up">
                            <div className="top_sec">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">i-SANSTHAN</h4>
                                <div className="icon">
                                    <img src='images/dashboard_icon_three.png' alt="Dashboard"/>
                                </div>
                            </div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid health_grid border-0" data-aos="fade-up">
                            <div className="top_sec">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">i-CONNECT</h4>
                                <div className="icon">
                                    <img src='images/dashboard_icon_four.png' alt="Dashboard"/>
                                </div>
                            </div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid border-0" data-aos="fade-up">
                            <div className="top_sec">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">i-FAMILY</h4>
                                <div className="icon">
                                    <img src='images/dashboard_icon_five.png' alt="Dashboard"/>
                                </div>
                            </div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                        </ListGroupItem>
                       
                    </ListGroup>
                 </div>
            </div>

            
        );

        
    }

}
export default  IBharatDashboardSec;