import React from "react";
import { Link, Redirect } from "react-router-dom";
import AcitivityLayout from "./AcitivityLayout";

const Activity = (props) => {
  return (
    <AcitivityLayout>
            <div className="user_dashboard">
                <div>
                This is your dashboard.
                </div>
            </div>
        </AcitivityLayout>
  );
};

export default Activity;
