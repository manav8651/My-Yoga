// AdmissionForm.js
import React, { useState } from 'react';
import { Container, TextField, MenuItem, Button, Typography } from '@mui/material';

const AdmissionForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [batch, setBatch] = useState('');




  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (age >= 18 && age <= 65) {
      // Process form submission here
      console.log("Form submitted", { firstName, lastName, mobileNumber, email, address, age, batch });
      alert(`Thank you for enrolling, ${firstName} ${lastName}.`);
    } else {
      alert('Age must be between 18 and 65 to enroll.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '5%', padding: '2%', borderRadius: '15px', boxShadow: '0px 0px 10px rgba(0,0,0,0.2)', backgroundColor: '#fff' }}>
      <Typography variant="h5" component="h1" gutterBottom style={{ textAlign: 'center' }}>
        Admission Form
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <TextField
          label="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          inputProps={{ maxLength: 10 }}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <TextField
          label="Email ID"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <TextField
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          multiline
          rows={4}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <TextField
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <TextField
          select
          label="Select Batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        >
          <MenuItem value="6-7AM">6-7AM</MenuItem>
          <MenuItem value="7-8AM">7-8AM</MenuItem>
          <MenuItem value="8-9AM">8-9AM</MenuItem>
          <MenuItem value="5-6PM">5-6PM</MenuItem>
        </TextField>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px', marginBottom: '10px' }}
        >
          Enroll
        </Button>
      </form>
    </Container>
  );
};

export default AdmissionForm;
