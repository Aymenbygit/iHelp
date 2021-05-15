import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const AuthReducer = useSelector((state) => state.AuthReducer);
  return (
    <Route
      {...rest}
      render={(props) =>
        !AuthReducer.isAuth ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoutes;
