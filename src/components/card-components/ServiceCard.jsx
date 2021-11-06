import React from 'react';
import img from '../../images/service-1.svg';
import { motion } from 'framer-motion';

const ServiceCard = (props) => {
  return(
      <motion.div 
      whileHover={{
        scale: 1.2
      }}
      transition={{
        duration: 0.4
      }}
      className="service-card box-shadow">
          <div className="service-card__img">
              <img src={img} alt="project-img" />
          </div>
          <div className="service-card__title">
            <h3>{props.title}</h3>
          </div>
      </motion.div>
  );
}

export default ServiceCard;