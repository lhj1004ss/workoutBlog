const initialState = {
  user: {
    isloggedIn: false,
    user: null,
    signUpData: {},
    loginData: {}
  },
  post: {
    mainPosts: [],
  }
}

// action creator
const editUsernameAction = (data) => {
  return {
    type: "EDIT_USERNAME",
    data
  }
}
export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data
  }
}
export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isloggedIn: true,
          user: action.data,
        }
      }
    case "LOG_OUT": {
      return {
        ...state,
        user: {
          ...state.user,
          isloggedIn: false,
          user: null
        }
      }
    }
  }
}
export default rootReducer