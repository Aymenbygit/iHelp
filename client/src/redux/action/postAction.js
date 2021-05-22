import {
  ADD_OP_SUCCESS,
  ADD_OP_FAIL,
  GET_OP_SUCCESS,
  DELETE_SUCCESS,
  EDIT_OP_SUCCESS,
  SAVED_OP,
  EDIT_OP_FAIL,
  GET_ONE_OP_SUCCESS,
  ADD_COM_SUCCESS,
  ADD_COM_FAIL,
  SEARCH_BY_TITLE_SUCCESS,
  SEARCH_BY_TITLE_FAIL,
} from "./type";
import axios from "axios";
import setToken from "../../setToken";

export const getOps = () => (dispatch) => {
  axios.get("/post/allposts").then((res) =>
    dispatch({
      type: GET_OP_SUCCESS,
      payload: res.data,
    })
  );
  // .catch((err) =>
  //   dispatch({
  //     type: GET_OP_FAIL,
  //     payload: err.response.data.errors,
  //   })
  // );
};
export const getOpsbyId = (_id) => (dispatch) => {
  axios.get(`/post/${_id}`).then((res) =>
    dispatch({
      type: GET_ONE_OP_SUCCESS,
      payload: res.data,
    })
  );
  // .catch((err) =>
  //   dispatch({
  //     type: GET_ONE_OP_FAIL,
  //     payload: err.response.data.errors,
  //   })
  // );
};

//get ops that i comment
export const getMyCom = () => (dispatch) => {
  axios.get("/post/mine").then((res) =>
    dispatch({
      type: "GET_MY_COM",
      payload: res.data,
    })
  );
  // .catch((err) =>
  //   dispatch({
  //     type: GET_OP_FAIL,
  //     payload: err.response.data.errors,
  //   })
  // );
};

export const addOps = (infos) => (dispatch) => {
  axios
    .post("/post/new_post", infos)
    .then((res) =>
      dispatch({
        type: ADD_OP_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_OP_FAIL,
        payload: err.response.data,
      })
    );
};

export const deleteOps = (id) => (dispatch) => {
  axios.delete(`/post/${id}`).then((res) => {
    dispatch({
      type: DELETE_SUCCESS,
      payload: res.data,
    });

    dispatch(getOps());
  });
};

export const editPost = (_id, info) => async (dispatch) => {
  setToken();
  axios.put(`/post/update/${_id}`, info).then((res) =>{
    dispatch({
      type: SAVED_OP,
      payload: res.data,
    })
    dispatch(getOps());
  }
  );
  
};
export const savePost = (infos) => (dispatch) => {
  axios
    .get("/post", infos)
    .then((res) => {
      dispatch({
        type: EDIT_OP_SUCCESS,
        payload: res.data,
      });
      dispatch(getOps());
    })
    .catch((err) =>
      dispatch({
        type: EDIT_OP_FAIL,
        // payload: err.response.data,
      })
    );
};
export const addCom = (_id, info) => (dispatch) => {
  setToken();
  axios
    .put(`/comment/add/${_id}`, info)
    .then((res) =>
      dispatch({
        type: ADD_COM_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_COM_FAIL,
        payload: err.response.data,
      })
    );
};

//To Search post by title
export const searchByTitle = (search) => (dispatch) => {
  axios
    .get("/post/search")
    .then((res) =>
      dispatch({
        type: SEARCH_BY_TITLE_SUCCESS,
        // payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: SEARCH_BY_TITLE_FAIL,
        payload: err.response.data.msg,
      });
    });
};
