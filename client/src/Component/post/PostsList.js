import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Spinner, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NewPost from "./NewPost";
import {
  loadUser,
  allUsers,
  addFav,
  removeFav,
} from "../../redux/action/authAction";
import {
  deleteOps,
  getOps,
  getOpsbyId,
  searchByTitle,
} from "../../redux/action/postAction";
import { Link } from "react-router-dom";
import Search from "./Search";
import PostPagination from './PostPagination'

const PostsList = ({search,postss}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const PostList = useSelector((state) => state.PostReducer);
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const UserReducer = useSelector((state) => state.UserReducer);

  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(loadUser());
      dispatch(getOps());
    }
    dispatch(getOps());
    dispatch(allUsers());
  }, [AuthReducer.isAuth, dispatch]);

  return (
    <div>
      <NewPost handleClose={handleClose} show={show} />
      <Container>
      <Form  className="search-title-form">
          <Form.Row>
            <Col xs={7}>
              <Form.Control
                type="text"
                name="title"
                onChange={(e) => search(e.target.value)}
                className="search-title-input"
                placeholder="Search by title..."
              />
            </Col>
          </Form.Row>
        </Form>
        <h2 style={{ fontSize: 20 }}>{postss.length} posts</h2>{" "}
      </Container>
      <PostPagination search={search} postss={postss} />
    </div>
  );
};

export default PostsList;
