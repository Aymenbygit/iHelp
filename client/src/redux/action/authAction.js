import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
  EDIT_SUCCESS,
  EDIT_FAIL,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  ALL_USERS_SUCCESS,
  ADD_FAV_FAIL,
  ADD_FAV_SUCCESS,
  REMOVE_FAV_SUCCESS,
  GET_USER_SUCCESS,
} from "./type";
import axios from "axios";
import setToken from "../../setToken";

export const registerUser = (infos) => (dispatch) => {
  axios
    .post("/register", infos)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errors,
      })
    );
};

export const allUsers = () => (dispatch) => {
  axios.get("/login/allusers").then((res) =>
    dispatch({
      type: ALL_USERS_SUCCESS,
      payload: res.data,
    })
  );
};

export const getUser = (_id) => (dispatch) => {
  axios.get(`/login/user/${_id}`).then((res) =>
    dispatch({
      type: GET_USER_SUCCESS,
      payload: res.data,
    })
  );
};

export const loadUser = () => (dispatch) => {
  setToken();
  axios
    .get("/login")
    .then((res) =>
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOAD_USER_FAIL,
        payload: err.response.data.errors,
      })
    );
};

export const loginUser = (data) => (dispatch) => {
  axios
    .post("/login", data)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.errors,
      })
    );
};

export const editUser = (_id, infos) => async (dispatch) => {
  axios
    .put(`/profile/${_id}`, infos)
    .then((res) => {
      dispatch({
        type: EDIT_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    })
    .catch((err) => {
      dispatch({
        type: EDIT_FAIL,
        payload: err.response.data.errors,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
export const deleteUser = (_id) => async (dispatch) => {
  // setToken();
  axios
    .delete(`/profile/${_id}`)
    .then((res) => {
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: err.response.data.errors,
      });
    });
};

export const addFav = (user_id, _id) => async (dispatch) => {
  // setToken();
  axios
    .put(`/profile/addfavorites/${user_id}`, _id)
    .then((res) => {
      dispatch({
        type: ADD_FAV_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    })
    .catch((res) => {
      dispatch({
        type: ADD_FAV_FAIL,
      });
    });
};

export const removeFav = (user_id, _id) => async (dispatch) => {
  // setToken();
  axios
    .put(`/profile/removefavorites/${user_id}`, _id)
    .then((res) => {
      dispatch({
        type: REMOVE_FAV_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    })
    .catch((res) => {
      dispatch({
        type: ADD_FAV_FAIL,
      });
    });
};
