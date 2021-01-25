import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row} from 'react-bootstrap';
class FooterItem extends Component{
    render(){

        return(
            <Container fluid>
            <Row className="footer-styling">
            <Container>
                <p>All Copy Rights Reserved 2021</p>
                </Container>
            </Row>
            </Container>
        );
    }
}

export default FooterItem;