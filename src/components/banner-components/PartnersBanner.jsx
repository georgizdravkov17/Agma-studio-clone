import React from 'react';
import partner1 from '../../images/partner-1.png';
import partner2 from '../../images/partner-2.png';
import partner3 from '../../images/partner-3.png';
import partner4 from '../../images/partner-4.png';
import partner5 from '../../images/partner-5.png';
import partner6 from '../../images/partner-6.png';
import partner7 from '../../images/partner-7.png';
import partner8 from '../../images/partner-8.png';

const PartnersBanner = () => {
  return(
      <div className="partners-banner">
          <div className="partners-banner__headings pertners-banner__item">
              <h1>Партньорите, които вече ни се довериха</h1>
              <h4>НАШИТЕ КЛИЕНТИ</h4>
          </div>
          <div className="partners-banner__imgs partners-banner__item">
              <div className="img box-shadow"><img src={partner1} alt="" /></div>
              <div className="img box-shadow"><img src={partner2} alt="" /></div>
              <div className="img box-shadow"><img src={partner3} alt="" /></div>
              <div className="img box-shadow"><img src={partner4} alt="" /></div>
              <div className="img box-shadow"><img src={partner5} alt="" /></div>
              <div className="img box-shadow"><img src={partner6} alt="" /></div>
              <div className="img box-shadow"><img src={partner7} alt="" /></div>
              <div className="img box-shadow"><img src={partner8} alt="" /></div>
              
          </div>
      </div>
  );
}

export default PartnersBanner;