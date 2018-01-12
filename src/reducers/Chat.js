import { getUser } from './Account';
import axios from 'axios'

export const GET_CHATS = 'Chat/GET_CHATS';
export const GET_MSGS = 'Chat/GET_MSGS';
export const ADD_MSG = 'Chat/ADD_MSG';

const initialState = {
    api:{
      host:'http://192.168.0.20',
      port:54980
    },
    msgs: [{}],
    allMsgs: [{}],
    currentChat: [],
    chats: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_MSG:
            alert("Check your log file");
            console.log(action.results)
            return {
                ...state
            };

        case GET_CHATS:
            var chats = action.chats;
            state.chats = chats;
            alert("got " + chats.length);
            return {
                ...state,
                chats: chats
            };

        case GET_MSGS:
            //state.allMsgs = msgs;
            state.allMsgs = action.msgs;
            state.msgs = action.msgs;

            return {
                ...state,
                msgs: action.msgs
            };

        default:
            return state;
    }
};

export const getChats = userID => {
    return dispatch => {
      var msgs = []
      axios.get(initialState.api.host + ':'  + initialState.api.port + '/api/chats/getchatsforuser/' + userID).then(function (response) {
        dispatch({
            type: GET_CHATS,
            senderId: userID,
            chats:response.data
        });
      }).catch(function (error) {

      });
    };
};

export const getMsgs = (senderId, receiverId) => {
    return dispatch => {

      var msgs = []
      axios.get(initialState.api.host + ':'  + initialState.api.port + '/api/chats').then(function (response) {
          dispatch({
              type: GET_MSGS,
              senderId: senderId,
              receiverId: receiverId,
              msgs:response.data
          });
      }).catch(function (error) {
        alert("Error : sasasaffnasjfnaskjfasf ");
        console.log(error);
      });
    };
};

export const addMsg = (msg, senderId, receiverId) => {
    return dispatch => {

      var newMsg = {
          SenderId: senderId,
          ReceiverId: receiverId,
          Text: msg
      };
      alert("Adding " + msg);
      axios.post(initialState.api.host + ':'  + initialState.api.port + '/api/chats',newMsg).then(function (response) {
          console.log(response);
          alert("sent");
          dispatch({
              type: ADD_MSG,
              msg: msg,
              results:response.data
          });
          getMsgs(senderId, receiverId);
      }).catch(function (error) {
          alert("Error : safnasjfnaskjfasf ");
          console.log(error);
      });
    };
};
