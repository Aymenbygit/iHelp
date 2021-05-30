import React, { useEffect, useRef, useState } from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { getOps } from "../../redux/action/postAction";
import {
  addFav,
  allUsers,
  loadUser,
  removeFav,
} from "../../redux/action/authAction";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const UserList = ({ search, users }) => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const UserReducer = useSelector((state) => state.UserReducer);
  const countPerPage = 8;
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState(
    cloneDeep(UserReducer && UserReducer.slice(0, countPerPage))
  );
  const searchData = useRef(
    throttle((val) => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        UserReducer.filter(
          (item) => item.description.toLowerCase().indexOf(query) > -1
        ).slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );
  useEffect(() => {
    if (AuthReducer.isAuth) {
      dispatch(loadUser());
      dispatch(getOps());
    }
    dispatch(getOps());
    dispatch(allUsers());
  }, [AuthReducer.isAuth, dispatch]);

  useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value, dispatch, UserReducer]);

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(UserReducer && UserReducer.slice(from, to)));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const tableData = () => {
    return collection.map((el, i) => (
      <div style={{ paddingTop: "30px" }} className="col-md-3 " key={i}>
        <div className="user__card">
          <img src={el.avatar} alt="avatar" style={{ width: "100%" }} />
          <h5>
            {el.first_name} {el.last_name}
          </h5>
          <p className="user_title">{el.username ? el.username :'--'}</p>
          <a
            href="mailto:{el.email}"
            target="_blank"
            rel="noreferrer"
            className="user_a"
          >
            <i className="fas fa-envelope" style={{ paddingRight: "10px" }}></i>
          </a>
          <a href={el.git} target="_blank" rel="noreferrer" className="user_a">
            <i className="fab fa-github" style={{ paddingRight: "10px" }}></i>
          </a>
          <a
            href={el.linkedin}
            target="_blank"
            rel="noreferrer"
            className="user_a"
          >
            <i className="fab fa-linkedin" style={{ paddingRight: "10px" }}></i>
          </a>
          <a href={el.fb} target="_blank" rel="noreferrer" className="user_a">
            <i className="fab fa-facebook"></i>
          </a>
          <p>
            <Link to={`/user/${el._id}`}>
              <button className="user_button">See full profile</button>
            </Link>{" "}
          </p>
        </div>
      </div>
    ));
  };
  return (
    <div className="msg_container user__list">
      <div
        className="msg_left_nav"
        style={{
          backgroundColor: "black",
          fontWeight: "300",
          borderBottom: "1px solid #353535",
        }}
      ></div>
      <div className="msg_right">
        <Container>
          <div className="row">{collection && tableData()}</div>
          <nav>
            <ul className="pagination justify-content-center">
              <Pagination
                className="page-link"
                pageSize={countPerPage}
                onChange={updatePage}
                current={currentPage}
                total={UserReducer && UserReducer.length}
                onClick={scrollToTop()}
              />
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default UserList;
