import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { TimePicker } from 'antd';
import moment from 'moment';
import React from 'react';


<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />;

  
export default class Clock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // timeIn: props.timeIn,
            // timeOut: props.timeOut,
            startShift: null,
            endShift: null,
        }
    }


    render() {

        function onChangeIn(time, timeString) {
            console.log(time, timeString);
            // const timeIn = timeString;
        }
      
        function onChangeOut(time, timeString) {
          console.log(time, timeString);
        //   const timeOut = timeString;
        }
        
        // const timeIn = onChangeIn.timeString;

        // const timeOut = onChangeOut.timeString;
      
        return (
          <center> 
          <Container>
              <Row className="justify-content-md-center">
                  <Col>
                      <Card className="clockIn" title="Start of Day" style={{ width: 300 }}>
                          
                      <Form>
                          <Row>
                              <Col>
                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                      <Form.Label>Clock In</Form.Label>
                                      <div>
                                          <TimePicker onChange={onChangeIn} value={this.state.startShift} />
                                      </div>
                                      <Form.Text className="text-muted">
                                      Select clock for time options
                                      </Form.Text>
                                  </Form.Group>
                              </Col>
                          </Row>
                          <Row>
                              <Col>
                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                      <Form.Label>Clock Out</Form.Label>
                                      <div>
                                          <TimePicker onChange={onChangeOut} defaultValue={moment('00:00:00', 'HH:mm:ss')}/>
                                      </div>
                                      <Form.Text className="text-muted">
                                          Select clock for time options
                                      </Form.Text>
                                  </Form.Group>
                              </Col>
                          </Row>
                      </Form>
                      {/* <h5>You clocked in at and clocked out at . Today you worked hours</h5> */}
                      </Card>
      
                  </Col>
              
              </Row>
          </Container>  </center> 
          
        )
    }
}