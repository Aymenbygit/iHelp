import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Form
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editPost, getOps, getOpsbyId } from "../../redux/action/postAction";
import {Link} from "react-router-dom"

const EditPost = (props) => {
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const SavedPost = useSelector((state) => state.SavedPost);
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const handleEditPost = () => {
    if (AuthReducer.isAuth) {
      if (post.description !== "") {
        dispatch(editPost(post._id, post));
      }
    }
  };
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(getOpsbyId(props.match.params.id));
      dispatch(getOps());
    }
    dispatch(getOps());
  }, [AuthReducer.isAuth,dispatch,props.match.params.id]);
  useEffect(() => {
    if (!SavedPost)
      setPost({
        title: "",
        description: "",
      });
    else setPost(SavedPost);
  }, [SavedPost]);
  return (
    <div>
      <Container>
        <Card>
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
            {post.description === "" ? (
              <Button
                style={{ cursor: "not-allowed" }}
                variant="primary"
                disabled
              >
                Save
              </Button>
            ) : (
              <Link onClick={() => window.history.back()}>
                <Button
                  style={{ cursor: "pointer" }}
                  variant="primary"
                  onClick={handleEditPost}
                >
                  Save
                </Button>
              </Link>
            )}
            &nbsp;
            <Button
              variant="info"
              onClick={() => setPost(SavedPost && SavedPost)}
            >
              Cancel
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default EditPost;
