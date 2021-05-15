import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { addCom, getOpsbyId } from "../../redux/action/postAction";
import { allUsers, loadUser } from "../../redux/action/authAction";
import { getOps } from "../../redux/action/postAction";

const Comment = ({ postli, history, match }) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    body: "",
  });
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const PostList = useSelector((state) => state.PostReducer);
  // useEffect(() => {
  //   if (!AuthReducer.isAuth) {
  //     history.push("/login");
  //   }
  // }, []);

  const handleAdd = (e) => {
    if(post.body!==''){e.preventDefault();
    dispatch(addCom(postli, post));
    setPost({
      body: "",
    })
    dispatch(getOps());
  }else{
      alert('your comments is empty!')
    }
  };
  return (
    <div>
      <Container>
        Comments
        <Form.Group>
          <Form.Control
            as="textarea"
            cols="92"
            rows="10"
            type="text"
            placeholder="Comments"
            name="body"
            onChange={handleChange}
            value={post.body}
          />
        </Form.Group>
        <Button onClick={handleAdd}>
          Add a comment
        </Button>
      </Container>
    </div>
  );
};

export default Comment;
