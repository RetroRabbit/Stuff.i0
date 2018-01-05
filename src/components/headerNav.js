
import React,{ Component } from 'react'
import { push } from 'react-router-redux'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/index.css'

class headerNav extends Component{
  state = {
      logged: true,
      user:{
        img:"https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.idyllwildarts.org%2Fwp-content%2Fuploads%2F2016%2F09%2Fblank-profile-picture.jpg&f=1",
        surname:"Hogan",
        name:"Addie"
      }
    };


    handleChange = (event, logged) => {
      this.setState({logged: logged});
    };

  constructor(prop){
    super(prop);
  }

    render() {
      return (
        <div>
          <AppBar
            iconElementLeft={
              <div>
                  <RaisedButton label="New chat" primary={true}></RaisedButton>
                  <RaisedButton label="New Group" primary={true}></RaisedButton>
              </div>}
            iconElementRight={this.state.logged ?
              <div>
                <FlatButton {...this.props} label={this.state.user.surname + " " + this.state.user.name} />
                <IconMenu
                  iconButtonElement={
                    <IconButton>
                      <Avatar src="https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.idyllwildarts.org%2Fwp-content%2Fuploads%2F2016%2F09%2Fblank-profile-picture.jpg&f=1" />
                    </IconButton>
                  }
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                  <MenuItem primaryText="Settings" onClick={ () =>{ push('/settings') } }/>
                  <MenuItem primaryText="Log out" />
                </IconMenu>
            </div>
              :<div>
                    <FlatButton {...this.props} label="Login" />
              </div>
            }
          />
        </div>
      );
    }
}

export default headerNav;
