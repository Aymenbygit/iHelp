import {GET_MSG_SUCCESS,ADD_MSG_SUCCESS} from "../action/type";
  
  
  
  const MsgReducer = (state = [] , action) => {
    switch (action.type) {
      case GET_MSG_SUCCESS:
      case ADD_MSG_SUCCESS:
        return action.payload;
      default:
        return state;
    }
  };
  
  export default MsgReducer;
  