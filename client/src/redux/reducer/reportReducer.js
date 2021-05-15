import {
  GET_REPORT_SUCCESS,
  GET_REPORT_FAIL,
  ADD_REPORT_SUCCESS,
  ADD_REPORT_FAIL,
  GET_ONE_OP_SUCCESS,
  DEL_REPORT_SUCCESS,
  DEL_REPORT_FAIL
} from "../action/type";



const ReportReducer = (state = [] , action) => {
  switch (action.type) {
    case ADD_REPORT_SUCCESS:
    case ADD_REPORT_FAIL:
      return action.payload;
      // case GET_REPORT_FAIL:
    case GET_REPORT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default ReportReducer;
