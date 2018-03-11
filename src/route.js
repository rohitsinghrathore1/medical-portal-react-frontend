import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

import Header from "./components/header";

import Home from "./containers/home";
import Prescriptions from "./containers/prescriptions";
import MedicalRecords from "./containers/medicalRecords";
import PrescriptionsRequest from "./containers/prescriptionsRequest";
import PrescriptionsDetails from "./containers/prescriptionDetails";
import ApproveRejectPrescriptions from "./containers/approveRejectPrescriptions";

const RouterComp = ({history}) => (  
    <div>
      <Header history={history}/>
      <Route exact path="/" component={Home} history={history}/>
      <Route path="/prescriptions" component={Prescriptions}/>
      <Route path="/medical-records" component={MedicalRecords}/>
      <Route path="/prescriptions-access" component={PrescriptionsRequest}/>
      <Route path="/prescription-details/:id" component={PrescriptionsDetails}/>
      <Route path="/approve-reject-prescriptions" component={ApproveRejectPrescriptions}/>
    </div>
)
export default RouterComp