import {
  getUser
} from './Account'

export const GET_MSGS = 'Chat/GET_MSGS'
export const ADD_MSG = 'Chat/ADD_MSG'

const initialState = {
    msgs:[
      {
        senderID:0,
        recieverID:0,
        sender:'',
        receiver:'',
        timeSent:new Date(),
        text:''
      }
    ],
    currentChat:[]
  }

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MSG:
      state.msgs.push(
        {
          senderID:action.senderID,
          recieverID:action.receiverID,
          sender:getUser(action.senderID),
          receiver:getUser(action.receiverID),
          timeSent:new Date(),
          text:action.msg
        }
      );

      //Yes i know there is no return or break for this and it is fine :)

    case GET_MSGS:
        var chat = state.msgs.filter((msg)=>{
          return (msg.senderID == action.senderID && msg.receiverID == action.recieverID)
        });

        state.currentChat = chat;
        alert("Total = " + chat.length)
        state.msgs = chat;

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

export const addMsg = (msg,senderID,receiverID) => {
  return dispatch => {
    dispatch({
      type: ADD_MSG,
      msg:msg,
      senderID:senderID,
      receiverID:receiverID
    })
  }
}
