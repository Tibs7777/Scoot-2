import React from 'react';
import './App.scss';
import Home from '../Home/Home';
import About from '../About/About';
import Careers from '../Careers/Careers';
import Nav from '../Nav/Nav';
import DownloadBanner from '../DownloadBanner/DownloadBanner';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Locations from '../Locations/Locations';
import Footer from '../Footer/Footer';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/careers' exact component={Careers} />
          <Route path='/locations' exact component={Locations} />
        </Switch>
        <DownloadBanner />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
