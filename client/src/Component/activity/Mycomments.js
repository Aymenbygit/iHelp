import React, { useEffect, useState } from "react";
import AcitivityLayout from "./AcitivityLayout";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/action/authAction";
import { getOps } from "../../redux/action/postAction";
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Mycomments = (props) => {
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
    <div>
      <div>
        <AcitivityLayout>
          {PostList &&
            PostList.map(
              (post, i) => (
                <Container key={i}>
                  <Card>
                    <Card.Header as="h5">{post.title} comments</Card.Header>
                    <Row>
                      <Col className="col-sm-2" style={{ textAlign: "center" }}>
                        <Card.Body>
                          <Card.Text>0</Card.Text>
                          <Card.Text>answers</Card.Text>
                          <Card.Text>
                            <i className="far fa-bookmark"></i>{" "}
                            <i className="fas fa-bookmark"></i>
                          </Card.Text>
                        </Card.Body>
                      </Col>
                      <Col className="col-sm-10">
                        <Card.Body>
                          <Card.Title>Special title treatment</Card.Title>
                          <Card.Text> {post.description.length > 150
                      ? post.description.slice(0, 150) + "... "
                      : post.description}
                    {post.description.length > 150 && (
                      <Link to={`/posts/${post._id}`}>read more</Link>
                    )}</Card.Text>
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
                    {post.comments
                      .filter((ell) => ell.owner === AuthReducer.user._id)
                      .map((ele, i) => (
                        <Card style={{ margin: 20 }} key={i}>
                          <Card.Header as="h6">
                            <i className="text-muted">
                              {" "}
                              commented {new Date(ele.updatedAt).toLocaleString()}
                            </i>
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
                  </Card>
                  <hr />
                </Container>
              )
            )}
        </AcitivityLayout>
      </div>
    </div>
  );
};

export default Mycomments;
