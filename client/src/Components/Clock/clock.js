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

    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            clockIn: '',
            clockOut: ''
        }
    }

    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }

    // on form submit...
    handleFormSubmit(e) {
        e.preventDefault()
        localStorage.setItem('document',JSON.stringify(this.state));
    }

    // React Life Cycle
    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document'));
    
        if (localStorage.getItem('document')) {
            this.setState({
                clockIn: this.documentData.clockIn,
                clockOut: this.documentData.clockOut
        })
    } else {
        this.setState({
            clockIn: '',
            clockOut: ''
        })
    }
    }



    render() {

        // function onChangeIn(time, timeString) {
        //     console.log(time, timeString);
        //     // const timeIn = timeString;
        // }
      
        // function onChangeOut(time, timeString) {
        //   console.log(time, timeString);
        // //   const timeOut = timeString;
        // }
        
        // const timeIn = onChangeIn.timeString;

        // const timeOut = onChangeOut.timeString;
      
        return (
          <center> 
          <Container>
              <Row className="justify-content-md-center">
                  <Col>
                      <Card class="clockIn" title="Start of Day" style={{ width: 300 }}>
                          
                      <Form onSubmit={this.handleFormSubmit}>
                          <Row>
                              <Col>
                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                      <Form.Label>Clock In</Form.Label>
                                      <div>
                                          <TimePicker onChange={this.handleChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} value={this.state.clockIn} name="clockIn" />
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
                                          <TimePicker onChange={this.handleChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} value={this.state.clockOut} name="clockOut"/>
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
          </Container>  </center> 
          
        )
    }
}