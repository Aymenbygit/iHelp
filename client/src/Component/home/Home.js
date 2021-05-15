import React from "react";
import Social from "../../Resource/imgs/social.jpg";
import Code from "../../Resource/imgs/code.jpg";
import Curcly from "../../Resource/imgs/curly-bracket.jpg";
import NeedHelp from "../../Resource/imgs/needHelp.jpg";
import Math from "../../Resource/imgs/math.jpg";

const Home = () => {
  return (
    <div className="tm-container mx-auto">
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={NeedHelp}
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">A public platform</h2>
                <p>
                  building the definitive collection of coding questions &
                  answers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={Math}
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">join our community!</h2>
                <p>
                  It is time to head towards researching the challenges of the
                  future and making human life better and better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={Curcly}
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">
                  This is a professional space that contains a lot of expertise
                  and expertise!
                </h2>
                <p>
                  The main goal is to provide assistance, spread the spirit of
                  giving, volunteer work, and exchange experiences and
                  knowledge..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="fun-box text-center">
                <i class="fas fa-flag"></i>

                <div className="value">0</div>
                <div className="title">completed project</div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="fun-box text-center">
                <i className="fas fa-bookmark"></i>

                <div className="value">0</div>
                <div className="title">design award</div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="fun-box text-center">
                <i class="fab fa-facebook-f"></i>

                <div className="value">0</div>
                <div className="title">facebook like</div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="fun-box text-center">
                <i className=" far fa-heart" />

                <div className="value">0</div>
                <div className="title">current projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
