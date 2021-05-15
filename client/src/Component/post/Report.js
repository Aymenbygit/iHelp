import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addReport } from "../../redux/action/reportAction";

const Report = ({ handleClose, show, post, match }) => {
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const OnePost = useSelector((state) => state.OnePost);

  const dispatch = useDispatch();
  const [report, setReport] = useState({
    body: "",
  });
  const handleChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };
  const handleAddReport = () => {
    if (AuthReducer.isAuth) {
      if (report.description !== "") {
        dispatch(addReport(report));
        setReport({
          report: "",
        });
      }
    } else {
      alert("Connect first (LINK TO LOGIN) ");
    }
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add new operation</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group sm="2" m="2">
            <Form.Label as="h5">Body</Form.Label>
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
