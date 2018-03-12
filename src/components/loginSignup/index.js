import React from "react";

import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";

import makeApiCall from "../../services/apiCallService";

class LoginSignup extends React.Component {
  state = {
    email: "",
    password: "",
    user: null
  };

  constructor() {
    super();
    this.loginSuccessCb = this.loginSuccessCb.bind(this);
    this.loginFailureCb = this.loginFailureCb.bind(this);
    this.logoutSuccessCb = this.logoutSuccessCb.bind(this);
    this.logoutFailureCb = this.logoutFailureCb.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  loginSuccessCb(res) {
    this.setState({
      user: res.user
    });
    this.props.setUser(res.user);
    // this.props.history.push("/medical-records");
  }

  loginFailureCb(res) {
    console.log("login failure", res.message);
  }

  handleLogin() {
    const reqObj = {
      endPoint: "login",
      method: "POST",
      data: {
        email: this.state.email,
        password: this.state.password
      },
      successCb: this.loginSuccessCb,
      failureCb: this.loginFailureCb
    };
    makeApiCall(reqObj);
  }

  handleLogout() {
    const reqObj = {
      endPoint: "logout",
      successCb: this.logoutSuccessCb,
      failureCb: this.logoutFailureCb
    };
    makeApiCall(reqObj);
  }

  logoutSuccessCb() {
    this.setState({
      user: null
    });
    this.props.setUser(null);
  }

  logoutFailureCb(res) {
    console.log(res);
  }

  render() {
    return (
      <div>
        {!this.props.user ? (
          <Card className="login">
            <CardContent>
              <Typography>Login/SignUp</Typography>
              <div>
                <TextField
                  label="Email"
                  className="login"
                  margin="normal"
                  onChange={this.handleChange("email")}
                />
              </div>
              <div>
                <TextField
                  label="Password"
                  className="login"
                  margin="normal"
                  type="password"
                  onChange={this.handleChange("password")}
                />
              </div>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => this.handleLogin()}
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        ) : (
          <div className="logout">
            <div className="user">
              {this.props.user && this.props.user.name}
            </div>
            <Button
              size="small"
              color="primary"
              onClick={() => this.handleLogout()}
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default LoginSignup;
