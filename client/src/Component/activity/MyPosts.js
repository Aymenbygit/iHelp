import React, { useEffect, useState } from "react";
import AcitivityLayout from "./AcitivityLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  addFav,
  allUsers,
  loadUser,
  removeFav,
} from "../../redux/action/authAction";
import { deleteOps, getOps, getOpsbyId } from "../../redux/action/postAction";
import {
  Card,
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import NewPost from "../post/NewPost";

const MyPosts = () => {
  const PostList = useSelector((state) => state.PostReducer);
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const UserReducer = useSelector((state) => state.UserReducer);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(loadUser());
      dispatch(allUsers());
      dispatch(getOps());
    }
  }, [AuthReducer.isAuth, dispatch]);

  return (
    <div>
      <AcitivityLayout>
        <NewPost />
        {AuthReducer.user &&
          PostList &&
          PostList.filter((ell) => ell.owner === AuthReducer.user._id)
            .length === 0 && (
            <Container>
              <h4 style={{ paddingTop: "20px" }}>No Posts Yet</h4>
            </Container>
          )}
        {AuthReducer.user &&
          PostList &&
          PostList.filter((ell) => ell.owner === AuthReducer.user._id).map(
            (post, i) => (
              <Container key={i} style={{ paddingTop: "20px" }}>
                <Card>
                  <Card.Header as="h5">
                    <Row>
                      <Col sm={10}>{post.title}</Col>
                      <Col sm={1}>
                        {
                          <DropdownButton
                            id="dropdown-button-drop-left"
                            key="left"
                            variant="secondary"
                            title=""
                          >
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(deleteOps(post._id));
                              }}
                            >
                              Delete
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                onClick={() => {
                                  dispatch(getOpsbyId(post._id));
                                }}
                                to={`/edit_post/${post._id}`}
                                style={{ color: "black" }}
                              >
                                Edit
                              </Link>
                            </Dropdown.Item>
                          </DropdownButton>
                        }
                      </Col>
                    </Row>
                  </Card.Header>
                  <Row>
                    <Col className="col-md-2" style={{ textAlign: "center" }}>
                      <Card.Body>
                        <Card.Text>
                          {AuthReducer.isAuth ? (
                            <i
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                if (
                                  AuthReducer.user.favorites
                                    .map((ela) => ela._id)
                                    .includes(post._id) === false
                                ) {
                                  dispatch(
                                    addFav(AuthReducer.user._id, {
                                      _id: post._id,
                                    })
                                  );
                                } else {
                                  dispatch(
                                    removeFav(AuthReducer.user._id, {
                                      _id: post._id,
                                    })
                                  );
                                }
                              }}
                            >
                              {AuthReducer.user.favorites
                                .map((ela) => ela._id)
                                .includes(post._id) === false ? (
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
                          {/* {errors && errors.map((el) => <h1>{el.msg}</h1>)} */}
                        </Card.Text>
                      </Card.Body>
                    </Col>
                    <Col className="col-sm-10">
                      <Card.Body>
                <Card.Title> {post.gallery.length} <i class="fas fa-paperclip"></i> attachment</Card.Title>
                        <Card.Text>
                          {" "}
                          {post.description.length > 150
                            ? post.description.slice(0, 150) + "... "
                            : post.description}
                          {post.description.length > 150 && (
                            <Link to={`/posts/${post._id}`}>read more</Link>
                          )}
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                  <Card.Footer className="text-muted">
                    {new Date(post.created_at).toLocaleString()} || asked by{" "}
                    {UserReducer &&
                      UserReducer.filter((user) => user._id === post.owner).map(
                        (xx, i) => (
                          <Link to={`/user/${xx._id}`} key={i}>
                            {xx.username}
                          </Link>
                        )
                      )}{" "}
                    ||
                    <Link to={`/posts/${post._id}`}>
                      {post.comments.length} comments
                    </Link>
                  </Card.Footer>
                </Card>
                <hr />
              </Container>
            )
          )}
      </AcitivityLayout>
    </div>
  );
};

export default MyPosts;
