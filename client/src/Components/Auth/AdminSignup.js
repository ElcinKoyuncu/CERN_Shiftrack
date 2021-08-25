// import React, { useState, useEffect } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';

// import { useMutation } from '@apollo/react-hooks';
// import { ADD_USER } from '../../utils/mutations';
// import Auth from '../../utils/auth';

// const SignupForm = () => {
//   // set initial form state
//   const [adminFormData, setAdminFormData] = useState({ firstName: '',  lastName: '',email: '', password: '' });
//   // set state for form validation
//   const [validated] = useState(false);
//   // set state for alert
//   const [showAlert, setShowAlert] = useState(false);

//   const [addUser, { error }] = useMutation(ADD_USER);

//   useEffect(() => {
//     if (error) {
//       setShowAlert(true);
//     } else {
//       setShowAlert(false);
//     }
//   }, [error]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setAdminFormData({ ...adminFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // check if form has everything (as per react-bootstrap docs)
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       const { data } = await addUser({
//         variables: { ...adminFormData },
//       });
//       console.log(data);
//       Auth.login(data.addUser.adminToken);
//     } catch (err) {
//       console.error(err);
//     }

//     setAdminFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <>
//       {/* This is needed for the validation functionality above */}
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         {/* show alert if server response is bad */}
//         <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
//           Something went wrong with your signup!
//         </Alert>

//         <Form.Group>
//           <Form.Label htmlFor='firstName'>First Name</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Your first name'
//             name='firstName'
//             onChange={handleInputChange}
//             value={adminFormData.firstName}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>First name is required!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group>
//           <Form.Label htmlFor='lastName'>Last Name</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Your last name'
//             name='lastName'
//             onChange={handleInputChange}
//             value={adminFormData.lastName}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Last name is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor='email'>Email</Form.Label>
//           <Form.Control
//             type='email'
//             placeholder='Your email address'
//             name='email'
//             onChange={handleInputChange}
//             value={adminFormData.email}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor='password'>Password</Form.Label>
//           <Form.Control
//             type='password'
//             placeholder='Your password'
//             name='password'
//             onChange={handleInputChange}
//             value={adminFormData.password}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
//         </Form.Group>
        
//         <Button
//           disabled={!(adminFormData.firstName && adminFormData.lastName &&adminFormData.email && adminFormData.password)}
//           type='submit'
//           variant='success'>
//           Submit
//         </Button>
        
      

//       </Form>
//     </>
//   );
// };

// export default SignupForm;
