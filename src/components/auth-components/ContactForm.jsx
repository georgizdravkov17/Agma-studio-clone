import React from 'react';
import { useState } from 'react';

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
          <input type="email" id="email" name="email" placeholder="Email" onChange={onInputChange} />
          <input type="email" id="email" name="email" placeholder="Email" onChange={onInputChange} />
          <input type="email" id="email" name="email" placeholder="Email" onChange={onInputChange} />
          <button className="btn" type="submit">Send</button>
      </form>
  );
}

export default ContactForm;