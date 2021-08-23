import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { TimePicker } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../../utils/mutations';
import { QUERY_PROFILES } from '../../utils/queries';

<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />;

  
export default class Clock extends React.Component {

    render() {

        // const ProfileForm = () => {
        //     const [name, setName] = useState('');
        //     const [addProfile, { error }] = useMutation(ADD_PROFILE, {
        //       update(cache, { data: { addProfile } }) {
        //         try {
        //           const { profiles } = cache.readQuery({ query: QUERY_PROFILES });
        //           cache.writeQuery({
        //             query: QUERY_PROFILES,
        //             data: { profiles: [...profiles, addProfile] },
        //           });
        //         } catch (e) {
        //           console.error(e);
        //         }
        //       },
        //     });
    
        //     const handleFormSubmit = async (event) => {
        //         event.preventDefault();
        //         try {
        //           const { data } = await addProfile({
        //             variables: { name },
        //           });
        //           setName('');
        //         } catch (err) {
        //           console.error(err);
        //         }
        //     };

        //     handleFormSubmit();
    
    
        // }

        function onChangeIn(time, timeString) {
            console.log(time, timeString);
            // return {ProfileForm}
        }
      
        function onChangeOut(time, timeString) {
          console.log(time, timeString);
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
                                            <TimePicker onChange={onChangeIn} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}  name="clockIn"  type="time"/>
                                        </div>
                                        <Form.Label>Clock Out</Form.Label>
                                        <div>
                                            <TimePicker onChange={onChangeOut} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}  name="clockOut"  type="time"/>
                                        </div>
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