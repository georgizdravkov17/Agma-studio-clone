import React from 'react';
import img from '../../images/project-1.jpg';

const ProjectCard = (props) => {
  return(
      <div className="project-card box-shadow">
          <div className="project-card__img">
              <img src={img} alt="project-img" />
          </div>
          <div className="project-card__title">
            <h3>{props.title}</h3>
          </div>
      </div>
  );
}

export default ProjectCard;