import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, loadUser } from "../../redux/action/authAction";
import ProfileLayout from "./ProfileLayout";

const EditPersonel = () => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [errors, setErrors] = useState(null);
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({
    first_name: "",
    last_name: "",
    Birth_day: "",
    gender: "",
    bio: "",
    avatar: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const selectImageToUpload = (e) => {
    setFile(e.target.files[0]);
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
        avatar: "",
      });
    else {
      setInfo(AuthReducer.user);
    }
  };

  const updateNow = (e) => {
    e.preventDefault();
    dispatch(editUser(AuthReducer.user._id, info, file));
    update();
  };

  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(loadUser());
    }
    if (AuthReducer.error) {
      setErrors(AuthReducer.error);
      setTimeout(() => {
        setErrors(null);
      }, 5000);
    }
  }, [AuthReducer.isAuth, dispatch, AuthReducer.error]);

  useEffect(() => {
    if (!AuthReducer.user)
      setInfo({
        first_name: "",
        last_name: "",
        Birth_day: "",
        gender: "",
        bio: "",
      });
    else {
      setInfo(AuthReducer.user);
    }
  }, [AuthReducer.user]);
  return (
    <ProfileLayout>
      <div className="container">
        <h1 style={{ color: "grey" }}>Personal Information</h1>
        {!toggleEdit ? (
          AuthReducer.user && (
            <div className="row">
              <div className="col-lg-6">
                <img
                  style={{ width: "150px", borderRadius: "50%" }}
                  alt="avatar"
                  src={AuthReducer.user.avatar}
                />
                <table className="table ">
                  <tbody>
                    <tr>
                      <td>First name :</td>
                      <td style={{ fontWeight: "bold" }}>
                        {AuthReducer.user.first_name}
                        <h6>
                          {errors &&
                            errors
                              .filter((em) => em.param === "first_name")
                              .map((el, i) => (
                                <span className="badge badge-secondary" key={i}>
                                  {el.msg}
                                </span>
                              ))}
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>Last name :</td>
                      <td style={{ fontWeight: "bold" }}>
                        {AuthReducer.user.last_name}
                        <h6>
                          {errors &&
                            errors
                              .filter((em) => em.param === "last_name")
                              .map((el, i) => (
                                <span className="badge badge-secondary" key={i}>
                                  {el.msg}
                                </span>
                              ))}
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>Birth Day :</td>
                      <td style={{ fontWeight: "bold" }}>
                        {AuthReducer.user.Birth_day}
                        <h6>
                          {errors &&
                            errors
                              .filter((em) => em.param === "Birth_day")
                              .map((el, i) => (
                                <span className="badge badge-secondary" key={i}>
                                  {el.msg}
                                </span>
                              ))}
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>Gender :</td>
                      <td style={{ fontWeight: "bold" }}>
                        {AuthReducer.user.gender}
                      </td>
                    </tr>
                    <tr>
                      <td>About You :</td>
                      <td style={{ fontWeight: "bold" }}>
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
              <img
                src={info.avatar}
                style={{ width: "150px", borderRadius: "50%" }}
                alt=""
              />
              <table className="table ">
                <tbody>
                  <tr>
                    <td>Upload Image :</td>
                    <td>
                    <input type="file" name="avatar" onChange={selectImageToUpload} />
                    </td>
                  </tr>
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
                    <td>Last name :</td>
                    <td style={{ fontWeight: "bold" }}>
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
                    <td>Birth Day :</td>
                    <td style={{ fontWeight: "bold" }}>
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
                    <td>Gender :</td>
                    <td style={{ fontWeight: "bold" }}>
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
                    </td>
                  </tr>
                  <tr>
                    <td>About You :</td>
                    <td style={{ fontWeight: "bold" }}>
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
