export const initialState = {
  mainPosts:
    [{
      id: 1,
      User: { id: 1, username: "hyojelee" },
      content: "hello world",
      Images: [
        { src: ' image1' },
        { src: 'image2' },
        { src: 'image3' }
      ],
      Comments: [{
        User: { username: 'username2' },
        content: 'amazing!!!'
      }, {
        User: { username: 'username3' },
        content: 'awesome!!!'
      }],
    }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = "ADD_POST"
export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: 'dummy post',
  User: {
    id: 1,
    username: 'zero'
  },
  Images: [],
  Comments: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      }
    default:
      return state;
  }
}

export default reducer