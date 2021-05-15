import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Container,
  CardDeck,
} from "react-bootstrap";
import { getMessages } from "../../redux/action/messageAction";
import { Link } from "react-router-dom";

const MsgList = () => {
  const dispatch = useDispatch();
  const MsgReducer = useSelector((state) => state.MsgReducer);
  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <div className="row">
      {MsgReducer &&
        MsgReducer.map((msg, i) => (
          <div className="col-4">
            <Card key={i} style={{ margin: 25 }}>
              <Card.Body>
                <Card.Title>{msg.subject}</Card.Title>
                <Card.Text>{msg.body}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{msg.email}</ListGroupItem>
                <ListGroupItem>{msg.name}</ListGroupItem>
              </ListGroup>
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Link as={Link} to={`/admin/message/${msg._id}`}>
                  See full message
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default MsgList;
