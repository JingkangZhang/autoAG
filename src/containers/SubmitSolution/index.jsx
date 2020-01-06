import React, { useState } from 'react';
import {
  Navbar, NavbarBrand, NavItem, NavLink, InputGroup, InputGroupAddon, Input, Button, Form, FormGroup, Label, Table, Alert,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.scss';
import Pagination from 'react-js-pagination';

const PER_PAGE = 10;

const SubmitSolution = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  // const handleChangePage = (newPageNumber) => {
  //   const newContent = post(page=newPageNumber, perPage=PER_PAGE);
  //   setContent(newContent);
  //   setPage(page);
  // }

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
            <Input />
          </FormGroup>
          <Button>Search</Button>
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
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={3}
          onChange={() => {}}
        />

      </div>
    </div>
  );
};

export default SubmitSolution;
