import { combineReducers } from "redux";
import { postsReducer, PostsState } from "./postsReducer";
import { appReducer, AppState } from "./appReducer";

export type RootState = {
  posts: PostsState;
  app: AppState;
};

export const rootReducer = combineReducers<RootState>({
  posts: postsReducer,
  app: appReducer
});
