import React from 'react';
import img from '../../images/staff-1.jpg';
import { motion } from 'framer-motion';

const StaffCard = (props) => {
  return(
      <motion.div 
      whileHover={{
        scale: 1.25,
        rotate: 360
      }}
      transition={{
          duration: 1,
      }}
      className="staff-card box-shadow">

          <div className="staff-card__item staff-card__img">
               <img src={img} alt="saff" />
          </div>

          <div className="staff-card__item staff-card__info">
              <h3>{props.name}</h3>
          </div>

      </motion.div>
  );
}

export default StaffCard;