import React from 'react';
import SmallBanner from '../banner-components/SmallBanner';
import StaffCard from '../card-components/StaffCard';
import ServiceCard from '../card-components/ServiceCard';
import PartnersBanner from '../banner-components/PartnersBanner';

const About = () => {
  return(
      <div className="about">
        <div className="about__headings">
          <h5 className="aqua-color">КОИ СМЕ НИЕ?</h5>
          <h1>Запознайте се с екипа ни.</h1>
          <h6>Работим заедно от години и си разбираме от занаята.</h6>
        </div>
        <div className="about__staff">
          <StaffCard name="Petar Dimitrov" />
          <StaffCard name="Ivan Dimitrov" />
          <StaffCard name="Mitko Dimitrov" />
          <StaffCard name="Ivan Dimitrov" />
        </div>
        <PartnersBanner />
        <div className="about__headings">
          <h5 className="aqua-color">КОИ СМЕ НИЕ?</h5>
          <h1>Нашите услуги</h1>
          <h6>АГМА Студио е дигитална агенция, специализирана в уеб дизайн  и  дигитален маркетинг,  изработка и поддръжка на уеб сайтове  и  изработка на онлайн магазин.</h6>
        </div>
        <div className="about__services">
           <ServiceCard title="Web Development" />
           <ServiceCard title="Web Development" />
           <ServiceCard title="Web Development" />
        </div>
          <SmallBanner />
      </div>
  );
}

export default About;