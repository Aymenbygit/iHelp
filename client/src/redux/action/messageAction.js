import {GET_MSG_SUCCESS, ADD_MSG_SUCCESS, CANCEL} from "./type";
  import axios from "axios";
  import setToken from "../../setToken";
  
  export const getMessages = () => (dispatch) => {
    setToken();
    axios
      .get("/message/all_message")
      .then((res) =>
        dispatch({
          type: GET_MSG_SUCCESS,
          payload: res.data,
        })
      )
  };
  
  export const addMessage = (infos) => (dispatch) => {
    axios
      .post("/message/new_message", infos)
      .then((res) =>{
        dispatch({
          type: ADD_MSG_SUCCESS,
          payload: res.data,
        })
        dispatch({
          type: CANCEL,
          payload: res.data,
        });
      }
      )
  };

  export const deleteMsg = (id) => (dispatch) => {
    axios.delete(`/message/${id}`).then((res) =>{
      dispatch({
        type: 'DELETE_MSG_SUCCESS',
        payload: res.data,
      })
      dispatch(getMessages())}
      )
    
  };

//mark as read msg by id
  export const readMsg = (id) => (dispatch) => {
    axios.put(`/message/${id}`).then((res) =>{
      dispatch({
        type: 'READ_MSG_SUCCESS',
        payload: res.data,
      })
      dispatch(getMessages())}
      )
    
  };