import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form } from "react-bootstrap";
import { addCom } from "../../redux/action/postAction";
import { getOps } from "../../redux/action/postAction";
import { Link } from "react-router-dom";

const Comment = ({ postli }) => {
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    body: "",
  });
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    if (post.body !== "") {
      e.preventDefault();
      dispatch(addCom(postli, post));
      setPost({
        body: "",
      });
      dispatch(getOps());
    } else {
      alert("your comments is empty!");
    }
  };
  return (
    <div>
      
      <Container>
        <Form.Group>
          <Form.Control
            as="textarea"
            cols="92"
            rows="10"
            type="text"
            placeholder="write a  comment..."
            name="body"
            onChange={handleChange}
            value={post.body}
          />{" "}
        </Form.Group>{" "}
        {AuthReducer.isAuth ? (
          <button class="buton-gradyan btn btn-hover" onClick={handleAdd}>
            Add a comment
          </button>
        ) : (
          <Link to="/login">
            <button class="buton-gradyan btn btn-hover">Add a comment</button>
          </Link>
        )}
      </Container>{" "}
    </div>
  );
};

export default Comment;
