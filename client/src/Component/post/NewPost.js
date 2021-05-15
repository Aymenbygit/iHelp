import React, { useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Container,
  Form,
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addOps } from "../../redux/action/postAction";

const NewPost = () => {
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    description: "",
    comment: [],
  });
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleAddPost = () => {if (AuthReducer.isAuth) {
    if(post.description!==''){
      dispatch(addOps(post));
    setPost({
      title: "",
      description: "",
      comment: [],
    });
    }
  } else {
    alert("Connect first (LINK TO LOGIN) ");
  }
  };
  return (
    <div>
      <Container>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="primary" eventKey="1">
                New post
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Form style={{ marginLeft: "5%", marginRight: "5%",marginBottom: "1%",marginTop: "1%" }}>
                <Form.Group>
                  <Form.Label as="h5">Title</Form.Label>
                  <Form.Control
                    placeholder="any question..."
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={post.title}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label as="h5">Body</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    type="text"
                    placeholder="description"
                    name="description"
                    onChange={handleChange}
                    value={post.description}
                  />
                </Form.Group>
                <Button
                  style={post.description==''?{cursor:"not-allowed"}:{cursor:"pointer"}}
                  variant="primary"
                  onClick={handleAddPost}
                >
                  {/* {post.description & post.title !=='' ? 'a':"b"} */}
                  Post
                </Button>
                &nbsp;
                <Button
                  variant="info"
                  onClick={() =>
                    setPost({
                      title: "",
                      description: "",
                      comment: [],
                    })
                  }
                >
                  Cancel
                </Button>
              </Form>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
      {/* <Modal className="col-sm-8" show={show} onHide={handleClose}>
        <Form>
          <Form.Group>
            <Form.Label as="h5">Title</Form.Label>
            <Form.Control
              placeholder="any question..."
              type="text"
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label as="h5">Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              type="text"
              placeholder="description"
              name="description"
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={() => {
              if (AuthReducer.isAuth) {
                handleClose();
                dispatch(addOps(post));
              } else {
                alert('Connect first (LINK TO LOGIN) ')
              }
            }}
          >
            Submit
          </Button>
          &nbsp;
          <Button variant="info" onClick={handleClose}>
            Cancel
          </Button>
        </Form>
      
      </Modal>
     */}
    </div>
  );
};

export default NewPost;