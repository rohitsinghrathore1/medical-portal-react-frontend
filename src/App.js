import React from "react";
import { withRouter } from "react-router-dom";

import "./App.css";
import RouterComp from "./route";

// import Header from "./components/header";

import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import purple from "material-ui/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});

class App extends React.Component {
  state = {
    user: null
  };

  setUser(val) {
    debugger;
    this.setState({
      user: val
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <RouterComp
            history={this.props.history}
            setUser={(val) => this.setUser(val)}
            user={this.state.user}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
