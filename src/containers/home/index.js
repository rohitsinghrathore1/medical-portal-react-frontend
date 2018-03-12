import React from "react";
import LoginSignup from "../../components/loginSignup";

const Home = ({ history, setUser, user }) => (
  <div>
    <h2>Home</h2>
    <LoginSignup history={history} setUser={val => setUser(val)} user={user} />
  </div>
);

export default Home;
