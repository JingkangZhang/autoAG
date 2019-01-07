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

    this.state = {
      formState:{
        pointsEnabled: false,
        tests: [
          createInitialTestData()
        ]
      },
      formHandler: this.handleInputChange
    };
  }

  handleInputChange(e) {
    var newFormState = this.state.formState;
    switch(e.target.name) {
      case "pointsEnabled":
        newFormState["pointsEnabled"] = e.target.checked;
        break;
      case "addTest":
        newFormState["tests"].push(createInitialTestData());
        break;
      case "testType":
        newFormState["tests"][e.target.dataset.testid]
            .testType = e.target.value;
        break;
      case "fullScore":
        newFormState["tests"][e.target.dataset.testid]
            .fullScore = e.target.value;
        break;
      case "functionName":
        newFormState["tests"][e.target.dataset.testid]
            .functionName = e.target.value;
        break;
      case "functionParams":
        newFormState["tests"][e.target.dataset.testid]
            .functionParams = e.target.value;
        break;
      case "formDescription":
        newFormState["tests"][e.target.dataset.testid]
            .description = e.target.value;
        break;
      case "addTestCase":
        newFormState["tests"][e.target.dataset.testid]
            .testCases.push(["",""]);
        break;
      case "testCaseInput":
        newFormState["tests"][e.target.dataset.testid]
            .testCases[e.target.dataset.testcaseid][0] = e.target.value;
        break;
      case "testCaseOutput":
        newFormState["tests"][e.target.dataset.testid]
            .testCases[e.target.dataset.testcaseid][1] = e.target.value;
        break;
      default:
    }
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
function createInitialTestData() {
  return {
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
  };
}


export default App;
