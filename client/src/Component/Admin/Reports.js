import React, { useEffect } from "react";
import { deleteRaport, getReports } from "../../redux/action/reportAction";
import { loadUser } from "../../redux/action/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Reports = ({ history }) => {
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const ReportReducer = useSelector((state) => state.ReportReducer);

  const dispatch = useDispatch();

//AuthReducer.user.type===true
  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(loadUser());
      dispatch(getReports());
    }
  }, []);
  return (
    <div>
      {ReportReducer &&
        ReportReducer.map((el) => (
          <h5>
            {" "}
            <Card border="dark" style={{ width: "500px", height: "250px" }}>
              <Card.Header>
                {" "}
                <Link to={`/posts/${el.target}`}>
                  Go check
                </Link>{" "}
              </Card.Header>
              <Card.Body>
                <Card.Title>{el.owner}</Card.Title>
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
                    DELETE
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </h5>
        ))}
    </div>
  );
};

export default Reports;
