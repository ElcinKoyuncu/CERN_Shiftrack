import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'


const EmployeeWelcome = () => {
    return (
        <div>
            <ListGroup>
            <ListGroup.Item>Welcome Employee</ListGroup.Item>
            <ListGroup.Item>Today's Date</ListGroup.Item>
            <ListGroup.Item>Location</ListGroup.Item>
            </ListGroup>
        </div>
        
    )
}

export default EmployeeWelcome;