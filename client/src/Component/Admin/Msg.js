import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  ListGroupItem,
  ListGroup
} from "react-bootstrap";
import { getMessages } from "../../redux/action/messageAction";

const Msg = (props) => {
  const dispatch = useDispatch();
  const MsgReducer = useSelector((state) => state.MsgReducer);
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <div className="msg_container">
    <div
      className="msg_left_nav "
      style={{
        color: "white",
        fontWeight: "300",
        borderBottom: "1px solid #353535",
      }}
    >
    </div>
    <div className="msg_right col-xl-9">
      {MsgReducer &&
        MsgReducer.filter((el) => el._id === props.match.params.id).map(
          (msg, i) => (
            <Card key={i} style={{ margin: 25 }}>
              <Card.Body>
                <Card.Title>Name : {msg.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Email : {msg.email}</ListGroupItem>
                <ListGroupItem>Subject : {msg.subject}</ListGroupItem>
                <ListGroupItem>Body : {msg.body}</ListGroupItem>
              </ListGroup>
            </Card>
          )
        )}
        </div>
    </div>
  );
};

export default Msg;
