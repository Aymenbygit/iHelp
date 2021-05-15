import React, { useEffect, useState } from "react";
import AcitivityLayout from "./AcitivityLayout";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/action/authAction";
import { getOps } from "../../redux/action/postAction"; 
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";

const MyPosts = (props) => {
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
      <AcitivityLayout>
      
        {PostList && PostList.filter((ell) => ell.owner === AuthReducer.user._id).map(
        (post, i) => (
          <Container key={i}>
            <Card>
              <Card.Header as="h5">{post.title}</Card.Header>
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
                  ||{post.comments.length} comments
              </Card.Footer>
            </Card>
            <hr/>
          </Container>
        )
      )}

      </AcitivityLayout>
    </div>
  );
};

export default MyPosts;
