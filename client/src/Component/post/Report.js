import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addReport } from "../../redux/action/reportAction";

const Report = ({ handleClose, show, post, match }) => {
  const AuthReducer = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();
  const [report, setReport] = useState({
    body: "",
  });
  const handleChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please select a problem If someone is in immediate danger, get help
          before reporting to Facebook. Don't wait.
        </Modal.Body>
        <Form>
          <table className="table">
            <tbody>
              {" "}
              <tr>
                <th scope="col-8">Harassment</th>
                <th scope="col-2" style={{ textAlign: "right" }}>
                <input type="checkbox" value="" id="flexCheckDefault" />
                </th>
              </tr>
              <tr>
                <th scope="col-8">Fake</th>
                <th scope="col-2" style={{ textAlign: "right" }}>
                <input type="checkbox" value="" id="flexCheckDefault" />
                </th>
              </tr>
              <tr>
                <th scope="col-8">Physical harm</th>
                <th scope="col-2" style={{ textAlign: "right" }}>
                <input type="checkbox" value="" id="flexCheckDefault" />
                </th>
              </tr>
              <tr>
                <th scope="col-8">Adult content</th>
                <th scope="col-2" style={{ textAlign: "right" }}>
                <input type="checkbox" value="" id="flexCheckDefault" />
                </th>
              </tr>
              <tr>
                <th scope="col-8">Violance</th>
                <th scope="col-2" style={{ textAlign: "right" }}>
                <input type="checkbox" value="" id="flexCheckDefault" />
                </th>
              </tr>
              <tr>
                <th scope="col-8">Smap</th>
                <th scope="col-2" style={{ textAlign: "right" }}>
                <input type="checkbox" value="" id="flexCheckDefault" />
                </th>
              </tr>
              <tr>
                <th scope="col-8">Hate Speech</th>
                <th scope="col-2" style={{ textAlign: "right" }}>
                <input type="checkbox" value="" id="flexCheckDefault" />
                </th>
              </tr>
            </tbody>
          </table>

          <Form.Group sm="2" m="2">
            <Form.Label as="h5">Something Else</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              type="text"
              placeholder="report"
              name="body"
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={(e) => {
              if (AuthReducer.isAuth) {
                e.preventDefault();
                handleClose();
                dispatch(addReport(post, report));
              } else {
                alert("Connect first (LINK TO LOGIN) ");
              }
            }}
          >
            Submit
          </Button>
          &nbsp;
          <Button variant="info" onClick={handleClose}>
            Cancel
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Report;
