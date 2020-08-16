import { FETCH_POSTS } from "./types"

const initialState = {
  fetchedPosts: []
}

export const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_POSTS:
      return{...state, fetchedPosts: action.payload}
    default: return state
  }
}