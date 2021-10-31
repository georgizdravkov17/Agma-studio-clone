import React from 'react';
import SocialMedia from '../common-components/SocialMedia';

const ContactCard = (props) => {
  return(
      <div className="contact-card box-shadow">
        <SocialMedia />
          <h4 className="aqua-color">{props.contact}</h4>
          <h5>{props.type}</h5>
          
      </div>
  );
}

export default ContactCard;