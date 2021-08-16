import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function Clock() {

    const clockStart = React.useRef(null);

    const handleSubmitIn = e => {
        e.preventDefault();
        alert(clockStart.current.value);
        console.log('Clocked in at '+ clockStart.current.value)
    };

    // const renderClockIn = <h5>'Clocked in at' + {clockStart.current.value}</h5>;

    const clockEnd = React.useRef(null);

    const handleSubmitOut = e => {
        e.preventDefault();
        alert(clockEnd.current.value);
        console.log('Clocked out at '+ clockEnd.current.value)
    };

    // const renderClockOut = <h5>'Clocked out at' + {clockEnd.current.value}</h5>;


    return (
        <div className="" class="">
        <Container>
            <Row className="justify-content-md-center">
            <Col>
                <Card class="clockIn" title="Start of Day" style={{ width: 300 }}>
                    
                <Form onSubmit={handleSubmitIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Clock In</Form.Label>
                        <Form.Control type="time" placeholder="Enter HH:MM" ref={clockStart}/>
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
                </Form>
                {/* <h5>{renderClockIn}</h5> */}
                </Card>

            </Col>
            
            <Col>
                <Card class="clockOut" title="End of Day" style={{ width: 300 }}>
                    <p>
                    <Form onSubmit={handleSubmitOut}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Clock Out</Form.Label>
                        <Form.Control type="time" placeholder="Enter HH:MM" ref={clockEnd} />
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
                    {/* <h5>{renderClockOut}</h5> */}
                        
                    </p>
                </Card>
            </Col>
            </Row>
        </Container>  
        </div>

    );
}
  
export default Clock;