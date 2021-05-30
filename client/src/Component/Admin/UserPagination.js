import React, { useEffect, useRef, useState } from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteOps, getOps, getOpsbyId } from "../../redux/action/postAction";
import {
  addFav,
  allUsers,
  loadUser,
  removeFav,
} from "../../redux/action/authAction";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Table = () => {
  const dispatch = useDispatch();
  const PostList = useSelector((state) => state.PostReducer);
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const UserReducer = useSelector((state) => state.UserReducer);
  const countPerPage = 5;
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
        <div style={{paddingTop:"30px"}} className="col-lg-4 " key={i}>
          <div className="user__card">
            <img
              src={el.avatar}
              alt="avatar"
              style={{ width: "100%" }}
            />
            <h1>
              {el.first_name} {el.last_name}
            </h1>
            <p className="user_title">{el.username}</p>
            <a
              href="mailto:{el.email}"
              target="_blank"
              rel="noreferrer"
              className="user_a"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href={el.git}
              target="_blank"
              rel="noreferrer"
              className="user_a"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={el.linkedin}
              target="_blank"
              rel="noreferrer"
              className="user_a"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href={el.fb}
              target="_blank"
              rel="noreferrer"
              className="user_a"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <p>
              <Link to={`/user/${el._id}`}>
                <button className="user_button">
                  See full profile
                </button>
              </Link>{" "}
            </p>
          </div>
        </div>
      ));
  };

  return (
    <>
      {collection && tableData()}

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
    </>
  );
};
export default Table;
