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
          <h1 className="text-uppercase" style={{ textAlign: "center",paddingTop:20 }}>
            CONTACT US
          </h1>
          <hr />
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
                    style={{backgroundColor:"#6ECBA4",color:'white'}}
                    value="Send Message"
                    onClick={handleAddMessage}
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-4 ml-auto">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <strong className="text-white d-block">Address</strong>
                  4013, Messadine <br /> Msaken,Sousse
                </li>
                <li className="mb-2">
                  <strong className="text-white d-block">Email</strong>
                  <a href="mailto:fcmessadine@gmail.com" style={{color:'black'}}>
                    aymenby2503@gmail.com
                  </a>
                </li>
                <li className="mb-2">
                  <strong className="text-white d-block">Phone</strong>
                  <a href="tel:26 398 196"  style={{color:'black'}}>26 398 196</a>
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
