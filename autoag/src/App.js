import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav'
import InputField from './components/InputField'
import OutputField from './components/OutputField'

import {
  Container, Row, Col,
} from 'reactstrap';


class App extends React.Component {
  render() {
    return (
      <Container fluid="true">
        <Row >
          <Col className="NavCol">
            <TopNav />
          </Col>
        </Row>
        <Row>
          <Col sm="7"> <InputField /> </Col>
          <Col sm="5"> <OutputField /> </Col>
        </Row>
      </Container>
    );
  }
}



export default App;
