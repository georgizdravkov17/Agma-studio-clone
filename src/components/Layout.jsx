import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './layout-components/Home';
import Projects from './layout-components/Projects';
import Services from './layout-components/Services';
import About from './layout-components/About';
import Contacts from './layout-components/Contacts';
import NotFoundPage from './layout-components/NotFoundPage';
import Header from './layout-components/Header';
import Footer from './layout-components/Footer';

const Layout = () => {
  return(
      <>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route  component={NotFoundPage}/>
        </Switch>
        <Footer />
      </>
  );
}

export default Layout;