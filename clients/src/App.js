import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Brand from './components/layout/Brand';
import Car from './components/layout/Car';
import Seats from './components/layout/Seats';
import Body from './components/layout/Body';
import Fuel from './components/layout/Fuel';
import Price from './components/layout/Price';
import Model from './components/layout/Model';
import Footers from './components/layout/Footers';
import Showroom from './components/layout/Showroom';
import './App.css';

function App() {
  return (
    // <div className='App'>
    //   <Navbar />
    //   <Landing />
    // </div>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/Brand/:BrandName' component={Brand} />
        <Route exact path='/Car/:CarId' component={Car} />
        <Route exact path='/Showrooms/:Brand' component={Showroom} />
        <Route exact path='/Cars/:SeatCount' component={Seats} />
        <Route exact path='/Types/:BodyStyle' component={Body} />
        <Route exact path='/Fuel/:FuelType' component={Fuel} />
        <Route exact path='/Budget' component={Price} />
        <Route exact path='/Model/:ModelName' component={Model} />
      </Switch>
      <Footers />
    </Router>
  );
}

export default App;
