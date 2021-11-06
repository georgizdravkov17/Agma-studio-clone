import { Link } from 'react-router-dom';
import React from 'react';
import ProjectCard from '../card-components/ProjectCard';
import SmallBanner from '../banner-components/SmallBanner';

const Projects = () => {
  return(
      <div className="projects">
          <div className="projects__headings">
             <h5 className="aqua-color">НАД КАКВО СМЕ РАБОТИЛИ ДОСЕГА?</h5>
             <h1>Нашите проекти</h1>
             <p>
                Уникален дизайн с персонализиран подход. Създаваме красиви и висококачествени уеб проекти, спазвайки конкретните нужди на клиента, аудиторията и целите на сайта. Разработката е тясно свързана с добрата комуникация с нашите клиенти. За нас добрата комуникация е основен фактор за успех. Запознайте се с портфолиото ни в сферите на
                <Link to="#">уеб дизайн</Link>, <Link to="#">изработка на сайт</Link>, <Link to="#">поддръжка на уеб сайт</Link>, <Link to="#">изработка на онлайн магазин </Link> и <Link to="#">изработка на фирмен сайт WordPress.</Link>
             </p>
          </div>

          <div className="projects__container">
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
             <ProjectCard title="Web Application"/>
          </div>
          <SmallBanner />
      </div>
  );
}

export default Projects;