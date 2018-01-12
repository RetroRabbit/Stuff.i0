import { getUser } from './Account';
import axios from 'axios';

export const GET_CHATS = 'Chat/GET_CHATS';
export const GET_MSGS = 'Chat/GET_MSGS';
export const ADD_MSG = 'Chat/ADD_MSG';
export const UPDATE_MSGS = 'Chat/UPDATE_MSGS'

const link = 'http://192.168.0.20:52499';

const initialState = {
    msgs: [{}],
    allMsgs: [{}],
    currentChat: [],
    chats: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_MSG:
            console.log('Check your log file');
            return {
                ...state
            };

        case GET_CHATS:
            var chats = action.chats;
            state.chats = chats;
            console.log('got ' + chats.length);
            return {
                ...state,
                chats: chats
            };

        case UPDATE_MSGS:
        console.log(state.reciever.receiverId + " is their id")
          state.msgs = action.msgs;
          return {
              ...state,
              msgs:action.msgs
          }

        case GET_MSGS:
            //state.allMsgs = msgs;
            state.allMsgs = action.msgs;
            state.msgs = action.msgs;

            return {
                ...state,
                msgs: action.msgs,
                allMsgs:action.msgs
            };

        default:
            return state;
    }
};

export const getChats = userID => {
    return dispatch => {
        var msgs = [];
        axios
            .get(link +
                    '/api/chats/getchatsforuser/' +
                    userID
            )
            .then(function(response) {
                dispatch({
                    type: GET_CHATS,
                    senderId: userID,
                    chats: response.data
                });
            })
            .catch(function(error) {});
    };
};

export const getMsgs = (senderId, receiverId) => {
    return dispatch => {
        var msgs = [];
        axios
            .get(link + '/api/chats')
            .then(function(response) {
                dispatch({
                    type: GET_MSGS,
                    senderId: senderId,
                    receiverId: receiverId,
                    msgs: response.data
                });
            })
            .catch(function(error) {
                console.log('Error : sasasaffnasjfnaskjfasf ');
                console.log(error);
            });
    };
};

export const updateMsgs = (senderID,receiverID) => {
  return dispatch => {
      var msgs = [];
      axios.get(link + '/api/GetChatsBySR/' + senderID + '/' + receiverID )
          .then(function(response) {
              dispatch({
                  type: UPDATE_MSGS,
                  msgs: response.data
              });
          })
          .catch(function(error) {
              console.log('Error : sasasaffnasjfnaskjfasf ');
              console.log(error);
          });
  };
}

export const addMsg = (msg, senderId, receiverId) => {
    return dispatch => {
        var newMsg = {
            SenderId: senderId,
            ReceiverId: receiverId,
            Text: msg
        };

        if(receiverId != senderId){
          axios.post(link + '/api/chats', newMsg).then(function(response) {
                console.log(response);
                console.log('sent');

                dispatch({
                    type: ADD_MSG,
                    msg: msg,
                    results: response.data
                });

                getMsgs(senderId, receiverId);
            }).catch(function(error) {
                console.log('Error : safnasjfnaskjfasf ');
                console.log(error);
            });
          }else{

          }
    };
};
