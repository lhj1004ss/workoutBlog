import { actionTypes } from "../constants/action"
import shortId from 'shortid'

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

  isPostAddedLoading: false,
  isPostAddedCompleted: false,
  isPostAddedError: null,

  isCommentAddedLoading: false,
  isCommentAddedCompleted: false,
  isCommentAddedError: null,
}

export const addPost = (data) => ({
  type: actionTypes.ADD_POST_REQUEST,
  data,
})

const dummyPost = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    username: 'hyojelee'
  },
  Images: [],
  Comments: []
})

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    username: 'hyoje lee comment'
  }
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // post
    case actionTypes.ADD_POST_REQUEST:
      return {
        ...state,
        isPostAddedLoading: true,
        isPostAddedCompleted: false,
        isPostAddedError: null,
      }

    case actionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        isPostAddedLoading: false,
        isPostAddedCompleted: true,
      }

    case actionTypes.ADD_POST_FAILURE:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        isPostAddedLoading: false,
        isPostAddedError: action.error,
      }

    // comment
    case actionTypes.ADD_COMMENT_REQUEST:
      return {
        ...state,
        isCommentAddedLoading: true,
        isCommentAddedCompleted: false,
        isCommentAddedError: null,
      }
    case actionTypes.ADD_COMMENT_SUCCESS:
      const postIdx = state.mainPosts.findIndex((v) => v.id === action.data.postId);
      const post = { ...state.mainPosts[postIdx] }
      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIdx] = post;

      return {
        ...state,
        mainPosts,
        isCommentAddedLoading: false,
        isCommentAddedCompleted: true,
      }
    case actionTypes.ADD_COMMENT_FAILURE:
      return {
        ...state,
        mainPosts: [dummyComment, ...post.Comments],
        isCommentAddedLoading: false,
        isCommentAddedError: action.error,
      }
    default:
      return state;
  }
}

export default reducer