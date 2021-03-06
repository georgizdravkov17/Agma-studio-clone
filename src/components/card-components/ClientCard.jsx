import React from 'react';
import img from '../../images/client-1.jpeg';
import { motion } from 'framer-motion';

const ClientCard = (props) => {
  return(
      <motion.div 
      whileHover={{
        scale: 1.1
        
      }}
      transition={{
        duration: 0.5
      }}
       className="client-card box-shadow">

          <div className="item info">
             <div className="img">
               <img src={img} alt="" />
               <h4 className="aqua-color">Ivan Ivanov</h4>
               <h5>Software Developer</h5>
             </div>
          </div>

          <div className="item feedback">
             <h4 className="aqua-color">Агма Студио са мой надежден партниор</h4>
             <p>
               Агма Студио са мой надежден партниор
               Агма Студио са мой надежден партниор
               Агма Студио са мой надежден партниор
               Агма Студио са мой надежден партниор
               Агма Студио са мой надежден партниор
               Агма Студио са мой надежден партниор
             </p>
          </div>

      </motion.div>
  );
}

export default ClientCard;