import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFav, allUsers, loadUser, removeFav } from "../../redux/action/authAction";
import { getOps, getOpsbyId } from "../../redux/action/postAction";
import Comment from "../comment/Comment";
import { GoBookmark } from "react-icons/go";
import { Link } from "react-router-dom";
import { ADD_FAV_SUCCESS } from "../../redux/action/type";
import Report from "./Report";

const Posts = (props,{OnePost}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const PostList = useSelector((state) => state.PostReducer);
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const UserReducer = useSelector((state) => state.UserReducer);
  
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(loadUser());
      dispatch(getOps());
    }
    if (AuthReducer.error) {
      setErrors(AuthReducer.error);
      setTimeout(() => {
        setErrors(null);
      }, 3000);
    }
    dispatch(getOps());
    dispatch(allUsers());
  }, [AuthReducer.error]);

  return (
    <div style={{ marginTop: 30 }}>
      <Report handleClose={handleClose} show={show} post={PostList.filter((la) => la._id === props.match.params.id).map((eleee, i) => eleee._id)} />

      {PostList && PostList.filter((ell) => ell._id === props.match.params.id).map(
        (post, i) => (
          <Container key={i}>
            <Card>
              <Card.Header as="h5">{post.title}</Card.Header>
              <Row>
                <Col className="col-sm-2" style={{ textAlign: "center" }}>
                  <Card.Body>
                  <Card.Text onClick={handleShow} style={{ cursor: "pointer",color:'blue' }}><i className="fas fa-exclamation-triangle" ></i> Report this post</Card.Text>
                    <Card.Text>{post.comments.length}</Card.Text>
                    <Card.Text>answers</Card.Text>
                    <Card.Text>
                    {AuthReducer.isAuth ? (
                      <i
                      style={{cursor:'pointer'}}
                      onClick={() => {
                        if (
                          AuthReducer.user.favorites
                          .map((ela) => ela._id)
                          .includes(post._id) === false
                          ) {
                            dispatch(
                              addFav(AuthReducer.user._id, { _id: post._id })
                              );
                            } else {
                              dispatch(
                                removeFav(AuthReducer.user._id, { _id: post._id })
                                );
                              }
                            }}
                      >
                        {AuthReducer.user.favorites
                          .map((ela) => ela._id)
                          .includes(post._id) === false ? (
                          <i style={{cursor:'pointer'}} className="far fa-bookmark fa-2x"></i>
                        ) : (
                          <i style={{cursor:'pointer',color:"red"}} className="fas fa-bookmark fa-2x"></i>
                        )}{" "}
                      </i>
                    ) : (
                     <Link to="/login" style={{color:'black'}}> <i style={{cursor:'pointer'}} className="far fa-bookmark fa-2x"> </i></Link>
                    )}
                    {/* {errors && errors.map((el) => <h1>{el.msg}</h1>)} */}
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col className="col-sm-10">
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
              <Card.Footer className="text-muted">
                2 minutes ago || asked by{" "}
                {UserReducer &&
                  UserReducer.filter(
                    (user) => user._id === post.owner
                  ).map((xx, i) => <i key={i}>{xx.username}</i>)}{" "}
              </Card.Footer>
            </Card>
            <hr />
            {post.comments.map((ele, i) => (
              <Card style={{ margin: 20 }} key={i}>
                <Card.Header as="h6">
                  {UserReducer &&
                    UserReducer.filter(
                      (user) => user._id === ele.owner
                    ).map((xx, i) => <i key={i}>{xx.username}</i>)}
                    <i className="text-muted"> commented on {new Date(ele.updatedAt).toLocaleString()}</i>
                </Card.Header>
                <Row>
                  <Col className="col-sm-10">
                    <Card.Body>
                      <Card.Text>{ele.body}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
            <hr />
          </Container>
        )
      )}
      <Comment postli={PostList.filter((la) => la._id === props.match.params.id).map((eleee, i) => eleee._id)}/>
    </div>
  );
};

export default Posts;
