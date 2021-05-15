import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ user, component: Comp, ...rest }) => {
    const AuthReducer = useSelector((state) => state.AuthReducer);

  return (
    <Route
      {...rest}
      component={(props) =>
        rest.restricted ? (
            AuthReducer.user ? (
            <Redirect to="/posts" />
          ) : (
            <Comp {...props} user={user} />
          )
        ) : (
          <Comp {...props} user={user} />
        )
      }
    />
  );
};

export default PublicRoute;
