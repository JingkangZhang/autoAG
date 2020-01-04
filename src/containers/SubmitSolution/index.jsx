import React, { useState } from 'react';
import {
  Navbar, NavbarBrand, NavItem, NavLink, InputGroup, InputGroupAddon, Input, Button, Form, FormGroup, Label, Table,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.scss';
import Pagination from 'react-js-pagination';

const SubmitSolution = () => {
  const [test, setTest] = useState();

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
          activePage={3}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={() => {}}
        />

      </div>
    </div>
  );
};

export default SubmitSolution;
