import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../redux/action/messageAction";

const Messages = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    name: "",
    email: "",
    body: "",
    subject: "",
  });
  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };
  const handleAddMessage = (e) => {
    e.preventDefault();
    dispatch(addMessage(message));
    setMessage({
      name: "",
      email: "",
      body: "",
      subject: "",
    });
  };
  return (
    <div>
      <div className="site-section">
        <div className="container">
          <h1
            className="text-uppercase"
            style={{ textAlign: "center", paddingTop:38 }}
          >
            CONTACT US
          </h1>
          <hr style={{padding:40}} />
          <div className="row">
            <div className="col-lg-7">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    value={message.name}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={message.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    onChange={handleChange}
                    value={message.subject}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="body"
                    className="form-control"
                    cols="30"
                    rows="10"
                    placeholder="Write something..."
                    onChange={handleChange}
                    value={message.body}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn py-3 px-5"
                    style={{ backgroundColor: "#6ECBA4", color: "white" }}
                    value="Send Message"
                    onClick={handleAddMessage}
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-4 ml-auto">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-home me-3"></i> Address
                  <p>
                    4013, Messadine <br /> Msaken,Sousse
                  </p>
                </li>
                <li className="mb-2">
                  <i className="fas fa-envelope me-3"></i> Email
                  <p>
                    {" "}
                    <a
                      href="mailto:fcmessadine@gmail.com"
                      style={{ color: "black" }}
                    >
                      aymenby2503@gmail.com
                    </a>
                  </p>
                </li>
                <li className="mb-2">
                  <i className="fas fa-phone me-3"></i> Phone
                  <p>
                    <a href="tel:26 398 196" style={{ color: "black" }}>
                      26 398 196
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
