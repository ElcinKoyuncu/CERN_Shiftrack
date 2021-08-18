import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Container'


const EmployeeWelcome = () => {
    return (
        <div>
            <Container fluid>
            <Row>
             <Col>Welcome!</Col>
            </Row>
            <Row>
             <Col>Today's Date</Col>
            </Row>
            <Row>
             <Col>Location</Col>
            </Row>
            </Container>
        </div>
        
    )
}

export default EmployeeWelcome;