import React from 'react';
import LoginSignup from "../../components/loginSignup";

const Home = ({history}) => (
  <div>
    <h2>Home</h2>
    <LoginSignup history={history} />
  </div>
)

export default Home;