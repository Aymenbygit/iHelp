import React, { useEffect, useState } from "react";
import { deleteRaport, getReports } from "../../redux/action/reportAction";
import { allUsers, loadUser } from "../../redux/action/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getOps } from "../../redux/action/postAction";

const Reports = () => {
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const ReportReducer = useSelector((state) => state.ReportReducer);
  const PostList = useSelector((state) => state.PostReducer);
  const UserReducer = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  // const [reportData, setReportData] = useState(ReportReducer);

  // const filter = (button) => {
  //   if (button === "All") {
  //     return setReportData(ReportReducer);
  //   }
  //   const filteredData = ReportReducer.filter(
  //     (item) => item.target.includes(PostList.map((el) => el.target)) === button
  //   );
  //   setReportData(filteredData);
  // };

  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(loadUser());
      dispatch(getReports());
      dispatch(getOps());
      dispatch(allUsers());
    }
  }, [AuthReducer.isAuth, dispatch]);

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
        {AuthReducer.user &&
        AuthReducer.user.type &&
        AuthReducer.user.type === true &&
        ReportReducer ? (
          ReportReducer.map((el, i) => (
            <h5 key={i}>
              {" "}
              <Card border="dark">
                <Card.Header>
                  {PostList.map((el) => el._id).includes(el.target) ? (
                    <Link to={`/posts/${el.target}`}>Go to Post</Link>
                  ) : (
                    <div style={{ Color: "red" }}>
                      <s>Post Deleted</s>
                    </div>
                  )}
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    Reported By :{" "}
                    {UserReducer &&
                      UserReducer.filter((user) => user._id === el.owner).map(
                        (el, i) => (
                          <Link to={`/user/${el._id}`} key={i}>
                            <i key={i}>{el.username}</i>
                          </Link>
                        )
                      )}
                  </Card.Title>
                  <Card.Text>
                    <b>{el.checkbox}</b>{" "}
                  </Card.Text>
                  <Card.Text>{el.body}</Card.Text>
                  <Card.Text>
                    {new Date(el.created_at).toLocaleString()}
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      onClick={() => {
                        dispatch(deleteRaport(el._id));
                      }}
                    >
                      DELETE REPORT
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </h5>
          ))
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="not_found">
                  <div style={{ fontSize: 100 }}>
                    <b>404</b>{" "}
                  </div>
                  <div>
                    <b>THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.</b>{" "}
                  </div>
                  <p className="PAGE">
                    You may have mistyped the address or the page may have
                    moved.
                  </p>
                  <a href="/">
                    <button>GO TO HOME PAGE</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
