import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav'
import InputField from './components/InputField'
import OutputField from './components/OutputField'

import {
  Container, Row, Col,
} from 'reactstrap';

// if (process.env.NODE_ENV !== 'production') {
  // const {whyDidYouUpdate} = require('why-did-you-update');
  // whyDidYouUpdate(React);
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTest = this.handleAddTest.bind(this);
    this.handleTestType = this.handleTestType.bind(this);
    this.handlePointsEnabled = this.handlePointsEnabled.bind(this);
    this.handleFullScore = this.handleFullScore.bind(this);
    this.handleFunctionName = this.handleFunctionName.bind(this);
    this.handleFunctionParams = this.handleFunctionParams.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleAddTestCase = this.handleAddTestCase.bind(this);
    this.handleTestCaseInput = this.handleTestCaseInput.bind(this);
    this.state = {
      formState:{
        pointsEnabled: false,
        tests: [
          Object.assign({}, INITIAL_TEST)
        ]
      },
      formHandler: this.handleInputChange
    };
  }

  handleInputChange(e) {
    switch(e.target.name) {
      case "pointsEnabled":
        this.handlePointsEnabled(e);
        break;
      case "addTestButton":
        this.handleAddTest(e);
        break;
      case "testType":
        this.handleTestType(e);
        break;
      case "fullScore":
        this.handleFullScore(e);
        break;
      case "functionName":
        this.handleFunctionName(e);
        break;
      case "functionParams":
        this.handleFunctionParams(e);
        break;
      case "formDescription":
        this.handleDescription(e);
        break;
      case "addTestCase":
        this.handleAddTestCase(e);
        break;
      case "testCaseInput":
        this.handleTestCaseInput(e);
        break;

      default:

    }
    //TODO: fix if else, get more specific cases
    var newFormState = this.state.formState;
    newFormState[e.target.name] = e.target.type === "checkbox" ?
      e.target.checked : e.target.input;
    this.setState({formState: newFormState});
  }
  handlePointsEnabled(e) {
    var newFormState = this.state.formState;
    newFormState["pointsEnabled"] = e.target.checked;
    this.setState({formState: newFormState});
  }

  handleAddTest(e) {
    var newFormState = this.state.formState;
    newFormState["tests"].push(Object.assign({}, INITIAL_TEST));
    this.setState({formState: newFormState});
  }

  handleTestType(e) {
    var newFormState = this.state.formState;
    newFormState["tests"][e.target.dataset.testid]
        .testType = e.target.value;
    this.setState({formState: newFormState});
  }

  handleFullScore(e) {
    var newFormState = this.state.formState;
    newFormState["tests"][e.target.dataset.testid]
        .fullScore = e.target.value;
    this.setState({formState: newFormState});
  }

  handleFunctionName(e) {
    var newFormState = this.state.formState;
    newFormState["tests"][e.target.dataset.testid]
        .functionName = e.target.value;
    this.setState({formState: newFormState});
  }

  handleFunctionParams(e) {
    var newFormState = this.state.formState;
    newFormState["tests"][e.target.dataset.testid]
        .functionParams = e.target.value;
    this.setState({formState: newFormState});
  }

  handleDescription(e) {
    var newFormState = this.state.formState;
    newFormState["tests"][e.target.dataset.testid]
        .description = e.target.value;
    this.setState({formState: newFormState});
  }

  handleAddTestCase(e) {
    var newFormState = this.state.formState;
    newFormState["tests"][e.target.dataset.testid]
        .testCases.push(Object.assign([], ["",""]));
    this.setState({formState: newFormState});
  }

  handleTestCaseInput(e) {
    var newFormState = this.state.formState;
    newFormState["tests"][e.target.dataset.testid]
        .testCases[e.target.dataset.testcaseid][0] = e.target.value;
    this.setState({formState: newFormState});
  }
  render() {
    // const topNav = <TopNav />;
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
  functionName: "Fibonacci",
  testName: "",
  functionParams: "arg1, arg2",
  description: "",
  testCases: [["", ""]],
  testForDisallowedUse: [],
  fullScore: "1",
  partialCredits: "none",
  skeletonCode: ""
}

export default App;
