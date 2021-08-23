import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { TimePicker } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import {} from "react-router-dom";



<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />;

  
export default class Clock extends React.Component {

    render() {

        

        // function SetClock() {
        //     const [TimePicker, setInput] = useState({
        //     clockIn: '',
        //     clockOut: ''
        //     })

        //     function handleChange (event) {
        //         const {name, value} = event.target;
    
        //         setInput(prevInput => {
        //             return {
        //                 ...prevInput,
        //                 [name]: value
        //             }
        //         })
    
        //         console.log(TimePicker);
        //     }

        // }
            

        // function handleChange (event) {
        //     const {name, value} = event.target;

        //     setInput(prevInput => {
        //         return {
        //             ...prevInput,
        //             [name]: value
        //         }
        //     })

        //     console.log(TimePicker);
        // }

        function onChangeIn(time, timeString) {
            console.log(time, timeString);
            console.log(timeString);
            return (
                <h2>{timeString}</h2>
            )
            // return {ProfileForm}

        }
      
        function onChangeOut(time, timeString) {
          console.log(time, timeString);
          console.log(timeString);
          return (
            <h2>timeString</h2>
          )
        //   return {ProfileForm}
        }
        

      
        return (
          <center> 
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
                                            <TimePicker onChange={onChangeIn} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}  name="clockIn"  type="time" value={TimePicker.clockIn}/>
                                        </div>
                                        <Form.Label>Clock Out</Form.Label>
                                        <div>
                                            <TimePicker onChange={onChangeOut} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}  name="clockOut"  type="time" value={TimePicker.clockOut}/>
                                        </div>
                                        <div>{onChangeIn},{onChangeOut}</div>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                        </Card>
      
                  </Col>
              
              </Row>
            </Container>  
          </center> 
          
        )
    }
}