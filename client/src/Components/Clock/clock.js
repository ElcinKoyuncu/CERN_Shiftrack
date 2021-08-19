// import './App.css';
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
            clock: {
                timeIn: props.timeIn,
                timeOut: props.timeOut
            }
        }
    }

    handleClockInChanged(event) {
        var clock        = this.state.clock;
        clock.timeIn  = this.state.clock.timeIn;
    
        this.setState({ clock: clock });
    }

    handleClockOutChanged(event) {
        var clock        = this.state.clock;
        clock.timeOut  = this.state.clock.timeOut;
    
        this.setState({ clock: clock });
    }

    handleSubmit() {
        console.log(this.state.clock);
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
            
          <Container>
              <Row className="justify-content-md-center">
                  <Col>
                      <Card class="clockIn" title="Start of Day" style={{ width: 300 }}>
                          
                      <Form>
                          <Row>
                              <Col>
                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                      <Form.Label>Clock In</Form.Label>
                                      <div>
                                          <TimePicker onChange={this.handleClockInChanged.bind(this), onChangeIn} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} value={this.state.clock.timeIn} />
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
                                          <TimePicker onChange={this.handleClockOutChanged.bind(this), onChangeOut} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} value={this.state.clock.timeOut} onSubmit={this.handleSubmit}/>
                                      </div>
                                      <Form.Text className="text-muted">
                                          Select clock for time options
                                      </Form.Text>
                                  </Form.Group>
                              </Col>
                          </Row>
                      </Form>
                      <h5>You clocked in at and clocked out at . Today you worked hours</h5>
                      </Card>
      
                  </Col>
              
              </Row>
          </Container>  
          
        )
    }
}