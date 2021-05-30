import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Spinner } from "react-bootstrap";
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

const PostsList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const PostList = useSelector((state) => state.PostReducer);
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const UserReducer = useSelector((state) => state.UserReducer);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const searchNow = (e) => {
    e.preventDefault();
    dispatch(searchByTitle(search));
  };

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
        <Search />
        <h2 style={{ fontSize: 20 }}>{PostList.length} posts</h2>{" "}
      </Container>
      <PostPagination/>
      {/* {PostList ? (
        PostList.map((el, i) => (
          <Container key={i}>
            <Card>
              <Card.Header as="h5">
                <Row>
                  <Col sm={11}>{el.title}</Col>
                  {AuthReducer.user &&
                  AuthReducer.user.type &&
                  AuthReducer.user.type === true ? (
                    <Col sm={1}>
                      {
                        <i
                          style={{ cursor: "pointer" }}
                          className="fas fa-trash-alt"
                          onClick={() => {
                            dispatch(deleteOps(el._id));
                          }}
                        ></i>
                      }
                    </Col>
                  ) : (
                    ""
                  )}
                </Row>
              </Card.Header>
              <Row>
                <Col className="col-lg-2" style={{ textAlign: "center" }}>
                  <Card.Body>
                    <Card.Text style={{ cursor: "pointer", color: "blue" }}>
                      <i className="fas fa-exclamation-triangle"></i> Report
                      this post
                    </Card.Text>
                    <Card.Text>
                      {el.comments.length} <span>comments</span>{" "}
                    </Card.Text>
                    <Card.Text></Card.Text>
                    <Card.Text>
                      {AuthReducer.user ? (
                        AuthReducer.user.favorites && (
                          <i
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              if (
                                AuthReducer.user.favorites
                                  .map((ela) => ela._id)
                                  .includes(el._id) === false
                              ) {
                                dispatch(
                                  addFav(AuthReducer.user._id, { _id: el._id })
                                );
                              } else {
                                dispatch(
                                  removeFav(AuthReducer.user._id, {
                                    _id: el._id,
                                  })
                                );
                              }
                            }}
                          >
                            {AuthReducer.user.favorites
                              .map((ela) => ela._id)
                              .includes(el._id) === false ? (
                              <i
                                style={{ cursor: "pointer" }}
                                className="far fa-bookmark fa-2x"
                              ></i>
                            ) : (
                              <i
                                style={{ cursor: "pointer", color: "red" }}
                                className="fas fa-bookmark fa-2x"
                              ></i>
                            )}{" "}
                          </i>
                        )
                      ) : (
                        <Link to="/login" style={{ color: "black" }}>
                          {" "}
                          <i
                            style={{ cursor: "pointer" }}
                            className="far fa-bookmark fa-2x"
                          >
                            {" "}
                          </i>
                        </Link>
                      )}
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col className="col-sm-10">
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      {el.description.length > 150
                        ? el.description.slice(0, 150) + "... "
                        : el.description}
                      {el.description.length > 150 && (
                        <Link to={`/posts/${el._id}`}>read more</Link>
                      )}
                    </Card.Text>
                    <Link to={`/posts/${el._id}`}>
                      <Button
                        variant="primary"
                        onClick={() => {
                          dispatch(getOpsbyId(el._id));
                        }}
                      >
                        <i className="far fa-comment-alt"></i> Comment
                      </Button>
                    </Link>
                  </Card.Body>
                </Col>
              </Row>
              <Card.Footer className="text-muted">
                {new Date(el.created_at).toLocaleString()} || asked by{" "}
                {UserReducer &&
                  UserReducer.filter((user) => user._id === el.owner).map(
                    (ww, i) => (
                      <Link to={`/user/${ww._id}`} key={i}>
                        <i key={i}>{ww.username}</i>
                      </Link>
                    )
                  )}{" "}
              </Card.Footer>
            </Card>
            <hr />
          </Container>
        ))
      ) : (
        <div className="spinner-div">
          <Spinner animation="border" variant="primary" />
        </div>
      )} */}
    </div>
  );
};

export default PostsList;
