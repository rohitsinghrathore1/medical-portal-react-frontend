import React from 'react';
import { withRouter } from "react-router-dom";

import './App.css';
import RouterComp from "./route";

// import Header from "./components/header";

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple
  }});


const App = ({history})=>(
  <MuiThemeProvider theme={theme}>
    <div className="app">
      <RouterComp history={history}/>
    </div>
  </MuiThemeProvider>
  )

export default withRouter(App);
