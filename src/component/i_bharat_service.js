import React, {Component} from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';







class IBharatService  extends Component {


    render(){
        return(
            <div className="bharat_service">
                <div className="container">
                    <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-up">i-BHARAT SERVICE</h3>
                    <ListGroup>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/service_icon_one.png' alt="Service"/>
                            </div>
                            <div className="text_content">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Student</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/service_icon_two.png' alt="Service"/>
                            </div>
                            <div className="text_content">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">TEACHER</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/service_icon_three.png' alt="Service"/>
                            </div>
                            <div className="text_content">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">PARENTS</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/service_icon_four.png' alt="Service"/>
                            </div>
                            <div className="text_content">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">INDUSTRY</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/service_icon_five.png' alt="Service"/>
                            </div>
                            <div className="text_content">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">GOVERNMENT</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/service_icon_six.png' alt="Service"/>
                            </div>
                            <div className="text_content">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">i4I CENTER</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/service_icon_seven.svg' alt="Service"/>
                            </div>
                            <div className="text_content">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">EVENT</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/service_icon_eight.png' alt="Service"/>
                            </div>
                            <div className="text_content">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">KAUSHAL</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="dashboard_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/service_icon_nine.png' alt="Service"/>
                            </div>
                            <div className="text_content">
                                <h4 className="title text-uppercase font-weight-bold mt-3 text-center">EKLAVYA</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                 </div>
            </div>

            
        );

        
    }

}
export default  IBharatService;