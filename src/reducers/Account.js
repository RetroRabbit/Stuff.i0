import axios from 'axios';

export const USER_ACCOUNT = 'Account/USER_ACCOUNT';
export const REGISTER_USER_ACCOUNT = 'Account/REGISTER_USER_ACCOUNT';
export const LOGIN_USER_ACCOUNT = 'Account/LOGIN_USER_ACCOUNT';
export const CURRENT_USER_ACCOUNT = 'Account/CURRENT_USER_ACCOUNT';
export const CHANGE_USER_ACCOUNT = 'Account/CHANGE_USER_ACCOUNT';
export const LOGOUT_USER_ACCOUNT = 'Account/LOGOUT_USER_ACCOUNT';
export const CURRENT_USER_CHATS = 'Account/CURRENT_USER_CHATS';
export const FILTER_USER_CHATS = 'Account/FILTER_USER_CHATS';
export const CHANGE_SELECTED_CHAT = 'Account/CHANGE_SELECTED_CHAT';
export const CHANGE_RECIEVER = 'Account/CHANGE_RECIEVER';
export const ALL_USERS = 'Account/ALL_USERS';

const link = 'http://192.168.0.20:52499';

const initialState = {
    currentUserChats: [],
    filteredChats: [],
    currentUser: null,
    receiver: {
        userID: 10,
        userName: 'Takie',
        userSurname: 'Ndou',
        userEmail: 'mulavhe@gmail.com',
        userPassword: 'joseph',
        userImg:
            'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
    },
    users: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ALL_USERS:
            var users = [];

            for (let i = 0; i < action.users.length; i++) {
              users.push({
                    userID: action.users[i].id,
                    userName: action.users[i].name,
                    userSurname: action.users[i].surname,
                    userImg: action.users[i].image,
                    userEmail: action.users[i].email
                });
            }

            console.log(users.length + ' users in db');

            return {
                ...state,
                users: users
            };

        case REGISTER_USER_ACCOUNT:
            var user = null;
            user = action.user;
            user.userID = Math.round(Math.random() * 99999);
            state.users.push(user);
            return {
                ...state,
                currentUser: user
            };

        case LOGIN_USER_ACCOUNT:
            var user = null;
            user = action.user;
            user.userID = action.user.id;
            user.userName = action.user.name;
            user.userSurname = action.user.surname;
            user.userEmail = action.user.email;
            user.userImg = action.user.image;

            state.currentUser = user;

            return {
                ...state,
                currentUser: user
            };

        case CURRENT_USER_ACCOUNT:
            return {
                ...state
            };

        case USER_ACCOUNT:
            console.log('here ....');
            console.log('here ....');
            console.log(action.user);
            return {
                ...state,
                currentUser: action.user
            };

        case CHANGE_USER_ACCOUNT:
            user = state.currentUser;
            if (action.new.userName) {
                user.userName = action.new.userName;
                user.userSurname = action.new.userSurname;
            }

            if (action.new.userImg) {
                user.userImg = action.new.userImg;
            }

            return {
                ...state,
                currentUser: user
            };

        case LOGOUT_USER_ACCOUNT:
            state.currentUser = null;
            return {
                ...state
            };

        case CURRENT_USER_CHATS:
            console.log("Are you sure")
            var users = state.users;
              for(let i=0;i<action.userChats.length;i++){
                      for(let j=0;j<state.users.length;j++){
                          if(state.users[j].userID !== state.currentUser.userID && state.users[j].userID == action.userChats[i].senderId){

                            action.userChats[i].userID = state.users[j].userID;
                            action.userChats[i].userName = state.users[j].userName;
                            action.userChats[i].userImg = state.users[j].userImg;

                          }else if(state.users[j].userID !== state.currentUser.userID && state.users[j].userID == action.userChats[i].receiverId){

                              action.userChats[i].userID = state.users[j].userID;
                              action.userChats[i].userName = state.users[j].userName;
                              action.userChats[i].userImg = state.users[j].userImg;

                          }
                      }
                      console.log(action.userChats.length+ " == " + i)
              }
            state.currentUserChats =  action.userChats;
            state.filteredChats =  action.userChats;
            console.log(state.filteredChats.length + " filteredChats");
            console.log(action.userChats);
            console.log("Done")

            return {
                ...state,
                currentUserChats: action.userChats,
                filteredChats: action.userChats
            };

        case FILTER_USER_CHATS:
            let updatedList = action.updatedList;
            return {
                ...state,
                filteredChats: updatedList
            };

        case CHANGE_SELECTED_CHAT:
            console.log('filteredChats', action.tempChats);
            return {
                ...state,
                filteredChats: action.tempChats
            };

        case CHANGE_RECIEVER:
            return {
                ...state,
                receiver: action.reciever
            };

        default:
            return state;
    }
};

