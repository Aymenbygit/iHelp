import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import PostReducer from "./postReducer";
import UserReducer from "./userReducer";
import ReportReducer from "./reportReducer";
import OnePost from "./onePost";
import MsgReducer from "./msgReducer";
import MyComm from "./myCom";
import SavedPost from "./savedPost";

export default combineReducers({ AuthReducer,PostReducer,UserReducer,ReportReducer,OnePost,MsgReducer,MyComm,SavedPost });
