// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

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

//   const d1 = formData.clockin; //"now"
//   const d2 = formData.clockout;  // some date
//   const diff = Math.abs(d2-d1);  // difference in milliseconds

  return (
      
    <Container>
        <Row className="justify-content-md-center">
            <Col>
                <Card class="clockIn" title="Start of Day" style={{ width: 300 }}>
                    
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col>
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
                        </Col>
                    </Row>
                </Form>
                <h5>You clocked in at {formData.clockin} and clocked out at {formData.clockout}. Today you worked { Math.abs(formData.clockin-formData.clockout)} hours</h5>
                </Card>

            </Col>
        
        </Row>
    </Container>  
    
  )
};

  
export default Clock;