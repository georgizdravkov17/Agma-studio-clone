import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialMedia from '../common-components/SocialMedia';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { linkClasses } from '@mui/material';

const Footer = () => {
  return(
      <footer className="footer">

         <div className="footer__item footer__nav">
               <div className="item">
                   <h4>Дигитална агенция</h4>
                   <ul className="list">
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <Link to="#">Уеб дизайн услуги</Link>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <Link to="#">Изработка на сайт</Link>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <Link to="#">Изработка на онлайн магазин</Link>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <Link to="#">Изработка на Wordpress сайт</Link>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <Link to="#">Поддръжка на уеб сайт</Link>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <Link to="#">Дигитален маркетинг</Link>
                       </li>
                   </ul>
               </div>

               <div className="item">
                   <h4>Проекти</h4>
                   <ul className="list">
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <Link to="#">KWIAT България</Link>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <Link to="#">Пекарната на Еди</Link>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <Link to="#">Сайт строителен магазин</Link>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <Link to="#">Отвъд различията</Link>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <Link to="#">СЛРБ България</Link>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <Link to="#">Винетни и пътни такси</Link>
                       </li>
                   </ul>
               </div>

               <div className="item">
                   <h4>Навигация</h4>
                   <ul className="list">
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="/home" activeClassName="active">Начало</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="/projects" activeClassName="active">Проекти</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="/services" activeClassName="active">Услуги</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="/about" activeClassName="active">За нас</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="/contacts" activeClassName="active">Контакти</NavLink>
                       </li>
                   </ul>
               </div>

               <div className="item">
                   <h4>Данни за контакт</h4>
                   <ul className="list">
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <p>Мобилен: +359 886 763 050</p>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <p>Имейл: info@agmastudio.com</p>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <p>Адрес: София, България</p>
                       </li>
                   </ul>
               </div>

         </div>

         <div className="footer__item footer__info">
            <p>АГМА Студио  2021 © Агма Студио ЕООД - Всички права запазени.</p>
            <SocialMedia />
         </div>

      </footer>
  );
}

export default Footer;