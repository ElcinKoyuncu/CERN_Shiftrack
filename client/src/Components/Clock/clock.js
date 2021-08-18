// import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
// import './index.css';

function Clock() {

  const clockingData = Object.freeze({
    clockin: "",
    clockout: ""
  });

  
  const [formData, updateFormData] = React.useState(clockingData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    
  };

  return (
    <Container>
        <Row className="justify-content-md-center">
            <Col>
                <Card class="clockIn" title="Start of Day" style={{ width: 300 }}>
                    
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Clock In</Form.Label>
                        <Form.Control type="time" placeholder="Enter HH:MM" name="clockin" onChange={handleChange}/>
                        <Form.Text className="text-muted">
                        Select clock for time options
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me in" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Clock Out</Form.Label>
                        <Form.Control type="time" placeholder="Enter HH:MM" name="clockout" onChange={handleChange} />
                        <Form.Text className="text-muted">
                            Select clock for time options
                        </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                </Form>
                <h5>You clocked in at {formData.clockin} and clocked out at {formData.clockout}</h5>
                </Card>

            </Col>
        
        </Row>
    </Container>  
    
  )
};

  
export default Clock;