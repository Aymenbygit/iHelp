import {GET_MSG_SUCCESS, ADD_MSG_SUCCESS} from "./type";
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
        dispatch(getMessages())
      }
      )
  };

  export const deleteMsg = (id) => (dispatch) => {
    axios.delete(`/post/${id}`).then((res) =>{
      dispatch({
        type: 'DELETE_MSG_SUCCESS',
        payload: res.data,
      })
      dispatch(getMessages())}
      )
    
  };
  
  