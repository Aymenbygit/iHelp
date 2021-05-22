import React,{useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { Button , Form , Col } from 'react-bootstrap';
import { getOps } from '../../redux/action/postAction';
import { searchByTitle } from '../../redux/action/postAction';

const Search = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const searchNow = (e) => {
    e.preventDefault();
    dispatch(searchByTitle(search));
  };
  useEffect( () => {
    dispatch(getOps()); 
    
},[dispatch])
  return (
    <div>
      <div className="search-title-div">
        <Form onSubmit={searchNow} className="search-title-form">
          <Form.Row>
            <Col xs={7}>
              <Form.Control
                type="text"
                name="title"
                onChange={handleChange}
                className="search-title-input"
                placeholder="Search by title..."
              />
            </Col>
            <Button variant="secondary" className="search-btn" type="submit">
              Search
            </Button>
          </Form.Row>
        </Form>
      </div>
      {/* <PostsList PostListe={PostList} /> */}
    </div>
    
  );
};

export default Search;
