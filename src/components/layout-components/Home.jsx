import React from 'react';
import SmallBanner from '../banner-components/SmallBanner';
import BigBanner from '../banner-components/BigBanner';
import ProjectCard from '../card-components/ProjectCard';
import ServiceCard from '../card-components/ServiceCard';
import ContactForm from '../auth-components/ContactForm';
import ClientCard from '../card-components/ClientCard';
import StaffCard from '../card-components/StaffCard';
import ContactCard from '../card-components/ContactCard';
import PartnersBanner from '../banner-components/PartnersBanner';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const Home = () => {
  return(
      <div className="home">
            <div className="home__services"> 
               <div className="heading">
                 <h4 className="aqua-color">ДОБРЕ ДОШЛИ</h4>
                 <h1>Дигитална агенция от София</h1>
                 <p>
                   Изберете нас за Ваша дигитална агенция и нека заедно дефинираме какво точно искате да постигнете. Ние ще Ви помогнем да зададете приоритети на различните онлайн услуги, които са Ви нужни.
                  </p>
                  <Button
                  startIcon={<SendIcon />}
                  variant="contained"
                  >
                    Запитване
                    </Button>
               </div>
              <ServiceCard title="Web Development"/>
              <ServiceCard title="Web Development"/>
              <ServiceCard title="Web Development"/>
            </div>
            <BigBanner />
            <div className="home__projects">
                <div className="headings">
                  <h4 className="aqua-color">НАШИТЕ ПРОЕКТИ</h4>
                  <h1>Това е нашата гордост</h1>
                </div>
                <div className="projects">
                <ProjectCard title="Codexio" />
                <ProjectCard title="Motion Software" />
                <ProjectCard title="Insignia Cars" />
                <ProjectCard title="Mercedes-Benz" />
                </div>
            </div>
            <PartnersBanner />
            <div className="home__clients">
              <ClientCard />
              <ClientCard />
            </div>
            <div className="home__contacts">
              <ContactForm />
            </div>
            <div className="home__contact-cards">
                <ContactCard contact="+359 876 108 596" type="Mobile phone" />
                <ContactCard contact="+359 876 108 596" type="Mobile phone" />
                <ContactCard contact="+359 876 108 596" type="Mobile phone" />
            </div>
            <SmallBanner />
        </div>
  )
}

export default Home;