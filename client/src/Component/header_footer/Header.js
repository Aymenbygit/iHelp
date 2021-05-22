import React, { useEffect } from "react";
import {
  Navbar,
  FormControl,
  Button,
  Form,
  NavDropdown,
  Nav,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logoutUser } from "../../redux/action/authAction";

const Header = ({ search }) => {
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(loadUser());
    }
  }, [AuthReducer.isAuth,dispatch]);

  if (!AuthReducer.user) {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "#D4F1F4" }}
          expand="lg"
          className="header__"
        >
          <Navbar.Brand>
            <i className="user_name">public</i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/posts">
                Posts
              </Nav.Link>
              <Nav.Link as={Link} to="/users">
                Users
              </Nav.Link>
              <Nav.Link as={Link} to="/contactUs">
                Contact
              </Nav.Link>
              
              <NavDropdown title="Help">
                <NavDropdown.Item as={Link} to="/helpcenter">
                  Help center
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/aboutUs">
                  About Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <InputGroup className="mr-sm-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="fas fa-search"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Search" onChange={(e) => search(e.target.value)} type="text"/>
              </InputGroup>
            </Form>

            <Form inline>
              <Link to="/login" className="navTab" style={{ paddingRight: 6 }}>
                <Button variant="primary">Sign in</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline-primary">Sign Up</Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  } else if (AuthReducer.user.type === false) {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "#D4F1F4" }}
          expand="lg"
          className="header__"
        >
          <Navbar.Brand>
            <i className="user_name">
              login as,{AuthReducer && AuthReducer.user.username}
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/posts">
                Posts
              </Nav.Link>
              <Nav.Link as={Link} to="/users">
                Users
              </Nav.Link>
              <NavDropdown title="Profile">
                <NavDropdown.Item
                  as={Link}
                  to="/profile/user/personal_information"
                >
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/activity">
                  My Activity
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Help">
                <NavDropdown.Item as={Link} to="/helpcenter">
                  Help center{" "}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/aboutUs">
                  About Us{" "}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contactUs">
                Contact
              </Nav.Link>
            </Nav>
            <Form inline>
              <InputGroup className="mr-sm-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="fas fa-search"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Search" onChange={(e) => search(e.target.value)} type="text"/>
              </InputGroup>
            </Form>

            <Form inline>
              {AuthReducer.isAuth ? (
                <>
                  <Button
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                    variant="primary"
                  >
                    <i className="fas fa-sign-out-alt"></i>Log out
                  </Button>
                </>
              ) : (
                <Link to="/login" className="nav-link navTab">
                  <Button variant="primary">Sign in</Button>
                </Link>
              )}
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  if (AuthReducer.user.type === true) {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "#D4F1F4" }}
          expand="lg"
          className="header__"
        >
          <Navbar.Brand>
            <i className="user_name">
              login as,{AuthReducer && AuthReducer.user.username}
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/posts">
                Posts
              </Nav.Link>
              <Nav.Link as={Link} to="/users">
                Users
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/reports">
                Reports
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/messages">
                Messages
              </Nav.Link>
              <NavDropdown title="Profile">
                <NavDropdown.Item as={Link} to="/profile/user/personal_information">
                  My Profile
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <InputGroup className="mr-sm-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="fas fa-search"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Search" onChange={(e) => search(e.target.value)} type="text"/>
              </InputGroup>
            </Form>

            <Form inline>
              {AuthReducer.isAuth ? (
                <Button
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                  variant="primary"
                >
                  <i className="fas fa-sign-out-alt"></i>Log out
                </Button>
              ) : (
                <Link to="/login" className="nav-link navTab">
                  <Button variant="primary">Sign in</Button>
                </Link>
              )}
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};

export default Header;
