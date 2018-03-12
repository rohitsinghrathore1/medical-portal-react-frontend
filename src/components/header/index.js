import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";

import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleMenuItemClick(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="header-bar">
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="title" color="inherit">
              {this.props.user
                ? `${this.props.user && this.props.user.name}`
                : "Welcome"}
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div onClick={this.toggleDrawer("left", false)}>
            <List component="nav">
              <ListItem button onClick={() => this.handleMenuItemClick("/")}>
                <ListItemText primary="Home" />
              </ListItem>

              <ListItem button>
                <ListItemText
                  primary="My Prescriptions"
                  onClick={() => this.handleMenuItemClick("/prescriptions")}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  primary="My MedicalRecords"
                  onClick={() => this.handleMenuItemClick("/medical-records")}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  primary="View/Request Prescriptions"
                  onClick={() =>
                    this.handleMenuItemClick("/prescriptions-access")}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  primary="Approve-Reject Prescriptions"
                  onClick={() =>
                    this.handleMenuItemClick("/approve-reject-prescriptions")}
                />
              </ListItem>
            </List>

            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/prescriptions">Prescriptions</Link>
            </div>
            <div>
              <Link to="/medical-records">MedicalRecords</Link>
            </div>
            <div>
              <Link to="/prescriptions-access">
                View/Request Prescriptions Access
              </Link>
            </div>
            <div>
              <Link to="/approve-reject-prescriptions">
                Approve-Reject Prescriptions
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Header;
