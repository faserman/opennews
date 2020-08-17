import { SET_POSTS, SET_LOADED } from "./types";

export type Post = {
  id: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
  overview: string;
};

export type PostsState = {
  fetchedPosts: Post[];
  isLoaded: boolean
};

const initialState: PostsState = {
  fetchedPosts: [],
  isLoaded: false
};

export const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, fetchedPosts: action.payload };
    case SET_LOADED:
      return { ...state, isLoaded: true };
    default:
      return state;
  }
};
