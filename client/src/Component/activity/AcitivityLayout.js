import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/action/authAction";
import { getOps } from "../../redux/action/postAction"; 
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

const AcitivityLayout = (props) => {
  const PostList = useSelector((state) => state.PostReducer);
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const UserReducer = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(loadUser());
      dispatch(getOps());
    }
  }, []);
  
  return (
    <div className="admin_container">
      <div
        className="admin_left_nav"
        style={{
          color: "white",
          fontWeight: "300",
          borderBottom: "1px solid #353535",
        }}
      >
        <Link to="/activity/my_posts" className="nav-link link_tag">
          My posts(0)
        </Link>
        <Link to="/activity/my_comments" className="nav-link link_tag">
          My Comments(0)
        </Link>
        <Link to="/activity/saved_posts" className="nav-link link_tag">
          Saved posts(0)
        </Link>
        <Link to="/activity/my_reactions" className="nav-link link_tag">
          Posts reaction top/flop
        </Link>
      </div>
      <div className="admin_right">{props.children}</div>
    </div>
  );
};

export default AcitivityLayout;
