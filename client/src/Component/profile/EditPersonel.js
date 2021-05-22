import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, loadUser } from "../../redux/action/authAction";
import ProfileLayout from "./ProfileLayout";

const EditPersonel = () => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [info, setInfo] = useState({
    first_name: "",
    last_name: "",
    Birth_day: "",
    gender: "",
    bio: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const update = (e) => {
    setToggleEdit(!toggleEdit);
  };
  const CancelEdit = () => {
    update();
    if (!AuthReducer.user)
      setInfo({
        first_name: "",
        last_name: "",
        Birth_day: "",
        gender: "",
        bio: "",
      });
    else setInfo(AuthReducer.user);
  };

  const updateNow = (e) => {
    e.preventDefault();
    dispatch(editUser(AuthReducer.user._id, info));
    update();
  };

  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(loadUser());
    }
  }, [AuthReducer.isAuth,dispatch]);

  useEffect(() => {
    if (!AuthReducer.user)
      setInfo({
        first_name: "",
        last_name: "",
        Birth_day: "",
        gender: "",
        bio: "",
      });
    else setInfo(AuthReducer.user);
  }, [AuthReducer.user]);
  return (
    <ProfileLayout>
      <div className="container">
        {/* <img src={Pic} style={{opacity:0.6,backgroundRepeat:'no-repeat',backgroundSize:"cover"}} /> */}
        <h1 style={{ color: "grey" }}>Personal Information</h1>
        {!toggleEdit ? (
          AuthReducer.user && (
            <div className="row">
              <div className="col-lg-6">
                <table className="table ">
                  <tbody>
                    <tr>
                      <td xs={6}>First name :</td>
                      <td style={{ fontWeight: "bold" }}>
                        {AuthReducer.user.first_name}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>Last name :</td>
                      <td style={{ textAlign: "left", fontWeight: "bold" }}>
                        {AuthReducer.user.last_name}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>Birth Day :</td>
                      <td style={{ textAlign: "left", fontWeight: "bold" }}>
                        {AuthReducer.user.Birth_day}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>Gender :</td>
                      <td style={{ textAlign: "left", fontWeight: "bold" }}>
                        {AuthReducer.user.gender}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>About You :</td>
                      <td style={{ textAlign: "left", fontWeight: "bold" }}>
                        {AuthReducer.user.bio}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ textAlign: "center" }}>
                  <button
                    className="col-sm-10 btn btn-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      update();
                    }}
                  >
                    <i className="fas fa-user-edit"></i>&nbsp;&nbsp; Edit
                  </button>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="row">
            <div className="col-lg-6">
              <table className="table ">
                <tbody>
                  <tr>
                    <td>First name :</td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        name="first_name"
                        value={info.first_name}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>Last name :</td>
                    <td style={{ textAlign: "left", fontWeight: "bold" }}>
                      <input
                        className="form-control"
                        type="text"
                        name="last_name"
                        value={info.last_name}
                        onChange={handleChange}
                      />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>Birth Day :</td>
                    <td style={{ textAlign: "left", fontWeight: "bold" }}>
                      <input
                        className="form-control"
                        type="date"
                        name="Birth_day"
                        value={info.Birth_day}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>Gender :</td>
                    <td style={{ textAlign: "left", fontWeight: "bold" }}>
                      <select
                        className="form-control"
                        value={info.gender}
                        name="gender"
                        onChange={handleChange}
                      >
                        <option value="">--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {/* <input
                        className="form-control"
                        type="text"
                        name="gender"
                        value={info.gender}
                        onChange={handleChange}
                      /> */}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>About You :</td>
                    <td style={{ textAlign: "left", fontWeight: "bold" }}>
                      <textarea
                        rows="5"
                        className="form-control"
                        type="text"
                        name="bio"
                        value={AuthReducer.user && info.bio}
                        onChange={handleChange}
                      />{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{ textAlign: "center" }}>
                <button
                  className="col-sm-5 btn btn-primary"
                  onClick={CancelEdit}
                >
                  CANCEL{" "}
                </button>{" "}
                &nbsp;
                <button
                  className="col-sm-5 btn btn-success"
                  onClick={updateNow}
                  style={{ textAlign: "center" }}
                >
                  <i className="fas fa-user-edit"></i>&nbsp;&nbsp; Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default EditPersonel;
