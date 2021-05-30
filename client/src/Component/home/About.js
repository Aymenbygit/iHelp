import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import about from "../../Resource/imgs/iHelpLogo.png";

const About = () => {
  return (
    <div className=" about_us">
      <div className="container">
        <div>
          <h1>ABOUT US</h1>
          <hr color="red" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris.
            </b>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.{" "}
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>.
            Mauris massa. Vestibulum lacinia arcu eget nulla.
          </div>
        </div>
        <img src={about} style={{ width: "80%" }} alt="" />
        <div className="row">
          <div className="col-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.{" "}
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>.
            Mauris massa. Vestibulum lacinia arcu eget nulla.
          </div>
          <div className="col-4" style={{ marginTop: "-60px" }}>
            <Card style={{ backgroundColor: "#EC563D" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link as={Link} to="/contactus">
                  Contact Us
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
