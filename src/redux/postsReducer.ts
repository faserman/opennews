import { SET_POSTS } from "./types";

export type Post = {
  id: string;
  title: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
};

export type PostsState = {
  fetchedPosts: Post[];
};

const initialState: PostsState = {
  fetchedPosts: []
};

export const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, fetchedPosts: action.payload };
    default:
      return state;
  }
};
