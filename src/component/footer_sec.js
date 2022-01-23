import React, {Component} from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';







class FooterSec  extends Component {


    render(){
        return(
            <div className="footer_sec">
                <div className="container">
                    <ListGroup>
                        <ListGroupItem tag="a" href="#">Tutorials</ListGroupItem>
                        <ListGroupItem tag="a" href="#">About</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Privacy Policy</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Cancellation/Refund Policy</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Faq</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Terms Of Sevice</ListGroupItem>
                    </ListGroup>
                 </div>
            </div>

            
        );

        
    }

}
export default  FooterSec;