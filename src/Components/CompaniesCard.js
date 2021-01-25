import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card,Container, Row, Col } from 'react-bootstrap';
import './CompaniesCard.css';
import Data from '../company_collection.json';
import ShowMoreText from 'react-show-more-text';
class CompaniesCard extends Component{
    render(){

        return(
            <Container fluid>
            <Row className="padd-15">

                                {
                    Data.map(post=>{
                    return(
                        <Col lg="6" md="6">
                        <Card>
                      <Card.Body className="card-styling">
                    <h1><strong>Name of Company</strong>{post.name}</h1>
                    <h3><strong>Founded In : </strong>{post.founded}</h3>
                    <h4><strong>Company URL: </strong> {post.url}</h4>
                    <h5><strong>Company HeadQuarters:</strong> {post.headquarters}</h5>
                    <h6><strong>Company Industry: </strong>{post.industry_label}</h6>
                    <ShowMoreText
                /* Default options */
                lines={3}
                more='Show more'
                less='Show less'
                className='content-css'
                anchorClass='my-anchor-css-class'
                onClick={this.executeOnClick}
                expanded={false}
                width={280}
            >
            <strong>Company Description: </strong>{post.description}
            </ShowMoreText>
                    </Card.Body>
          </Card>
              </Col>
                    )
                    })
                    }

            </Row>
          </Container>

        );
    }
}

export default CompaniesCard;