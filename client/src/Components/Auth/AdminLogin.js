import "./Login.css";
import { useMutation } from '@apollo/client';
import { LOGIN_ADMIN } from '../../utils/mutations';
import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../../utils/auth';


const AdminLogin = () => {
 
  const [adminFormData, setAdminFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [adminLogin, { loading, error }] = useMutation
  (LOGIN_ADMIN);
 
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAdminFormData({ ...adminFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    console.log(event);
    event.preventDefault();

    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await adminLogin({
        variables: { ...adminFormData },
      });

      console.log(data);
      Auth.login(data.adminLogin.adminToken,'/companypage');
     
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setAdminFormData({
      email: '',
      password: '',
    });
  };
  return (
    <>
      <Form className="LoginFormDiv" noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={adminFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={adminFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button disabled={!(adminFormData.email && adminFormData.password)} type='submit' variant='success'>
          Login
        </Button>
      </Form>
    </>
  );
};

export default AdminLogin;