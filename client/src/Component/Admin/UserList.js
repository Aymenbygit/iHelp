import React, { useEffect } from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import { allUsers } from "../../redux/action/authAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const UserList = ({search,users}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);
  return (
    <div className="container ">
      {/* <Form inline>
        <InputGroup className="mr-sm-2 container" style={{ marginLeft: 15 }}>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className="fas fa-search"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="text" placeholder="Search a user" onChange={(e) =>search(e.target.value)}/>
        </InputGroup>
      </Form> */}
      <div className="row justify-content-md-center">
      <div className="col-lg-8 users_card" >
        {users &&
          users.map((user, i) => (
            <div className="col-lg-12 " key={i}>
              <Card style={{ margin: 5 }}>
                {/* <Card.Img variant="top" src="#" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title
                  </Card.Text>
                </Card.Body> */}
                <ListGroup className="list-group-flush">
                  <ListGroupItem>username:{user.username}</ListGroupItem>
                  <ListGroupItem>
                    {user.first_name} {user.last_name}
                  </ListGroupItem>
                  <ListGroupItem>{user.email}</ListGroupItem>
                </ListGroup>
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Link as={Link} to={`/user/${user._id}`}>
                    See full profile
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

export default UserList;
