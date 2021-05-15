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
  }, []);

  return (
    <div>
      {MsgReducer &&
        MsgReducer.filter((el) => el._id == props.match.params.id).map(
          (msg, i) => (
            <Card key={i} className="col-4">
              <Card.Body>
                <Card.Title>{msg.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{msg.email}</ListGroupItem>
                <ListGroupItem>{msg.subject}</ListGroupItem>
                <ListGroupItem>{msg.subject}</ListGroupItem>
              </ListGroup>
            </Card>
          )
        )}
    </div>
  );
};

export default Msg;
