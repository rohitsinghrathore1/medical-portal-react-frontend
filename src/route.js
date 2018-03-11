import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

import Home from "./containers/home";
import Prescriptions from "./containers/prescriptions";
import MedicalRecords from "./containers/medicalRecords";
import PrescriptionsRequest from "./containers/prescriptionsRequest";

import Header from "./components/header";



const RouterComp = ({history}) => (  
    <div>
      <Header history={history}/>
      <Route exact path="/" component={Home} history={history}/>
      <Route path="/prescriptions" component={Prescriptions}/>
      <Route path="/medical-records" component={MedicalRecords}/>
      <Route path="/prescriptions-access" component={PrescriptionsRequest}/>
    </div>
)
export default RouterComp