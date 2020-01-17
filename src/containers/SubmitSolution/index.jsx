import React, { useState, useEffect } from 'react';
import {
  Navbar, NavbarBrand, NavItem, NavLink, InputGroup, InputGroupAddon, Input, Button, Form, FormGroup, Label, Table, Alert,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.scss';
import Pagination from 'react-js-pagination';
import { uploadSolution, listHomeworks } from 'services/';
import moment from 'moment';
import HomeworkEntry from './HomeworkEntry';


const SubmitSolution = () => {
  const [currPage, setCurrPage] = useState(1);
  const [content, setContent] = useState([]);
  const [dateDescending] = useState(true);
  const [perPage, setPerPage] = useState(10);
  const [homeworkId, setHomeworkId] = useState('');
  const [totalPages, setTotalPages] = useState(1);

  const updateList = () => {
    listHomeworks({
      currPage, perPage, dateDescending, homeworkId,
    }).then((data) => {
      setTotalPages(data.total);
      const convertedContent = data.content.map((hw) => {
        hw.time = moment(hw.time).local().format('lll');
        return hw;
      });
      setContent(convertedContent);
    });
  };

  useEffect(updateList, [currPage, dateDescending, perPage]);

  const handleChangePage = (newPageNumber) => {
    setCurrPage(newPageNumber);
  };

  const handleInputChange = (e) => {
    setHomeworkId(e.target.value);
  };

  return (
    <div>
      <Navbar light className="submit-bar">
        <NavbarBrand className="submit-brand">autoAG</NavbarBrand>
        <NavLink className="submit-publish">
          {' '}
          <Link to="/" className="submit-publish-link">Create and Publish My Homework</Link>
        </NavLink>
      </Navbar>
      <div className="submit-main">
        <div className="submit-form">
          <FormGroup>
            <Label>Homework ID:</Label>
            <Input onChange={handleInputChange} />
          </FormGroup>
          <Button onClick={updateList}>Search</Button>
        </div>
        <div className="submit-table">
          {/* <Table content={content}> */}
          <Table className="submit-table-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Date</th>
                <th>Skeleton Code</th>
                <th>Submit</th>
              </tr>
            </thead>
            {content.map((hw) => <HomeworkEntry homeworkId={hw.homeworkId} author={hw.author} name={hw.name} time={hw.time} />)}
            <tr>
              <td>asd</td>

              <td>asdgasdgfhgoiuehrighjeriohgoisrhgoi</td>
              <td>asdgasdgfhgoiuehrighjeriohgoisrhgoi</td>
              <td>asdgasdgfhgoiuehrighjeriohgoisrhgoi</td>
              <td>asdgasdgfhgoiuehrighjeriohgoisrhgoi</td>
            </tr>
            <tr>
              <td>asd</td>

              <td>asdgasdgfhgoiuehrighjeriohgoisrhgoi</td>
              <td>asdgasdgfhgoiuehrighjeriohgoisrhgoi</td>
              <td>asdgasdgfhgoiuehrighjeriohgoisrhgoi</td>
              <td>asdgasdgfhgoiuehrighjeriohgoisrhgoi</td>

            </tr>

          </Table>

        </div>
        <Pagination
          activePage={currPage}
          itemsCountPerPage={perPage}
          totalItemsCount={totalPages}
          pageRangeDisplayed={5}
          onChange={handleChangePage}
        />

      </div>
    </div>
  );
};

export default SubmitSolution;
