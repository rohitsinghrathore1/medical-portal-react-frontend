import React from 'react';
import './App.css';
import RouterComp from "./route";

import Header from "./components/header";

const App = ()=>(
    <div className="app">
      <Header/>
      <RouterComp/>
    </div>
  )

export default App;
