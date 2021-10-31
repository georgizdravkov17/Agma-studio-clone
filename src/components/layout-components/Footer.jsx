import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialMedia from '../common-components/SocialMedia';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Footer = () => {
  return(
      <footer className="footer">

         <div className="footer__item footer__nav">
               <div className="item">
                   <h4>Дигитална агенция</h4>
                   <ul className="list">
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="#" activeClassName="active">Уеб дизайн услуги</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="#" activeClassName="active">Изработка на сайт</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="#" activeClassName="active">Изработка на онлайн магазин</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="#" activeClassName="active">Изработка на Wordpress сайт</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="#" activeClassName="active">Поддръжка на уеб сайт</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="#" activeClassName="active">Дигитален маркетинг</NavLink>
                       </li>
                   </ul>
               </div>

               <div className="item">
                   <h4>Проекти</h4>
                   <ul className="list">
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="#" activeClassName="active">KWIAT България</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="#" activeClassName="active">Пекарната на Еди</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="#" activeClassName="active">Сайт строителен магазин</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="#" activeClassName="active">Отвъд различията</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="#" activeClassName="active">СЛРБ България</NavLink>
                       </li>
                       <li className="list__item">
                           <KeyboardArrowRightIcon />
                           <NavLink to="#" activeClassName="active">Винетни и пътни такси</NavLink>
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