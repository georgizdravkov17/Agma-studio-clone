import React from 'react';
import img from '../../images/service-1.svg';

const ServiceCard = (props) => {
  return(
      <div className="service-card box-shadow">
          <div className="service-card__img">
              <img src={img} alt="project-img" />
          </div>
          <div className="service-card__title">
            <h3>{props.title}</h3>
          </div>
      </div>
  );
}

export default ServiceCard;