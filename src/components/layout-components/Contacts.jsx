import React from 'react';
import ContactForm from '../auth-components/ContactForm';
import SmallBanner from '../banner-components/SmallBanner';
import ContactCard from '../card-components/ContactCard';
import BigBanner from '../banner-components/BigBanner';

const Contacts = () => {
  return(
      <div className="contacts">
          <div className="contacts__headings">
              <h6 className="aqua-color">ЩЕ СЕ РАДВАМЕ ДА ПОГОВОРИМ С ВАС</h6>
              <h1>Свържете се с нас</h1>
          </div>
          <div className="contacts__cards">
            <ContactCard contact="+359 876 108 696" type="Mobile phone"/>
            <ContactCard contact="+359 876 108 696" type="Mobile phone"/>
            <ContactCard contact="+359 876 108 696" type="Mobile phone"/>
          </div>
          <BigBanner />

          <div className="contacts__form">
            <ContactForm />
          </div>
          <SmallBanner />
      </div>
  );
}

export default Contacts;