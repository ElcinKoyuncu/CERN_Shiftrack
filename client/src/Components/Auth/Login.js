import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  

const Login = () => {
    
    
      return (
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            username: '',
            password: '',
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-2 justify-content-md-center">
                
                <Form.Group as={Col} md="2" controlId="validationFormikUsername">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-2 justify-content-md-center">
                <Form.Group as={Col} md="2" controlId="validationFormik03">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
    
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
               
              </Row>
             <Row className="mb-2 justify-content-md-center">
                 <Col md="2">
              <Button type="submit">Login</Button>
              </Col>
              </Row>
            </Form>
          )}
        </Formik>
      );
    
    
               
}


export default Login;