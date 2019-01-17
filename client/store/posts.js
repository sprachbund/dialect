import axios from 'axios'
import history from '../history'

/** ACTION TYPES **/
const GET_POSTS = 'GET_POSTS'

/** INITIAL STATE **/
const defaultPosts = [{content: '', tags: []}]

/** ACTION CREATORS **/
const getPosts = posts => ({type: GET_POSTS, posts})

/** THUNKS **/
export const getAllPosts = () => async dispatch => {
  try {
    const res = await axios.get('api/posts')
    dispatch(getPosts(res.data || defaultPosts))
  } catch (error) {
    console.error(error)
  }
}

/** REDUCER **/
export default function(state = defaultPosts, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts
    default:
      return state
  }
}
