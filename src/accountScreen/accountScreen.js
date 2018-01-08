import React, { Component } from 'react';
import './accountScreen.css';
import SearchBar from 'material-ui-search-bar';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

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
    border: '1px solid #979797',
    margin: '0px auto'
};

const ChatCard = function(props) {
    if (props.selected) {
        return (
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
        );
    } else {
        return (
            <Card>
                <CardHeader
                    title={props.title}
                    avatar={props.avatar}
                    style={cardHeaderStyle}
                    textStyle={cardHeaderTextStyle}
                />
                <CardText style={cardTextStyle}>{props.text}</CardText>
            </Card>
        );
    }
};
const ChatBubbleRight = function(props) {
    return (
        <div className="bubbleContainerRight">
            <div className="bubbleRight">
                <Card style={{ backgroundColor: '#e6ffe2' }}>
                    <CardText>{props.text}</CardText>
                </Card>
            </div>
        </div>
    );
};

const ChatBubbleLeft = function(props) {
    return (
        <div className="bubbleContainerLeft">
            <div className="bubbleLeft">
                <Card style={{ backgroundColor: '#cfe9ff' }}>
                    <CardText>{props.text}</CardText>
                </Card>
            </div>
        </div>
    );
};

class AccountScreen extends Component {
    render() {
        return (
            <div>
                <div className="leftPanelContainer">
                    <div className="searchContainer">
                        <SearchBar style={searchBarStyle} hintText="Search Chats" />
                    </div>

                    <div>
                        <ChatCard
                            title="Lloyd Jimenez"
                            avatar="http://cliparting.com/wp-content/uploads/2016/10/Person-people-icon-clipart-kid.png"
                            text="The practice of cigar smoking has been on the rise in the U.S. since the early 90’s."
                            selected={true}
                        />
                    </div>

                    <div>
                        <ChatCard
                            title="Jeffrey Thomas"
                            avatar="http://cliparting.com/wp-content/uploads/2016/10/Person-people-icon-clipart-kid.png"
                            text="When you type the website name on your address bar, a simple yet classy homepag"
                        />
                    </div>

                    <div>
                        <ChatCard
                            title="Catherine Sanders"
                            avatar="http://cliparting.com/wp-content/uploads/2016/10/Person-people-icon-clipart-kid.png"
                            text="It is not always possible to jet off half way around the world when you and your significant other"
                        />
                    </div>

                    <div>
                        <ChatCard
                            title="Terry Gordon"
                            avatar="http://cliparting.com/wp-content/uploads/2016/10/Person-people-icon-clipart-kid.png"
                            text="Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola"
                        />
                    </div>
                </div>

                <div className="mainBubbleContainer">
                    <ChatBubbleRight text="Does this chat work?? Yes it does!" />

                    <ChatBubbleLeft text="Does this chat work?? Yes it does!" />

                    <ChatBubbleRight text="Does this chat work?? Yes it does!" />
                </div>
            </div>
        );
    }
}

export default AccountScreen;
