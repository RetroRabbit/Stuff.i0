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

const initialState = {
    currentUserChats: [],
    filteredChats: [],
    currentUser: {
        userID: 20,
        userName: 'Joe',
        userSurname: 'Sirwali',
        userPassword: 'joe',
        userEmail: 'joe@gmail.com',
        userImg:
            'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
    },
    receiver: {
        userID: 10,
        userName: 'Takie',
        userSurname: 'Ndou',
        userEmail: 'mulavhe@gmail.com',
        userPassword: 'joseph',
        userImg:
            'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
    },
    users: [
        {
            userID: 20,
            userName: 'Joe',
            userSurname: 'Sirwali',
            userPassword: 'joe',
            userEmail: 'joe@gmail.com',
            userImg:
                'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
        },
        {
            userID: 10,
            userName: 'Takie',
            userSurname: 'Ndou',
            userEmail: 'mulavhe@gmail.com',
            userPassword: 'joseph',
            userImg:
                'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1',
            latestMessage: ''
        },
        {
            userID: 2,
            userName: 'Rendani',
            userSurname: 'Sirwali',
            userEmail: 'mulavhe@gmail.com',
            userImg:
                'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
        },
        {
            userID: 4,
            userName: 'Joseph',
            userSurname: 'Sirwali',
            userEmail: 'mulavhe@gmail.com',
            userImg:
                'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
        },
        {
            userID: 0,
            userName: 'Joseph',
            userSurname: 'Sirwali',
            userEmail: 'mulavhe@gmail.com',
            userImg:
                'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
        },
        {
            userID: 10,
            userName: 'Victim',
            userSurname: 'That',
            userEmail: 'mulavhe@gmail.com',
            userImg:
                'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_ACCOUNT:
            action.user.userID = Math.round(Math.random() * 99999);
            state.users.push(action.user);
            return {
                ...state,
                currentUser: action.user
            };

        case LOGIN_USER_ACCOUNT:
            var user = null;
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
            user = null;
            for (let i = 0; i < state.users.length; i++) {
                if (state.users[i].userID === action.ID) {
                    user = state.users[i];
                }
            }

            return {
                ...state,
                currentUser: user
            };

        case CHANGE_USER_ACCOUNT:
            var user = state.currentUser;
            if(action.new.userName){
                user.userName = action.new.userName;
                user.userSurname = action.new.userSurname;
            }
            
            if(action.new.userImg){
                user.userImg =action.new.userImg;
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

            for (let msg of msgs) {
                if (msg.recieverID === state.currentUser.userID) {
                    for (let user of state.users) {
                        if (msg.senderID === user.userID) {
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
            }
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
        dispatch({ type: USER_ACCOUNT, ID: userID });
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

export const getUserChats = allMsgs => {
    return dispatch => {
        dispatch({ type: CURRENT_USER_CHATS, allMsgs: allMsgs });
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
