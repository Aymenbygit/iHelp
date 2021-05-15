import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NewPost from "./NewPost";
import {
  loadUser,
  allUsers,
  addFav,
  removeFav,
} from "../../redux/action/authAction";
import { getOps, getOpsbyId } from "../../redux/action/postAction";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import Report from "./Report";

const PostsList = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const PostList = useSelector((state) => state.PostReducer);
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const UserReducer = useSelector((state) => state.UserReducer);
  const OnePost = useSelector((state) => state.OnePost);

  const [like, setLike] = useState(false);
  const [errors, setErrors] = useState(null);

  const toggleLike = () => {
    setLike(!like);
  };

  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(loadUser());
      dispatch(getOps());
    }
    dispatch(getOps());
    dispatch(allUsers());
  }, []);

  return (
    <div>
      <NewPost handleClose={handleClose} show={show} />
      {/* <Report handleClose={handleClose} show={show} post={PostList.map((eleee, i) => eleee._id)} /> */}

      {/* <center style={{ margin: 20 }}>
        <Button onClick={handleShow} variant="primary">
          Ask Question!
        </Button>
      </center> */}
      <Container>
        <h2 style={{ fontSize: 20 }}>{PostList.length} posts</h2>{" "}
      </Container>

      {PostList.map((el, i) => (
        <Container key={i}>
          <Card>
            <Card.Header as="h5">{el.title}</Card.Header>
            <Row>
              <Col className="col-lg-2" style={{ textAlign: "center" }}>
                <Card.Body>
                  <Card.Text
                    onClick={handleShow}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    <Link to={`/posts/${el._id}`} style={{ color:'blue'}}>
                      <i  className="fas fa-exclamation-triangle"></i> report
                      this
                    </Link>
                    
                  </Card.Text>
                  <Card.Text>
                    {el.comments.length} <span>comments</span>{" "}
                  </Card.Text>
                  <Card.Text></Card.Text>
                  <Card.Text>
                    {AuthReducer.user ? (
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
                              removeFav(AuthReducer.user._id, { _id: el._id })
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
                            style={{ cursor: "pointer",color:"red" }}
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
                UserReducer.filter(
                  (user) => user._id === el.owner
                ).map((ww, i) => <i key={i}>{ww.username}</i>)}{" "}
            </Card.Footer>
          </Card>
          <hr />
        </Container>
      ))}
    </div>
  );
};

export default PostsList;
