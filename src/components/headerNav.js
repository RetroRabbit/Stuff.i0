import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {Route} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

class HeaderNav extends Component {
  state = {
    props: '',
    logged: false,
    user: {
      img: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.idyllwildarts.org%2Fwp-content%2Fuploads%2F2016%2F09%2Fblank-profile-picture.jpg&f=1",
      surname: "Hogan",
      name: "Addie"
    }
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  changePage(value){
    push('/' + value)
  }

  styles = {
    'padding-bottom': '2px'
  }

    render() {
      return (
        <div>
          <AppBar
            className=""
            iconElementLeft={
              <div>
                  <RaisedButton label="New chat" primary={true} onClick={() => {  }}></RaisedButton>
                  <RaisedButton label="New Group" primary={true} onClick={() => {  }}></RaisedButton>
                </div>}
            iconElementRight={this.state.logged ?
              <div>
                <Route render={({ history}) => (
                  <FlatButton {...this.props} onClick={() => {  }}  label={this.state.user.surname + " " + this.state.user.name} />
                  )} />
                <IconMenu
                  iconButtonElement={
                    <IconButton>
                      <Avatar src={ this.state.user.img } />
                  </IconButton>
                  }
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                  <Route render={({ history}) => (
                      <MenuItem primaryText="Settings" onClick={() => { history.push('/settings') }} />
                  )} />
                  <MenuItem primaryText="Log out" onClick={()=>{ this.setState({ logged:false })}}  />
                </IconMenu>
                <IconButton>
                  <Avatar src="https://files.slack.com/files-pri/T02LJS8M9-F8PK0UGEB/icon.png"/>
                </IconButton>
              </div>
              :
              <div>
                <Route render={({ history}) => (
                  <FlatButton {...this.props} onClick={()=>{
                      this.setState({ logged:true })

                      history.push('/')
                    }} label="Login" />
                )} />
              </div>
            }
          />
        </div>
      );
    }
}

const mapStateToProps = state => ({user: state.user, logged: state.logged})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => console.log('/settings')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav)
