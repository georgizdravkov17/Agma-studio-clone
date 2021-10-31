import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialMedia from '../common-components/SocialMedia';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Switch from '@mui/material/Switch';

const Header = () => {
  return(
      <header className="header">

          <div className="header__item header__info">

               <div className="item">
                   <QueryBuilderIcon />
                   <p>Пон-Пет 09:00 - 18:00</p>
               </div>

               <div className="item">
                   <MailOutlineIcon />
                   <p>info@agmastudio.com</p>
               </div>

               <div className="item">
                   <LocalPhoneIcon />
                   <p>+359 886 763 050</p>
               </div>

               <SocialMedia />
               <Switch />
               

          </div>

          <div className="header__item header__nav">
             <Link to="/"><h1 className="heading"><ArrowBackIosIcon /> АГМА СТУДИО <ArrowForwardIosIcon/></h1></Link>
             <nav>
                 <ul className="header__list">
                     <li className="item">
                         <NavLink to="/home" activeClassName="active">Начало</NavLink>
                     </li>
                     <li className="item">
                         <NavLink to="/projects" activeClassName="active">Проекти</NavLink>
                     </li>
                     <li className="item">
                         <NavLink to="/services" activeClassName="active">Услуги</NavLink>
                     </li>
                     <li className="item">
                         <NavLink to="/about" activeClassName="active">За нас</NavLink>
                     </li>
                     <li className="item">
                         <NavLink to="/contacts" activeClassName="active">Контакти</NavLink>
                     </li>
                 </ul>
             </nav>
          </div>

      </header>
  );
}

export default Header;