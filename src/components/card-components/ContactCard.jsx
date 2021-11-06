import React from 'react';
import SocialMedia from '../common-components/SocialMedia';
import { motion } from 'framer-motion';

const ContactCard = (props) => {
  return(
      <motion.div 
      whileHover={{
        scale: 1.3
      }}
      transition={{
        duration: 0.5
      }}
      className="contact-card box-shadow">
        <SocialMedia />
          <h4 className="aqua-color">{props.contact}</h4>
          <h5>{props.type}</h5>
          
      </motion.div>
  );
}

export default ContactCard;