export const GET_MSGS = 'Account/GET_MSGS'
export const CHANGE_USER_ACCOUNT = 'Account/CHANGE_USER_ACCOUNT'

const initialState = {
    Msgs:[
      {
        senderID:0,
        recieverID:0,
        sender:'',
        receiver:'',
        timeSent:new Date(),
        text:''
      }
    ]
  }
}

function getMsgs(sender,receiver){

}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MSGS:
      state = getMsgs(action.senderID,action.receiverID);
      return {
        ...state,
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

export const getMsgs = (senderID,receiverID) => {
  return dispatch => {
    dispatch({
      type: GET_MSGS,
      senderID:senderID,
      receiverID:receiverID
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
