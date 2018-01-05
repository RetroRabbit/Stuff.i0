import React, { Component } from 'react';
import './accountScreen.css'
import SearchBar from 'material-ui-search-bar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';



const ChatCard = function(props) {
  return (
    <Card>
      <CardHeader
        title={props.title}
        avatar={props.avatar}
      />
      <CardText>
        {props.text}
      </CardText>
    </Card>
    );
};

class AccountScreen extends Component {
  


  render() {
    return (
      <MuiThemeProvider>       
        <div className='rectangle-4'>
          <div className='searchContainer'>
           <SearchBar hintText='Search Chats'/>
          </div>

          <div className='cardContainer'>
            <ChatCard title="Lloyd Jimenez"
            avatar="http://cliparting.com/wp-content/uploads/2016/10/Person-people-icon-clipart-kid.png"
            text="The practice of cigar smoking has been on the rise in the U.S. since the early 90’s."
            />
          </div>

          <div className='cardContainer'>
            <ChatCard title="Lloyd Jimenez"
            avatar="http://cliparting.com/wp-content/uploads/2016/10/Person-people-icon-clipart-kid.png"
            text="The practice of cigar smoking has been on the rise in the U.S. since the early 90’s."
            />
          </div>

          <div className='cardContainer'>
            <ChatCard title="Lloyd Jimenez"
            avatar="http://cliparting.com/wp-content/uploads/2016/10/Person-people-icon-clipart-kid.png"
            text="The practice of cigar smoking has been on the rise in the U.S. since the early 90’s."
            />
          </div>

          <div className='cardContainer'>
            <ChatCard title="Lloyd Jimenez"
            avatar="http://cliparting.com/wp-content/uploads/2016/10/Person-people-icon-clipart-kid.png"
            text="The practice of cigar smoking has been on the rise in the U.S. since the early 90’s."
            />
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}



export default AccountScreen;