export const getUser = userID => {
    return dispatch => {
        axios
            .get(link + 'api/Users/' + userID)
            .then(function(response) {
                dispatch({ type: USER_ACCOUNT, user: response.data });
            });
    };
};

export const changeReciever = reciever => {
    return dispatch => {
        dispatch({ type: CHANGE_RECIEVER, reciever: reciever });
    };
};

export const filterUserChats = updatedList => {
    return dispatch => {
        dispatch({ type: FILTER_USER_CHATS, updatedList: updatedList });
    };
};

export const changeSelectedChat = tempChats => {
    return dispatch => {
        dispatch({ type: CHANGE_SELECTED_CHAT, tempChats: tempChats });
    };
};

export const getUsers = () => {
    return dispatch => {
        console.log('About to');
        axios
            .get(link + '/api/Users/GetAllUsers')
            .then(function(response) {
                dispatch({ type: ALL_USERS, users: response.data });
            })
            .catch(function(error) {});
    };
};

export const getUserChats = (userID) => {
  return dispatch => {
        axios
            .get(link + '/api/Chats/getChatsforuser/' + userID)
            .then(function(response) {
                var userChats = []
                var chat = response.data[0];
                chat.latestMessage = response.data[0].text;
                chat.selected = false;
                userChats.push(chat);

                for(let i=1;i<response.data.length;i++){
                    let duplicatefound = false;
                    for(let j=0;j<userChats.length;j++){
                      if((response.data[i].senderId == userChats[j].senderId && response.data[i].receiverId == userChats[j].receiverId  || (response.data[i].senderId == userChats[j].receiverId && response.data[i].receiverId == userChats[j].senderId))){
                        userChats[j].latestMessage = response.data[i].text;
                        userChats[j].selected = false;
                        duplicatefound = true;
                      }
                    }
                    if(!duplicatefound){
                      chat = response.data[i];
                      chat.latestMessage = response.data[i].text;
                      chat.selected = false;
                      userChats.push(chat);
                    }
                  }

                  dispatch({ type: CURRENT_USER_CHATS, userChats: userChats });
            })
            .catch(function(error) {
                console.log(error)
                console.log("Server not running")
            });
          }
};

export const getCurrentUser = () => {
    return dispatch => {
        dispatch({ type: CURRENT_USER_ACCOUNT });
    };
};

export const logOut = () => {
    return dispatch => {
        dispatch({ type: LOGOUT_USER_ACCOUNT });
    };
};

export const registerUser = user => {
    return dispatch => {
        dispatch({ type: REGISTER_USER_ACCOUNT, user: user });
    };
};

export const loginUser = user => {
  return dispatch => {
      console.log('About to');
      axios
          .get(link + '/api/Users/GetAllUsers')
          .then(function(response) {
            for(let i =0;i<response.data.length;i++){
                if(user.userEmail == response.data[i].email && user.userPassword == response.data[i].password){
                  dispatch({ type: LOGIN_USER_ACCOUNT, user: response.data[i] });
                  return;
                }
              }
          })
          .catch(function(error) {});
  };
};

export const changeUser = changes => {
    return dispatch => {
        dispatch({ type: CHANGE_USER_ACCOUNT, new: changes });
    };
};
