import {
  getUser
} from './Account'

export const GET_CHATS = 'Chat/GET_CHATS'
export const GET_MSGS = 'Chat/GET_MSGS'
export const ADD_MSG = 'Chat/ADD_MSG'

const initialState = {
    allMsgs:[{}],
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
    currentChat:[],
    chats:[]
  }

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MSG:
      var newMsg = {
        senderID:action.senderID,
        recieverID:action.receiverID,
        sender:getUser(action.senderID),
        receiver:getUser(action.receiverID),
        timeSent:new Date(),
        text:action.msg
      };

      state.allMsgs.push(newMsg);
      var chat = state.allMsgs.filter((msg)=>{
        return (msg.senderID === action.senderID && msg.receiverID === action.recieverID)
      });


      return {
        ...state,
        msgs:chat
      }

    case GET_CHATS:
      var chats = state.allMsgs.filter((msg)=>{
        return (msg.senderID === action.senderID)
      });

      return {
        ...state,
        chats:chats
      }


    case GET_MSGS:
        var msgs = state.allMsgs.filter((msg)=>{
          return (msg.senderID === action.senderID && msg.receiverID === action.recieverID)
        });

        return {
          ...state,
          msgs:msgs
        }

    default:
      return state
  }
}

export const getChats = (userID) => {
  return dispatch => {
  dispatch({
    type : GET_CHATS,
    senderID : userID
    })
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
