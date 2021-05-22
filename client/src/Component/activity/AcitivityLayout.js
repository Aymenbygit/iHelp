import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/action/authAction";
import { getOps } from "../../redux/action/postAction"; 
import { Link } from "react-router-dom";

const AcitivityLayout = (props) => {
  const PostList = useSelector((state) => state.PostReducer);
  const AuthReducer = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(loadUser());
      dispatch(getOps());
    }
  }, [AuthReducer.isAuth,dispatch]);
  
  return (
    <div className="admin_container">
      <div
        className="admin_left_nav"
        style={{
          color: "white",
          fontWeight: "300",
          borderBottom: "1px solid #353535",
        }}
      >
        <Link to="/activity/my_posts" className="nav-link link_tag">
          My posts({AuthReducer.user && PostList ? PostList.filter((ell) => ell.owner === AuthReducer.user._id).length : 0})

        </Link>
        <Link to="/activity/my_comments" className="nav-link link_tag" >
          My Comments(0)
        </Link>
        <Link to="/activity/saved_posts" className="nav-link link_tag">
          Saved posts
          ({AuthReducer.user ? AuthReducer.user.favorites.length : 0})
        </Link>
        {/* <Link to="/activity/my_reactions" className="nav-link link_tag">
          Posts reaction top/flop
        </Link> */}
      </div>
      <div className="admin_right">{props.children}</div>
    </div>
  );
};

export default AcitivityLayout;
