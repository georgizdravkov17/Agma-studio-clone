import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { motion } from 'framer-motion';

const SmallBanner = (props) => {
  return(
      <Link className="small-banner">
          <motion.h2
          whileHover={{
              marginRight: "1rem"
          }}
          transition={{
            duration: 0.3
          }}
          >
            Интересувате се от нашите услуги?Изпратете ни запитване!
          </motion.h2>
          <KeyboardArrowRightIcon />
      </Link>
  )
}

export default SmallBanner;