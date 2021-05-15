import {
  GET_REPORT_SUCCESS,
  GET_REPORT_FAIL,
  ADD_REPORT_SUCCESS,
  ADD_REPORT_FAIL,
  DEL_REPORT_SUCCESS,
  DEL_REPORT_FAIL,
} from "./type";
import axios from "axios";
import setToken from "../../setToken";
import { getOpsbyId } from "./postAction";
import { loadUser } from "./authAction";

export const getReports = () => (dispatch) => {
  // loadUser();
  // setToken();
  axios
    .get("/post/report/all_reports")
    .then((res) =>
      dispatch({
        type: GET_REPORT_SUCCESS,
        payload: res.data,
      })
    )
};

export const addReport = (_id, infos) => (dispatch) => {
  setToken();
  axios
    .post(`/post/report/new_report/${_id}`, infos)
    .then((res) =>
      dispatch({
        type: ADD_REPORT_SUCCESS,
        payload: res.data,
      })
    )
    // .catch((err) =>
    //   dispatch({
    //     type: ADD_REPORT_FAIL,
    //     payload: err.response.data.errors,
    //   })
    // );
};

export const deleteRaport = (_id) => (dispatch) => {
  setToken();
  axios
    .delete(`/post/report/delete/${_id}`)
    .then((res) =>
      dispatch({
        type: DEL_REPORT_SUCCESS,
      }),
      dispatch(getReports())
    )
    // .catch((err) =>
    //   dispatch({
    //     type: DEL_REPORT_FAIL,
    //     payload: err.response.data.msg,
    //   })
    // );
    
};
