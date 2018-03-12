import React from "react";
import { Route, Redirect } from "react-router-dom";

import Header from "./components/header";

import Home from "./containers/home";
import Prescriptions from "./containers/prescriptions";
import MedicalRecords from "./containers/medicalRecords";
import PrescriptionsRequest from "./containers/prescriptionsRequest";
import PrescriptionsDetails from "./containers/prescriptionDetails";
import ApproveRejectPrescriptions from "./containers/approveRejectPrescriptions";

const isAuthorized = user => {
  if (user) {
    return true;
  }
  return false;
};

const redirect = () => {
  return <Redirect to={{ pathname: "/" }} />;
};

const RouterComp = ({ history, setUser, user }) => (
  <div>
    <Header history={history} user={user} />
    <Route
      exact
      path="/"
      render={() => <Home setUser={val => setUser(val)} user={user} />}
      history={history}
    />
    <Route
      path="/prescriptions"
      render={() => (isAuthorized(user) ? <Prescriptions /> : redirect())}
    />
    <Route
      path="/medical-records"
      render={() => (isAuthorized(user) ? <MedicalRecords /> : redirect())}
    />
    <Route
      path="/prescriptions-access"
      render={() =>
        isAuthorized(user) ? <PrescriptionsRequest /> : redirect()}
    />
    <Route
      path="/prescription-details/:id"
      render={() =>
        isAuthorized(user) ? <PrescriptionsDetails /> : redirect()}
    />
    <Route
      path="/approve-reject-prescriptions"
      render={() =>
        isAuthorized(user) ? <ApproveRejectPrescriptions /> : redirect()}
    />
  </div>
);
export default RouterComp;
