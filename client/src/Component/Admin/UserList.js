import React, { useEffect, useState } from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Container,
  CardDeck,
  InputGroup,
  Form,
  FormControl,
} from "react-bootstrap";
import { allUsers } from "../../redux/action/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const UserReducer = useSelector((state) => state.UserReducer);
  useEffect(() => {
    dispatch(allUsers());
  }, []);
  return (
    <div>
      <Form inline>
        <InputGroup className="mr-sm-2 container" style={{ marginLeft: 15 }}>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className="fas fa-search"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Search" />
        </InputGroup>
      </Form>
      <div className="row" style={{ width: "90%", marginLeft: 15 }}>
        {UserReducer &&
          UserReducer.map((user, i) => (
            <div className="col-xl-2">
              <Card key={i} style={{ margin: 5 }}>
                <Card.Img variant="top" src="#" />
                <Card.Body>
                  <Card.Title>{user.type}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{user.username}</ListGroupItem>
                  <ListGroupItem>
                    {user.first_name} {user.last_name}
                  </ListGroupItem>
                  <ListGroupItem>{user.email}</ListGroupItem>
                </ListGroup>
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Link as={Link} to={`/user/${user._id}`}>See full profile</Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
