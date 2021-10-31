import React from 'react';
import img from '../../images/staff-1.jpg';

const StaffCard = (props) => {
  return(
      <div className="staff-card box-shadow">

          <div className="staff-card__item staff-card__img">
               <img src={img} alt="saff" />
          </div>

          <div className="staff-card__item staff-card__info">
              <h3>{props.name}</h3>
          </div>

      </div>
  );
}

export default StaffCard;