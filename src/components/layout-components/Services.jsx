import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SmallBanner from '../banner-components/SmallBanner';
import ServiceCard from '../card-components/ServiceCard';

const Services = () => {
  return(
      <div className="services">
        <div className="services__cards">
          <ServiceCard title="Web Development" />
          <ServiceCard title="Web Development" />
          <ServiceCard title="Web Development" />
        </div>
        <div className="services__types">
            <div className="item box-shadow">
               <h2> <ArrowBackIosIcon className="aqua-color" /> Mobile first уеб дизайн <span className="aqua-color">/</span><ArrowForwardIosIcon className="aqua-color"/></h2>
               <p>
                 Тъй като използването на мобилни устройства се е превърнало в стандарт, важно е да се погрижите и за мобилната версия на Вашия уеб сайт.
               </p>
            </div>
            <div className="item box-shadow">
               <h2> <ArrowBackIosIcon className="aqua-color" /> Mobile first уеб дизайн <span className="aqua-color">/</span><ArrowForwardIosIcon className="aqua-color"/></h2>
               <p>
                 Тъй като използването на мобилни устройства се е превърнало в стандарт, важно е да се погрижите и за мобилната версия на Вашия уеб сайт.
               </p>
            </div>
            <div className="item box-shadow">
               <h2> <ArrowBackIosIcon className="aqua-color" /> Mobile first уеб дизайн <span className="aqua-color">/</span><ArrowForwardIosIcon className="aqua-color"/></h2>
               <p>
                 Тъй като използването на мобилни устройства се е превърнало в стандарт, важно е да се погрижите и за мобилната версия на Вашия уеб сайт.
               </p>
            </div>
            <div className="item box-shadow">
               <h2> <ArrowBackIosIcon className="aqua-color" /> Mobile first уеб дизайн <span className="aqua-color">/</span><ArrowForwardIosIcon className="aqua-color"/></h2>
               <p>
                 Тъй като използването на мобилни устройства се е превърнало в стандарт, важно е да се погрижите и за мобилната версия на Вашия уеб сайт.
               </p>
            </div>
            <div className="item box-shadow">
               <h2> <ArrowBackIosIcon className="aqua-color" /> Mobile first уеб дизайн <span className="aqua-color">/</span><ArrowForwardIosIcon className="aqua-color"/></h2>
               <p>
                 Тъй като използването на мобилни устройства се е превърнало в стандарт, важно е да се погрижите и за мобилната версия на Вашия уеб сайт.
               </p>
            </div>
            <div className="item box-shadow">
               <h2> <ArrowBackIosIcon className="aqua-color" /> Mobile first уеб дизайн <span className="aqua-color">/</span><ArrowForwardIosIcon className="aqua-color"/></h2>
               <p>
                 Тъй като използването на мобилни устройства се е превърнало в стандарт, важно е да се погрижите и за мобилната версия на Вашия уеб сайт.
               </p>
            </div>
             
            
        </div>
        <SmallBanner title="Web Development" />
      </div>
  );
}

export default Services;