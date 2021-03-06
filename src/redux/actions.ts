import { 
  SHOW_LOADER,
  HIDE_LOADER, 
  SHOW_ALERT,
  HIDE_ALERT,
  REQUEST_NEW_POSTS, 
  SET_LOADED} from "./types";

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text: string) {
  return (dispatch: any) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 2000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function fetchPosts() {
  return {
    type: REQUEST_NEW_POSTS
  }
}

export function setLoaded() {
  return {
    type: SET_LOADED
  }
}