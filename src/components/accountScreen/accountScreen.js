import React, { Component } from 'react';
import './accountScreen.css';
import SearchBar from 'material-ui-search-bar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import HeaderNav from '../headerNav/headerNav';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    getUser,
    changeUser,
    getCurrentUser,
    registerUser,
    loginUser,
    getUserChats,
    filterUserChats,
    changeSelectedChat,
    changeReciever
} from '../../reducers/Account';

import { addMsg, getMsgs, getChats } from '../../reducers/Chat';

const ChatBubbleRightStyle = {
    backgroundColor: '#007D80',
    borderRadius: '23px'
};

const ChatBubbleLeftStyle = {
    borderRadius: '23px',
    backgroundColor: '#01B9BD'
};

const ChatTextStyle = {
    fontSize: '16px',
    fontFamily: 'Helvetica',
    color: '#FFFFFF'
};

const getShort = str => {
    return str.substring(0, 200);
};

const getShortTime = str => {
    var value = str.getMinutes().toString();
    if (value.length === 1) {
        value += "0";
    }
    return str.getHours() + ':' + value;
};

const cardHeaderStyle = {
    backgroundColor: '#EAEAEA',
    backgroundClip: 'content-box',
    borderRadius: '50px'
};

const cardHeaderTextStyle = {
    paddingTop: '3%'
};

const cardTextStyle = {
    padding: '0px 16px 35px 16px'
};

const searchBarStyle = {
    borderRadius: '21.5px',
    height: '43px',
    width: '345px',
    height: '6vh',
    width: '19vw',
    border: '1px solid #979797',
    margin: '0px auto'
};

const ChatCard = function(props) {
    if (props.selected) {
        return (
            <div>
                <Card
                    style={{
                        backgroundColor: '#F5F5F5'
                    }}
                >
                    <CardHeader
                        title={props.title}
                        avatar={props.avatar}
                        style={cardHeaderStyle}
                        textStyle={cardHeaderTextStyle}
                    />
                    <CardText style={cardTextStyle}>{props.text}</CardText>
                </Card>
            </div>
        );
    } else {
        return (
            <div>
                <Card>
                    <CardHeader
                        title={props.title}
                        avatar={props.avatar}
                        style={cardHeaderStyle}
                        textStyle={cardHeaderTextStyle}
                    />
                    <CardText style={cardTextStyle}>{props.text}</CardText>
                </Card>
            </div>
        );
    }
};

const ChatBubbleRight = function(props) {
    return (
        <div className="bubbleContainerRight">
            <div className="bubbleRight">
                <Card style={ChatBubbleRightStyle}>
                    <CardText style={ChatTextStyle}>{props.text}</CardText>
                </Card>
            </div>
        </div>
    );
};

const ChatBubbleLeft = function(props) {
    return (
        <div className="bubbleContainerLeft">
            <div className="bubbleLeft">
                <Card style={ChatBubbleLeftStyle}>
                    <CardText style={ChatTextStyle}>{props.text}</CardText>
                </Card>
            </div>
        </div>
    );
};

const Plus = function(props) {
    return (
        <div className="addDoc">
            <div className="plus">
                <div className="line" />
                <div className="line-copy" />
            </div>
        </div>
    );
};

const NewText = function(props) {
    return (
        <div className="newTextContainer">
            <div className="newText">
                <TextField
                    hintText="Insert Text Message Here"
                    onKeyDown={e => {
                        if (e.key === 'Enter' && e.target.value.length > 0) {
                            props.addMsg(
                                e.target.value,
                                props.currentUser.userID,
                                props.receiver.userID
                            );
                            e.target.value = '';
                        }
                    }}
                    style={{
                        padding: '1px 0px 1px 25px',
                        width: '100%'
                    }}
                />
            </div>
        </div>
    );
};

const MessageTimeLeft = function(props) {
    return (
        <div className="timeStampLeft">
            <div className="timeNowLeft">{props.text}</div>
        </div>
    );
};

const MessageTimeRight = function(props) {
    return (
        <div className="timeStampRight">
            <div className="timeNowRight">{props.text}</div>
        </div>
    );
};

class AccountScreen extends Component {
    constructor(props) {
        super(props);
        try{
            props.getCurrentUser();
        }
        catch(exc){
                window.location.href = '/';
        }

        props.getUserChats(this.props.allMsgs);
        props.getMsgs(props.currentUser.userID, props.receiver.userID);

        this.filterList = this.filterList.bind(this);
        //this.state = { initialItems: initialItems, items: initialItems };

    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
    }

    filterList = function(text) {
        var updatedList = this.props.currentUserChats;
        updatedList = updatedList.filter(function(item) {
            return item.userName.toLowerCase().search(text.toLowerCase()) !== -1;
        });
        this.props.filterUserChats(updatedList);
    };

    changeSelected = function(chat) {
        let userID = chat.userID;
        let tempChats = this.props.filteredChats;

        for (let i = 0; i < tempChats.length; i++) {
            tempChats[i].selected = false;
        }

        for (let i = 0; i < tempChats.length; i++) {
            if (tempChats[i].userID === userID) {
                tempChats[i].selected = true;
            }
        }

        this.props.changeSelectedChat(tempChats);

        this.forceUpdate();
        this.props.changeReciever(chat);
        this.props.getMsgs(this.props.currentUser.userID, userID);
    };

    render() {
        return (
            <div className="auto">
                <HeaderNav pic={ this.props.currentUser.userImg } surname={ this.props.currentUser.userSurname  } name={ this.props.currentUser.userName } />
                <div className="leftPanelContainer">
                    <div className="searchContainer">
                        <SearchBar
                            style={searchBarStyle}
                            hintText="Search Chats"
                            onChange={text => this.filterList(text)}
                        />
                    </div>

                    <ul className="defaultList">
                        {this.props.filteredChats.map(chat => (
                            <li
                                data-category={chat}
                                key={chat}
                                onClick={() => this.changeSelected(chat)}
                            >
                                <ChatCard
                                    title={chat.userName}
                                    avatar={chat.userImg}
                                    text={chat.latestMessage}
                                    selected={chat.selected}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mainBubbleContainer">
                    {this.props.msgs.map(chat => {
                        if (
                            chat.senderID === this.props.currentUser.userID &&
                            chat.receiverID === this.props.receiver.userID
                        ) {
                            return (
                                <div className="bubbleContainer">
                                    <ChatBubbleRight text={getShort(chat.text)} />
                                    <MessageTimeRight text={getShortTime(chat.timeSent)} />
                                </div>
                            );
                        } else if (
                            chat.senderID === this.props.receiver.userID &&
                            chat.receiverID === this.props.currentUser.userID
                        ) {
                            return (
                                <div className="bubbleContainer">
                                    <ChatBubbleLeft text={getShort(chat.text)} />
                                    <MessageTimeLeft text={getShortTime(chat.timeSent)} />
                                </div>
                            );
                        }
                        return '';
                    })}
                </div>
                <div className="inputBubbleContainer">
                    <Plus />
                    <NewText {...this.props} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        chats: state.Chat.chats,
        msgs: state.Chat.msgs,
        allMsgs: state.Chat.allMsgs,
        currentUser: state.Account.currentUser,
        users: state.Account.users,
        receiver: state.Account.receiver,
        currentUserChats: state.Account.currentUserChats,
        filteredChats: state.Account.filteredChats
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getUser,
            getCurrentUser,
            changeUser,
            addMsg,
            getMsgs,
            registerUser,
            loginUser,
            getChats,
            getUserChats,
            filterUserChats,
            changeSelectedChat,
            changeReciever
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
