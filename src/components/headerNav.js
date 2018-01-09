import "./headerNav.css"
import React,{ Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Route } from 'react-router-dom'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';


class HeaderNav extends Component{
  state = {
      props:'',
      logged: false,
      user:{
        img:"https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.idyllwildarts.org%2Fwp-content%2Fuploads%2F2016%2F09%2Fblank-profile-picture.jpg&f=1",
        surname:"Hogan",
        name:"Addie"
      }
    };


    handleChange = (event, logged) => {
      this.setState({logged: logged});
    };

  changePage(value){
    push('/' + value)
  }

    styles ={
        'padding-bottom':'2px'
    }

    render() {
      return (
        <div> // page div  
          <div // nav bar div
            className="nav-bar">
            <div>
              <div> // left buttons
                  <div //button new chat
                    className="new-chat"  
                    primary={true} 
                    onClick={() => {  }}>
                      <label className="new-chat-lbl"> NEW CHAT </label>
                  </div> 
                  <div //button new group
                    className="new-group" 
                    primary={true} 
                    onClick={() => {  }}>
                    <label className="new-group-lbl">NEW GROUP </label>
                  </div> // end button new group
              </div> // end of left buttons
            </div>
            <div>
              <div>
                <Route render={({ history}) => (
                  <label className="name-lbl">{this.state.user.userName}</label>
                  )} ></Route>
                <div>
                  <IconMenu
                    iconButtonElement={
                      <IconButton>
                        <div className="">
                          <div className="mini-pro-img" src={ this.state.user.img }> </div>
                        </div>
                      </IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                    <Route render={({ history}) => (
                        <MenuItem primaryText="Settings" onClick={() => { history.push('/settings') }} />
                    )}> </Route>
                    <MenuItem primaryText="Log out" onClick={()=>{ this.setState({ logged:false })}}  />
                  </IconMenu>
                    <div className="logo-border" src="https://files.slack.com/files-pri/T02LJS8M9-F8PK0UGEB/icon.png"/>
                </div> 
              </div>
            </div>
          </div>
        </div>
      );
    }
}
const mapStateToProps = state => ({
  user: state.user,
  logged : state.logged
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => console.log('/settings')
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderNav)
