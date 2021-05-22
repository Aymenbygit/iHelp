import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import { addCom } from "../../redux/action/postAction";
import { getOps } from "../../redux/action/postAction";

const Comment = ({ postli}) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    body: "",
  });
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

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
