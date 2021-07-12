import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/action/postAction";
import Fade from "react-reveal/Fade";

const NewPost = () => {
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const [files, setFile] = useState([]);
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "gallery") {
      setFile(e.target.files);
    } else {
      setPost({ ...post, [e.target.name]: e.target.value });
    }
  };

  const [errors, setErrors] = useState(null);
  const handleAddPost = () => {
    if (AuthReducer.isAuth) {
      if (post.description !== "") {
        dispatch(addPost(post, files));
        setPost({
          title: "",
          description: "",
          gallery: "",
        });
      }
    } else {
      if (!AuthReducer.isAuth) {
        setErrors("Please login to add posts ");
        setTimeout(() => {
          setErrors(null);
        }, 4000);
      }
    }
  };

  const [fade, setFade] = useState(false);
  const handleFade = (e) => {
    setFade(!fade);
  };
  return (
    <div>
      <Container>
        <div>
          <button
            style={{marginTop:'20px',marginBottom:'20px'}}
            className="btn btn-primary"
            type="button"
            onClick={handleFade}
          >
            {fade ? (<>Cancel</> ):(<> <i className="fas fa-plus"></i> New Post</> )}
          </button>
          <Fade top opposite when={fade}>
          {fade && <Card  style={{marginBottom:'30px'}}>
              <Form
                style={{
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "1%",
                  marginTop: "1%",
                }}
              >
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
                  <Form.Label as="h5">Upload Images :</Form.Label>
                  <Form.Control
                    type="file"
                    name="gallery"
                    onChange={handleChange}
                    multiple
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
                <div>
                  {errors && (
                    <h6
                      className="badge badge-danger"
                      style={{ marginBottom: 20 }}
                    >
                      {errors}
                    </h6>
                  )}
                </div>
                {post.description === "" ? (
                  <Button
                    style={{ cursor: "not-allowed" }}
                    variant="primary"
                    onClick={handleAddPost}
                    disabled
                  >
                    Post
                  </Button>
                ) : (
                  <Button
                    style={{ cursor: "pointer" }}
                    variant="primary"
                    onClick={handleAddPost}
                  >
                    Post
                  </Button>
                )}
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
                  Reset
                </Button>
              </Form>
            </Card>}

            
          </Fade>
        </div>
        {/* <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="primary" eventKey="1">
                New post
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Form
                style={{
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "1%",
                  marginTop: "1%",
                }}
              >
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
                  <Form.Label as="h5">Upload Images :</Form.Label>
                  <Form.Control
                    type="file"
                    name="gallery"
                    onChange={handleChange}
                    multiple
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
                <div>
                  {errors && (
                    <h6
                      className="badge badge-danger"
                      style={{ marginBottom: 20 }}
                    >
                      {errors}
                    </h6>
                  )}
                </div>
                {post.description === "" ? (
                  <Button
                    style={{ cursor: "not-allowed" }}
                    variant="primary"
                    onClick={handleAddPost}
                    disabled
                  >
                    Post
                  </Button>
                ) : (
                  <Button
                    style={{ cursor: "pointer" }}
                    variant="primary"
                    onClick={handleAddPost}
                  >
                    Post
                  </Button>
                )}
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
        </Accordion> */}
      </Container>
    </div>
  );
};

export default NewPost;
