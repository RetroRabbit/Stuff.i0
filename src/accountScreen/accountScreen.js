import React, { Component } from 'react';
import './accountScreen.css';
import SearchBar from 'material-ui-search-bar';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

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
                    style={{ padding: '1px 0px 1px 25px', width: '100%' }}
                />
            </div>
        </div>
    );
};

const MessageTimeLeft = function(props) {
    return (
        <div className='timeStampLeft'>
            <div className='timeNowLeft'>
                {props.text}
            </div> 
        </div>
    );
};

const MessageTimeRight = function(props) {
    return (
        <div className='timeStampRight'>
            <div className='timeNowRight'>
                {props.text}
            </div> 
        </div>
    );
};

var longText =
    'Without a doubt there is something very relaxing and pleasurable about cooking and eating grilled food. There are countless ways you can turn your grilling not only into a flavorful and enjoyable way to cook, but there are also many healthy and tasty alternatives. Like anything else in life, what you put on your grill is a choice. Grilling healthy first means that you have decided to eat healthy. Cooking on a grill can be a great way to reduce fats on while adding wonderful flavor however we must also be careful when grilling as there can be certain risks if precautions are not taken. Eating healthy always begins with choosing healthy foods that are low in fat and using marinates to reduce unhealthy caseinogens. We know that charcoal grilling can produce carcinogenic smoke from the high temperature cooking of foods containing fat and protein. This can produce unhealthy chemical changes in the outer layers of flesh foods. To avoid these dangerous chemical formations we must avoid inhaling the smoke and avoid the black char on the outside of charcoal cooked food caused by high heat and/or overcooking. It is also advised that any lighter fluid or self-lighting packages be avoided as they can also add toxic chemicals directly into your food. Instead, use a starter chimney and newspaper to get your charcoal lit. While this method may initially take a few more minutes, in the long run it’s faster and healthier. The use of marinades can also help greatly lower caseinogens in food. By using a marinade your food will not only take on extra flavor but even a simple marinade consisting of olive oil and a citrus juice can reduce the harmful chemicals by as much as 99%. A marinade will also assist in tenderizing and enhancing your food’s natural flavors. There has been a lot of talk about grilling and the risk of cancer. While the risk is real and this should be kept in mind, there are some simple things you can do to greatly reduce the risk of cancer caused by grilling. The harmful chemicals that can form are created by putting food, primarily meats, under intense heat and flame. These are cancer forming agents however by taking a few simple precautions you can greatly reduce and even eliminate the risks. Grilling isn’t the only cooking method that causes these agents so there is no reason to give up on your grill. If done right, grilling is one of the healthiest methods of cooking. To reduce the risks follow these basic';

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
                    <ChatBubbleLeft text="Many healthy and tasty alternatives" />
                    <MessageTimeLeft text='7:25'/>

                    <ChatBubbleLeft text={getShort(longText)} />
                    <MessageTimeLeft text='7:28'/>

                    <ChatBubbleRight text="I understand this and it makes sence" />
                    <MessageTimeRight text='7:30'/>

                    <Plus />

                    <NewText />
                </div>
            </div>
        );
    }
}

export default AccountScreen;
