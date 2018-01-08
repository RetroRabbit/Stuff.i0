export const USER_ACCOUNT = 'Account/USER_ACCOUNT'
export const CHANGE_USER_ACCOUNT = 'Account/CHANGE_USER_ACCOUNT'

const initialState = {
        currentUser : {
        userName:'Joseph',
        userSurname:'Sirwali',
        userEmail:'mulavhe@gmail.com',
        userImg:'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1'
    }
}



export default (state = initialState, action) => {
  alert("Herre " + action.type);
  switch (action.type) {
    case USER_ACCOUNT:
      alert("WE in");
      return {
        ...state,
      }

    case CHANGE_USER_ACCOUNT:
    state.currentUser.userName = action.new;
    alert(action.new);

    alert("Here");
    return {
      ...state
    }

    default:
      return state
  }
}

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: USER_ACCOUNT
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
