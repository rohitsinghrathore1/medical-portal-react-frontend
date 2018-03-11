import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';

import {
  Link
} from 'react-router-dom'


class Header extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <div className="header-bar">
          <AppBar position="static" color="primary">
            <Toolbar>

              <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                <MenuIcon />
              </IconButton>

              <Typography variant="title" color="inherit">
                Title
              </Typography>
            </Toolbar>
          </AppBar>


          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div className="side-menu-title">
              Menu
            </div>
            <div
              onClick={this.toggleDrawer('left', false)}
            >
              <div><Link to="/">Home</Link></div>
              <div><Link to="/prescriptions">Prescriptions</Link></div>
              <div><Link to="/medical-records">MedicalRecords</Link></div>
              <div><Link to="/prescriptions-access">View/Request Prescriptions Access</Link></div>
              <div><Link to="/approve-reject-prescriptions">Approve-Reject Prescriptions</Link></div>              
            </div>
          </Drawer>


        </div>
      )
  }
}

export default Header;








