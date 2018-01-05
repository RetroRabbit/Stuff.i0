import React, { Component } from 'react';
import './accountScreen.css'
import SearchBar from 'material-ui-search-bar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


/* function Search(props) {
  return  (
  <div className='searchContainer'>
    <div className='rectangle-7'>
      <p className='search-chats'>Search</p>
    </div>
  </div>
  );
} */

class AccountScreen extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider>       
        <div className='rectangle-4'>
          <div className='searchContainer'>
           <SearchBar hintText='Search Chats'/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}



export default AccountScreen;
