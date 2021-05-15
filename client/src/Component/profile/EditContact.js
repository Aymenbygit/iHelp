import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUser } from "../../redux/action/authAction";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProfileLayout from "./ProfileLayout";

const EditContact = () => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <ProfileLayout>
      <div className="container">
        <h1 style={{ color: "grey" }}>Contact and Basic Info</h1>
        {AuthReducer.user && (
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
                      {AuthReducer.user.email}
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
        )}
      </div>
    </ProfileLayout>
  );
};

export default EditContact;
