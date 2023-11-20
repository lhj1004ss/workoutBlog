import { actionTypes } from '../constants/action'

export const initialState = {
  isLoggedInLoading: false,
  isLoggedInCompleted: false,
  isLoggedInError: null,

  isLoggedOutLoading: false,
  isLoggedOutCompleted: false,
  isLoggedOutError: null,

  isSignedUpLoading: false,
  isSignedUpCompleted: false,
  isSignedUpError: null,

  user: null,
  signUpData: {},
  loginData: {}
}
const dummyUser = (data) => ({
  ...data,
  username: 'hyojelee',
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [{
    username: 'random 1'
  }, { username: 'random 2' }
    , { username: 'random 3' }
  ],
  Followers: [{
    username: 'random 1'
  }, { username: 'random 2' }

  ]
})

export const loginRequestAction = (data) => {
  return {
    type: actionTypes.LOG_IN_REQUEST,
    data
  }
}
export const logoutRequestAction = () => {
  return {
    type: actionTypes.LOG_OUT_REQUEST,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN_REQUEST:
      return {
        ...state,
        isLoggedInLoading: true,
        isLoggedInError: null,
        isLoggedInCompleted: false,
      }
    case actionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedInLoading: false,
        isLoggedInCompleted: true,
        user: dummyUser(action.data),
      }
    case actionTypes.LOG_IN_FAILURE:
      return {
        ...state,
        isLoggedInLoading: false,
        isLoggedInError: action.error,
      }

    case actionTypes.LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedOutLoading: true,
        isLoggedOutCompleted: false,
        isLoggedOutError: null,
      }
    }
    case actionTypes.LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggedOutLoading: false,
        isLoggedOutCompleted: true,
        user: null,
      }
    }
    case actionTypes.LOG_OUT_FAILURE: {
      return {
        ...state,
        isLoggedOutLoading: false,
        isLoggedOutError: action.error,
      }
    }

    case actionTypes.SIGN_UP_REQUEST: {
      return {
        ...state,
        isSignedUpLoading: true,
        isSignedUpCompleted: false,
        isSignedUpError: null,
      }
    } case actionTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSignedUpLoading: false,
        isSignedUpCompleted: true,
      }
    } case actionTypes.SIGN_UP_FAILURE: {
      return {
        ...state,
        isSignedUpLoading: false,
        isSignedUpError: action.error,
      }
    }
    case actionTypes.ADD_POST_TO_USER: {
      return {
        ...state,

        user: {
          ...state.user,
          Posts: [{ id: action.data }, ...state.user.Posts],
        }
      }
    }

    default:
      return state;
  }
}

export default reducer