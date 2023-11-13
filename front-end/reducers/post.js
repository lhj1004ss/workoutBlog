import { actionTypes } from "../constants/action"
export const initialState = {
  mainPosts:
    [{
      id: 2,
      User: { id: 2, username: "diffent" },
      content: "initial dummy data #hash #hello #hi",
      Images: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Nagalapuram_Hill_Streams1.jpg/737px-Mapcarta.jpg" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Nagalapuram_Hill_Streams1.jpg/737px-Mapcarta.jpg" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Nagalapuram_Hill_Streams1.jpg/737px-Mapcarta.jpg" },
      ],
      Comments: [{
        User: { username: 'username2', id: 2 },
        content: 'amazing!!!'
      }, {
        User: { username: 'username3', id: 3 },
        content: 'awesome!!!'
      }],
    }],
  imagePaths: [],
  postAdded: false,
}

export const addPost = (data) => ({
  type: actionTypes.ADD_POST_REQUEST,
  data,
})

const dummyPost = {
  id: 2,
  content: 'duppy post',
  User: {
    id: 1,
    username: 'hyojelee'
  },
  Images: [],
  Comments: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST_REQUEST:

    case actionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      }

    case actionTypes.ADD_POST_FAILURE:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: false
      }
    default:
      return state;
  }
}

export default reducer