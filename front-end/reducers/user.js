
export const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  isLoggingOut: false,
  user: null,
  signUpData: {},
  loginData: {}
}
// action creator
const editUsernameAction = (data) => {
  return {
    type: "EDIT_USERNAME",
    data
  }
}

export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data
  }
}
export const logoutRequestAction = () => {
  return {
    type: 'LOG_OUT_REQUEST',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...state,
        isLoggingIn: true,
      }
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        user: { ...action.data, username: "hyoje lee test" },
      }
    case "LOG_IN_FAILURE":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      }

    case "LOG_OUT_REQUEST": {
      return {
        ...state,
        isLoggingOut: true,
        user: null
      }
    }
    case "LOG_OUT_SUCCESS": {
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
      }
    }
    case "LOG_OUT_FAILURE": {
      return {
        ...state,
        isLoggingOut: false,
      }
    }

    default:
      return state;
  }
}

export default reducer