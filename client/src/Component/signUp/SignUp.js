import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/action/authAction";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = ({ history }) => {
  const [infos, setinfos] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const handleChange = (e) => {
    setinfos({ ...infos, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const AuthReducer = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    if (AuthReducer.isAuth) {
      history.push("/posts");
    }
    if (AuthReducer.error) {
      setErrors(AuthReducer.error);
      setTimeout(() => {
        setErrors(null);
      }, 3000);
    }
  }, [AuthReducer.isAuth, AuthReducer.error,history]);

  const registerNow = (e) => {
    e.preventDefault();
    dispatch(registerUser(infos));
  };
  return (
    <div className='container' >
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Col  className="log_card col-lg-5">
            {" "}
            <Form onSubmit={registerNow}>
              <Form.Group style={{ textAlign: "center" }}>
                <h6>
                  <i
                    className="fas fa-lock"
                    style={{
                      backgroundColor: "#6AA4B0",
                      borderRadius: 50,
                      padding: 20,
                    }}
                  ></i>
                </h6>
                <Form.Label>
                  <h3>Sign Up</h3>{" "}
                </Form.Label>
              </Form.Group>
              
                <Form.Group >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    // required="required"
                    // pattern="[A-Za-z\s]+$"
                    className='col-12'
                    type="text"
                    placeholder="First Name???*"
                    name="first_name"
                    onChange={handleChange}
                  />
                  {errors &&
                    errors
                      .filter((em) => em.param === "first_name")
                      .map((el, i) => <span className='badge badge-danger' key={i}>{el.msg}</span> )}
                </Form.Group>
                <Form.Group >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    // required="required"
                    // pattern="[A-Za-z\s]+$"
                    type="text"
                    placeholder="Last Name???*"
                    name="last_name"
                    onChange={handleChange}
                  />
                  {errors &&
                    errors
                      .filter((em) => em.param === "last_name")
                      .map((el, i) => <span className='badge badge-danger' key={i}>{el.msg}</span>)}
                </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address *"
                  name="email"
                  onChange={handleChange}
                />
                {errors &&
                  errors
                    .filter((em) => em.param === "email")
                    .map((el, i) => <span className='badge badge-danger' key={i}>{el.msg}</span>)}
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password *"
                  name="password"
                  onChange={handleChange}
                />
                {errors &&
                  errors
                    .filter((em) => em.param === "password")
                    .map((el, i) => <span className='badge badge-danger' key={i}>{el.msg}</span>)}
              </Form.Group>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  // required="required"
                  type="text"
                  placeholder="Display name *"
                  name="username"
                  onChange={handleChange}
                />
                {errors &&
                  errors
                    .filter((em) => em.param === "username")
                    .map((el, i) => <span className='badge badge-danger' key={i}>{el.msg}</span>)}
              </Form.Group>
              <div style={{ textAlign: "center", marginTop: 50 }}>
                <Button variant="primary" type="submit" className="btn col-8">
                  Sign up
                </Button>
              </div>
            </Form>
            <br />
            <div className="gr27e container col-sm-11 ">
              <div className=" col-12">
                <p style={{ textAlign: "center"}}>
                  Have an account ? <Link to="/login">login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
