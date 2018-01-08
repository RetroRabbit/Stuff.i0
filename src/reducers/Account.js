export const USER_ACCOUNT = 'Account/USER_ACCOUNT'
export const CURRENT_USER_ACCOUNT = 'Account/CURRENT_USER_ACCOUNT'
export const CHANGE_USER_ACCOUNT = 'Account/CHANGE_USER_ACCOUNT'

const initialState = {
      currentUser : {
          userID:0,
          userName:'Joseph',
          userSurname:'Sirwali',
          userEmail:'mulavhe@gmail.com',
          userImg:'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
      },
      users:[
        {
            userID:4,
            userName:'Mpho',
            userSurname:'Sirwali',
            userEmail:'mulavhe@gmail.com',
            userImg:'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
        },
        {
            userID:2,
            userName:'Rendani',
            userSurname:'Sirwali',
            userEmail:'mulavhe@gmail.com',
            userImg:'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
        },
        {
            userID:0,
            userName:'Joseph',
            userSurname:'Sirwali',
            userEmail:'mulavhe@gmail.com',
            userImg:'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
        }
      ]
}


export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER_ACCOUNT:
      return {
        ...state.currentUser,
      }

    case USER_ACCOUNT:
      var user = null;
      alert("Trying to get user " + action.ID);
      for(let i =0; i< state.users.length;i++){
        if(state.users[i].userID == action.ID){
          user = state.users[i];
        }
      }

      return {
        ...user
      }

    case CHANGE_USER_ACCOUNT:
      state.currentUser.userName = action.new;
      return {
        ...state
      }

    default:
      return state
  }
}


export const getUser = (userID) => {
  return dispatch => {
    dispatch({
      type: USER_ACCOUNT,
      ID:userID
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    dispatch({
      type: CURRENT_USER_ACCOUNT
    })
  }
}

export const changeUser = (changes) => {
  return dispatch => {
    dispatch({
      type: CHANGE_USER_ACCOUNT,
      new:changes
    })
  }
}
