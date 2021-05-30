import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Dropdown,
  DropdownButton,
  Container,
} from "react-bootstrap";
import { getMessages } from "../../redux/action/messageAction";
import { Link } from "react-router-dom";

const MsgList = () => {
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
      ></div>
      <div className="msg_right col-xl-9">
        <div className="">
          <Container>
            <DropdownButton
              title={<i className="fas fa-filter">Filter</i>}
              id="bg-nested-dropdown"
              style={{paddingTop:"30px"}}
            >
              <Dropdown.Item eventKey="1">
                <div>All</div>
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">
                <div>Read</div>
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">
                <div>Unread</div>
              </Dropdown.Item>
            </DropdownButton>
          </Container>
          {MsgReducer &&
            MsgReducer.map((msg, i) => (
              <div key={i} >
                <Card  style={{ margin: 25 }}>
                  <Card.Body>
                    <Card.Title>{msg.subject}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{msg.body}</ListGroupItem>
                    <ListGroupItem>{msg.name}</ListGroupItem>
                    <ListGroupItem>{msg.email}</ListGroupItem>
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
      </div>
    </div>
  );
};

export default MsgList;
