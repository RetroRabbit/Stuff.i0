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

const link = 'http://192.168.0.20:54980';

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
            alert('Got all users');
            console.log('Got all users');

            var users = [];

            for (let i = 0; i < action.users.length; i++) {
                alert(i + ' index');
                users.push({
                    userID: action.users[i].id,
                    userName: action.users[i].name,
                    userSurname: action.users[i].surname,
                    userImg: action.users[i].image,
                    userEmail: action.users[i].email
                });
            }

            alert(users.length + ' users in db');

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
            user = null;
            for (let i = 0; i < state.users.length; i++) {
                if (
                    state.users[i].userEmail === action.user.userEmail &&
                    state.users[i].userPassword === action.user.userPassword
                ) {
                    user = state.users[i];
                }
            }

            return {
                ...state,
                currentUser: user
            };

        case CURRENT_USER_ACCOUNT:
            return {
                ...state
            };

        case USER_ACCOUNT:
            alert('here ....');
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
            console.log('dispatching CURRENT_USER_CHATS');
            let msgs = action.allMsgs;
            let userChats = [];


            alert("Current user chats " + )
            console.log(userChats);
            return {
                ...state,
                currentUserChats: userChats,
                filteredChats: userChats
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
        alert('About to');
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
            .get(link + '/api/Chats/GetBySender/' + userID)
            .then(function(response) {


              for (let msg of msgs) {
              {
                  for (let user of state.users) {
                      if (msg.senderId === user.userID || msg.receiverId === user.userID) {
                          if (userChats.length > 0) {
                              let duplicatefound = false;
                              for (let userDet of userChats) {
                                  if (userDet.userID === user.userID) {
                                      userDet = user;
                                      userDet.latestMessage = msg.text;
                                      userDet.selected = false;
                                      duplicatefound = true;
                                  }
                              }
                              if (!duplicatefound) {
                                  user.latestMessage = msg.text;
                                  user.selected = false;
                                  userChats.push(user);
                              }
                          } else {
                              user.latestMessage = msg.text;
                              user.selected = false;
                              userChats.push(user);
                          }
                      }
                  }
              }

              dispatch({ type: CURRENT_USER_CHATS, allChats: response.data });
            })
            .catch(function(error) {});
    };
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
        dispatch({ type: LOGIN_USER_ACCOUNT, user: user });
    };
};

export const changeUser = changes => {
    return dispatch => {
        dispatch({ type: CHANGE_USER_ACCOUNT, new: changes });
    };
};
