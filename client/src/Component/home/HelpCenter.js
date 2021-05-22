import React from 'react'

const HelpCenter = () => {
    // return (
    //     <div>
    //        <h1>COMMING SOON </h1>
    //        <h3>we're currently working on creating this interface</h3> 

    //     </div>
    // )
    return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="helpcenter">
                <div style={{ fontSize: 100 }}>
                  <b>404</b>{" "}
                </div>
                <div>
                  <b>COMMING SOON</b>{" "}
                </div>
                <p className="PAGE">
                we're currently working on creating this interface.
                </p>
                <a href="/">
                  <button className="col-4">GO TO HOME PAGE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default HelpCenter
