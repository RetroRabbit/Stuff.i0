export const USER_ACCOUNT = 'Account/USER_ACCOUNT'
export const REGISTER_USER_ACCOUNT = 'Account/REGISTER_USER_ACCOUNT'
export const LOGIN_USER_ACCOUNT = 'Account/LOGIN_USER_ACCOUNT'
export const CURRENT_USER_ACCOUNT = 'Account/CURRENT_USER_ACCOUNT'
export const CHANGE_USER_ACCOUNT = 'Account/CHANGE_USER_ACCOUNT'
export const LOGOUT_USER_ACCOUNT = 'Account/LOGOUT_USER_ACCOUNT'

const initialState = {
  
  receiver: {
    userID: 10,
    userName: 'Takie',
    userSurname: 'Ndou',
    userEmail: 'mulavhe@gmail.com',
    userPassword: 'joseph',
    userImg: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
  },
  users: [
    {
      userID: 20,
      userName: 'Joe',
      userSurname: 'Sirwali',
      userPassword:'joe',
      userEmail: 'joe@gmail.com',
      userImg: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
    }, {
      userID: 2,
      userName: 'Rendani',
      userSurname: 'Sirwali',
      userEmail: 'mulavhe@gmail.com',
      userImg: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
    }, {
      userID: 4,
      userName: 'Joseph',
      userSurname: 'Sirwali',
      userEmail: 'mulavhe@gmail.com',
      userImg: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
    },{
      userID: 0,
      userName: 'Joseph',
      userSurname: 'Sirwali',
      userEmail: 'mulavhe@gmail.com',
      userImg: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
    },{
      userID: 10,
      userName: 'Victim',
      userSurname: 'That',
      userEmail: 'mulavhe@gmail.com',
      userImg: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
    }
  ]
}

export default(state = initialState, action) => {
  switch (action.type) {

    case REGISTER_USER_ACCOUNT:
      state.users.push(action.user);
      return {
        ...state,
        currentUser:action.user
      }

    case LOGIN_USER_ACCOUNT:
      var user = null;
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].userEmail === action.user.userEmail && state.users[i].userPassword === action.user.userPassword) {
          user = state.users[i];
        }
      }

      return {
        ...state,
        currentUser:user
      }

    case CURRENT_USER_ACCOUNT:
      return {
        ...state
      }

    case USER_ACCOUNT:
    alert("We are in")
      user = null;
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].userID === action.ID) {
          user = state.users[i];
        }
      }

      return {
        ...state,
        currentUser:user
      }

    case CHANGE_USER_ACCOUNT:
      state.currentUser.userName = action.new.userName;
      state.currentUser.userSurname = action.new.userSurname;
      alert("New user " + state.currentUser.userName);
      return {
        ...state,
        currentUser:state.currentUser
      }

    case LOGOUT_USER_ACCOUNT:
      state.currentUser = null;
      return {
        ...state
      }

    default:
      return state
  }
}

export const getUser = (userID) => {
  return dispatch => {
    dispatch({type: USER_ACCOUNT, ID: userID})
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    dispatch({type: CURRENT_USER_ACCOUNT})
  }
}

export const logOut = () => {
  return dispatch => {
    dispatch({type: LOGOUT_USER_ACCOUNT})
  }
}

export const registerUser = (user) => {
  return dispatch => {
    dispatch({type: REGISTER_USER_ACCOUNT,user:user})
  }
}

export const loginUser = (user) => {
  return dispatch => {
    dispatch({type: LOGIN_USER_ACCOUNT,user:user})
  }
}

export const changeUser = (changes) => {
  return dispatch => {
    dispatch({type: CHANGE_USER_ACCOUNT, new: changes})
  }
}
