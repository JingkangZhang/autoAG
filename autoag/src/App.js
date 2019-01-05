import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav'
import InputField from './components/InputField'
import OutputField from './components/OutputField'

import {
  Container, Row, Col,
} from 'reactstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTest = this.handleAddTest.bind(this);
    this.state = {
      formState:{
        pointsEnabled: false,
        tests: [
          INITIAL_TEST
        ]
      },
      formHandler: this.handleInputChange
    };
  }

  handleInputChange(e) {
    if (e.target.name == "addTestButton") {
      this.handleAddTest(e);
      return;
    }
    var newFormState = this.state.formState;
    // console.log(e.target.name);
    newFormState[e.target.name] = e.target.type == "checkbox" ?
      e.target.checked : e.target.input;
    console.log(newFormState);
    this.setState({formState: newFormState});
  }

  handleAddTest(e) {
    var newFormState = this.state.formState;
    newFormState["tests"].push(INITIAL_TEST);
    this.setState({formState: newFormState});
  }
  render() {
    return (
      <Container fluid="true">
        <Row >
          <Col className="NavCol">
            <TopNav />
          </Col>
        </Row>
        <Row>
          <Col sm="7">
            <InputField formState={this.state.formState}
                formHandler={this.state.formHandler}/>
          </Col>
          <Col sm="5">
            <OutputField formState={this.state.formState}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

const INITIAL_TEST = {
  testType: "simple",
  functionName: null,
  testName: null,
  testArgument: null,
  description: null,
  testCases: [["0, 0", "0"]],
  testForDisallowedUse: [],
  fullScore: null,
  partialCredits: "none",
  skeletonCode: ""
}

export default App;
