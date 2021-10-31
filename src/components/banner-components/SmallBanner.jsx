import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SmallBanner = (props) => {
  return(
      <Link className="small-banner">
          <h2>Интересувате се от нашите услуги?Изпратете ни запитване!</h2>
          <KeyboardArrowRightIcon />
      </Link>
  )
}

export default SmallBanner;