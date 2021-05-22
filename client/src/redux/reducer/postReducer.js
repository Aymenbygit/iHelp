import { ADD_OP_SUCCESS ,GET_OP_FAIL,GET_OP_SUCCESS, DELETE_SUCCESS, EDIT_OP_SUCCESS,ADD_COM_FAIL, SEARCH_BY_TITLE_SUCCESS} from "../action/type";


const PostReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_BY_TITLE_SUCCESS :
    case GET_OP_SUCCESS:
      return action.payload;
    case GET_OP_FAIL:
      return action.payload;
    case ADD_OP_SUCCESS:
      return state.concat(action.payload);
      case EDIT_OP_SUCCESS:
        return state.map(el => el._id === action.payload._id ? action.payload : el )
      case DELETE_SUCCESS:
        return state;
      case ADD_COM_FAIL:
        return action.payload;  
    default:
      return state;
  }
};

export default PostReducer;
