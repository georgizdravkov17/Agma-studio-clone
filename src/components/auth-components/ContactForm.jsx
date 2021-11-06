import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {  makeStyles } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
    input: {
        color: "white",
        backgroundColor: "#333333",
        "&::placeholder": {
            color: "white"
        }
    },
    btn: {
        backgroundColor: "#085C88",
        "&:hover":{
            backgroundColor: "#00A5FF"
        }
    }

})

const ContactForm = () => {

    let [data, setData] = useState(null);
    const classes = useStyles();

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
      <motion.form 
      whileHover={{
          scale: 1.05
      }}
      transition={{
          duration: 0.4
      }}
      className="form box-shadow" 
      onSubmit={onSubmit}
      >
          <h4 className="aqua-color">ВРЪЗКА С НАС</h4>
          <h1>Имате идея? Да поговорим за нея.</h1>
          <TextField className={classes.input} variant="outlined" required label="First name" name="firstName" onChange={onInputChange} />
          <TextField className={classes.input}  variant="outlined" required label="Last name" name="lastName" onChange={onInputChange} />
          <TextField className={classes.input}  variant="outlined" required label="Email" name="email" onChange={onInputChange} />
          <TextField className={classes.input}  variant="outlined" required label="Password" name="password" onChange={onInputChange} />
          <Button className={classes.btn} variant="contained" startIcon={<SendIcon />} size="large" color="secondary">
              Send
            </Button>
      </motion.form>
  );
}

export default ContactForm;