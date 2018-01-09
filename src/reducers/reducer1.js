export const THE_ALERT = 'reducers1/THE_ALERT'

const initialState = {
  text: "Hello, Hi"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case THE_ALERT:
      return {
        ...state
      }

    default:
      return state
  }
}

export const alert = () => {
  return dispatch => {
    dispatch({
      type: THE_ALERT
    })
  }
}
