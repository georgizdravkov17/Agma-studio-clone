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


const Home = () => {
  return(
      <div className="home">
            <div className="home__services">
              <ServiceCard title="Web Development"/>
              <ServiceCard title="Web Development"/>
              <ServiceCard title="Web Development"/>
            </div>
            <div className="home__projects">
                <ProjectCard title="Pekarna Hui" />
                <ProjectCard title="Pekarna Hui" />
                <ProjectCard title="Pekarna Hui" />
                <ProjectCard title="Pekarna Hui" />
            </div>
            <BigBanner />
            <div className="home__contacts">
              <ContactForm />
            </div>
            <div className="home__clients">
              <ClientCard />
              <ClientCard />
            </div>
            <PartnersBanner />
            <div className="home__staff">
              <StaffCard name="Petar Dimitrov" />
              <StaffCard name="Dimitar Petrov" />
              <StaffCard name="Georgi Zdravkov" />
              <StaffCard name="Magi Ivanova"/>
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