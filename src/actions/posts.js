import * as api from "../api";

// action creators - function that returns an action
// redux thunk
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
}