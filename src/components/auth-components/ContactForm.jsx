import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactForm = () => {

    let [data, setData] = useState(null);

    const onInputChange = (event) => {
        event.persist();

        setData(prevState => {
            return {
                ...prevState,
                [event.target.name]: [event.target.value]
            }
        })
    }

    const onSubmit = (event) => {
       event.preventDefault();
    }

  return(
      <form onSubmit={onSubmit}>
          <TextField variant="outlined" required label="First name" name="firstName" onChange={onInputChange} />
          <TextField variant="outlined" required label="Last name" name="lastName" onChange={onInputChange} />
          <TextField variant="outlined" required label="Email" name="email" onChange={onInputChange} />
          <TextField variant="outlined" required label="Password" name="password" onChange={onInputChange} />
          <Button variant="contained" size="large" color="secondary">Send</Button>
      </form>
  );
}

export default ContactForm;