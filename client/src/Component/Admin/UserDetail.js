import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import { useDispatch, useSelector } from "react-redux";
import { Card, ListGroupItem, ListGroup, Container } from "react-bootstrap";
import ProfileLayout from "../profile/ProfileLayout";
import { Link } from "react-router-dom";
import { allUsers } from "../../redux/action/authAction";

const UserDetail = (props) => {
  const UserReducer = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsers());
  }, []);
  return (
    <div className="admin_container">
      <div
        className="admin_left_nav"
        style={{
          color: "white",
          fontWeight: "300",
          borderBottom: "1px solid #353535",
        }}
      >
        <p
          className="nav-link link_tag"
          style={{ textAlign: "center", margin: 70, color: "grey" }}
        >
          User account
        </p>
        <hr />
      </div>
      <div className="admin_right">
        {UserReducer &&
          UserReducer.filter((el) => el._id == props.match.params.id).map(
            (user, i) => (
              <>
                <h1 style={{ color: "grey" }}>Personal Information</h1>

                <div className="row">
                  <div className="col-lg-6">
                    <table className="table ">
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "left" }}>First name :</td>
                          <td style={{ textAlign: "left", fontWeight: "bold" }}>
                            {user.first_name}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>Last name :</td>
                          <td style={{ textAlign: "left", fontWeight: "bold" }}>
                            {user.last_name}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>Birth Day :</td>
                          <td style={{ textAlign: "left", fontWeight: "bold" }}>
                            Birth Day
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>Gender :</td>
                          <td style={{ textAlign: "left", fontWeight: "bold" }}>
                            Gender
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>About You :</td>
                          <td style={{ textAlign: "left", fontWeight: "bold" }}>
                            About You
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <h1 style={{ color: "grey" }}>Work and Education</h1>
                <div className="row">
                  <div className="col-lg-6">
                    <table className="table ">
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "left" }}>College :</td>
                          <td style={{ textAlign: "left", fontWeight: "bold" }}>
                            {user.first_name}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>High School :</td>
                          <td style={{ textAlign: "left", fontWeight: "bold" }}>
                            {user.last_name}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>Work :</td>
                          <td style={{ textAlign: "left", fontWeight: "bold" }}>
                            {user.birth_day}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>Other :</td>
                          <td style={{ textAlign: "left", fontWeight: "bold" }}>
                            {user.adress}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>Phone :</td>
                          <td style={{ textAlign: "left", fontWeight: "bold" }}>
                            {user.phone}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>Email :</td>
                          <td style={{ textAlign: "left", fontWeight: "bold" }}>
                            {user.email}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
        <h1 style={{ color: "grey" }}>Contact and Basic Info</h1>

                <div className="row">
            <div className="col-lg-6">
              <table className="table ">
                <tbody>
                  <tr>
                    <td style={{ textAlign: "left" }}>Phone :</td>
                    <td style={{ textAlign: "left", fontWeight: "bold" }}>
                    Phone
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>Email :</td>
                    <td style={{ textAlign: "left", fontWeight: "bold" }}>
                      {user.email}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>LinkedIn :</td>
                    <td style={{ textAlign: "left", fontWeight: "bold" }}>
                    LinkedIn
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>Facebook :</td>
                    <td style={{ textAlign: "left", fontWeight: "bold" }}>
                    Facebook
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>github :</td>
                    <td style={{ textAlign: "left", fontWeight: "bold" }}>
                    github
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>Adress :</td>
                    <td style={{ textAlign: "left", fontWeight: "bold" }}>
                    Adress
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link to="/profile/edit_profile" style={{ textAlign: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <button className="col-sm-10 btn btn-secondary">
                    <i className="fas fa-user-edit"></i>&nbsp;&nbsp; Edit
                  </button>
                </div>
              </Link>
            </div>
          </div>
              </>
            )
          )}
      </div>
    </div>
  );
};

export default UserDetail;
