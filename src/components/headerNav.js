import './headerNav.css';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import Avatar from 'material-ui/Avatar';

class HeaderNav extends Component {
    state = {
        props: '',
        logged: true,
        logo: {
          img: 'https://files.slack.com/files-pri/T02LJS8M9-F8PK0UGEB/icon.png'
         },
        user: {
            img:
                'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.idyllwildarts.org%2Fwp-content%2Fuploads%2F2016%2F09%2Fblank-profile-picture.jpg&f=1',
            surname: 'Hogan',
            name: 'Addie'
        }
    };

    handleChange = (event, logged) => {
        this.setState({ logged: logged });
    };

    changePage(value) {
        push('/' + value);
    }

    styles = {
        'padding-bottom': '2px'
    };

    render() {
        return (
                <div className="nav-bar">
                    <div>
                        <div className="new-chat" primary={true} onClick={() => {}}>
                            <label className="new-chat-lbl"> NEW CHAT </label>
                        </div>
                        <div className="new-group" primary={true} onClick={() => {}}>
                            <label className="new-group-lbl">NEW GROUP </label>
                        </div>
                    </div>
                            <label className="name-lbl">{this.state.user.name + ' ' + this.state.user.surname}</label>                             
                            <div>
                                <IconMenu
                                className="mini-img-placeholder"
                                    iconButtonElement={
                                        <IconButton>
                                            <img
                                                className="mini-pro-image"
                                                src={this.state.user.img}
                                            ></img>
                                        </IconButton>
                                    }
                                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                                >
                                    <Route
                                        render={({ history }) => (
                                            <MenuItem
                                                primaryText="Settings"
                                                onClick={() => {
                                                    history.push('/settings');
                                                }}
                                            />
                                        )}
                                    >
                                        {' '}
                                    </Route>
                                    <MenuItem
                                        primaryText="Log out"
                                        onClick={() => {
                                            this.setState({ logged: false });
                                        }}
                                    />
                                </IconMenu>
                                <div
                                    className="logo-border"
                                    src={this.state.logo.img}
                                />
                            </div>
                        
                    
                </div>
        );
    }
}
<<<<<<< HEAD

const mapStateToProps = state => ({user: state.user, logged: state.logged})
=======
const mapStateToProps = state => ({
    user: state.user,
    logged: state.logged
});
>>>>>>> a73a321e42c5f2651f61ebe196ad5badb61e4e47

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: () => console.log('/settings')
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
