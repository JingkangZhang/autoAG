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
    if (e.target.name === "addTestButton") {
      this.handleAddTest(e);
      return;
    } else if (e.target.name === "testType") {
      this.handleTestType(e);
      return;
    }
    //TODO: fix if else, get more specific cases 
    var newFormState = this.state.formState;
    newFormState[e.target.name] = e.target.type === "checkbox" ?
      e.target.checked : e.target.input;
    this.setState({formState: newFormState});
  }

  handleAddTest(e) {
    var newFormState = this.state.formState;
    newFormState["tests"].push(INITIAL_TEST);
    this.setState({formState: newFormState});
  }

  handleTestType(e) {
    var newFormState = this.state.formState;
    newFormState["tests"][e.target.dataset.testid] = e.target.value;
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
