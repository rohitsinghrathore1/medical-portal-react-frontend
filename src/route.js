import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from "./containers/home";
import Prescriptions from "./containers/prescriptions";
import MedicalRecords from "./containers/medicalRecords";



const RouterComp = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/prescriptions">Prescriptions</Link></li>
        <li><Link to="/medical-records">MedicalRecords</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/prescriptions" component={Prescriptions}/>
      <Route path="/medical-records" component={MedicalRecords}/>
    </div>
  </Router>
)
export default RouterComp