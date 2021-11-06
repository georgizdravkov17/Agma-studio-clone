import React from 'react';
import img from '../../images/project-1.jpg';
import { motion } from 'framer-motion';

const ProjectCard = (props) => {
  return(
      <motion.div 
      whileHover={{
        scale: 1.1
      }}
      transition={{
        duration: 0.4
      }}
      className="project-card box-shadow">
          <div className="project-card__img">
              <img src={img} alt="project-img" />
          </div>
          <motion.div
           whileHover={{
             backgroundColor: "aqua",
             paddingBottom: "0.7rem"
           }}
           
           className="project-card__title">
            <h3>{props.title}</h3>
          </motion.div>
      </motion.div>
  );
}

export default ProjectCard;