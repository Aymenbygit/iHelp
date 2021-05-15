import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUser } from "../../redux/action/authAction";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProfileLayout from "./ProfileLayout";

const EditEducation = () => {
    const dispatch = useDispatch();
    const AuthReducer = useSelector((state) => state.AuthReducer);
    useEffect(() => {
      dispatch(loadUser());
    }, []);
    return (
      <ProfileLayout>
        <div className="container">
          <h1 style={{ color: "grey" }}>Work and Education</h1>
          {AuthReducer.user && (
            <div className="row">
              <div className="col-lg-6">
                <table className="table ">
                  <tbody>
                    <tr >
                      <td style={{ textAlign: "left" }}>College :</td>
                      <td style={{ textAlign: "left", fontWeight: "bold" }}>
                        {AuthReducer.user.first_name}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>High School :</td>
                      <td style={{ textAlign: "left", fontWeight: "bold" }}>
                        {AuthReducer.user.last_name}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>Work :</td>
                      <td style={{ textAlign: "left", fontWeight: "bold" }}>
                        {AuthReducer.user.birth_day}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>Other :</td>
                      <td style={{ textAlign: "left", fontWeight: "bold" }}>
                        {AuthReducer.user.adress}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>Phone :</td>
                      <td style={{ textAlign: "left", fontWeight: "bold" }}>
                        {AuthReducer.user.phone}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>Email :</td>
                      <td style={{ textAlign: "left", fontWeight: "bold" }}>
                        {AuthReducer.user.email}
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
}

export default EditEducation
