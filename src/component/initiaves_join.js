import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import CountUp from 'react-countup';
import {  Link } from "react-router-dom";
import 'aos/dist/aos.css';







class InitiavesJoin  extends Component {


    render(){
        return(
            <div className="initiaves_join">
                <div className="container">
                <ListGroup>
                    <ListGroupItem>
                        <div className="join_contain" data-aos="fade-right">
                            <h4 className="title">Graduates</h4>
                            <div className="icon">
                                <img src="images/graduates_icon.png" alt="Graduates"/>
                            </div>
                            <CountUp className="count"
                                start={30}
                                end={260}
                                duration={10.75}
                                separator=" "
                                decimal=","
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                             />
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="join_contain"  data-aos="fade-top">
                            <h4 className="title">Students</h4>
                            <div className="icon">
                                <img src="images/student_icon.png" alt="Students"/>
                            </div>
                            <CountUp className="count"
                                start={47}
                                end={345}
                                duration={10.75}
                                separator=" "
                                decimal=","
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                             />
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="join_contain"  data-aos="fade-down">
                            <h4 className="title">Courses</h4>
                            <div className="icon">
                                <img src="images/courses_icon.png" alt="Courses"/>
                            </div>
                            <CountUp className="count"
                                start={4}
                                end={35}
                                duration={10.75}
                                separator=" "
                                decimal=","
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                            />
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="join_contain"  data-aos="fade-left">
                            <h4 className="title">Teachers</h4>
                            <div className="icon">
                                <img src="images/teacher_icon.png" alt="Teachers"/>
                            </div>
                            <CountUp className="count"
                                start={2}
                                end={16}
                                duration={10.75}
                                separator=" "
                                decimal=","
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                            />
                        </div>
                    </ListGroupItem>
                </ListGroup>
                    
                </div>
            </div>
        );

        
    }

}
export default  InitiavesJoin;