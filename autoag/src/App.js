import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Split from 'react-split'
import TopNav from './components/TopNav';
import InputField from './components/InputField';
import OutputField from './components/OutputField';

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
        starterCode: "",
        tests: [
          createInitialTestData()
        ]
      },
    };
  }

  handleInputChange(e) {
    var newFormState = this.state.formState;
    switch(e.target.name) {
      case "pointsEnabled":
        newFormState["pointsEnabled"] = e.target.checked;
        break;
      case "starterCode":
        newFormState["starterCode"] = e.target.value;
        break;
      case "addTest":
        newFormState["tests"].push(createInitialTestData());
        break;
      case "testType":
        newFormState["tests"][e.target.dataset.testid].advancedSetting
            .testType = e.target.value;
        break;
      case "fullScore":
        newFormState["tests"][e.target.dataset.testid].advancedSetting
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
      <div>
        <TopNav />
        <Split
          className="split"
          sizes={[60, 40]}
          minSize={[300, 200]}
          >
            <InputField formState={this.state.formState}
                formHandler={this.handleInputChange}/>
            <OutputField formState={this.state.formState}/>
        </Split>
      </div>
    );
  }
}
function createInitialTestData() {
  return {
    functionName: "",
    functionParams: "",
    description: "",
    testCases: [["", ""]],
    advancedSetting: {
      fullScore: "1",
      testType: "simple",
      testName: "",
      partialCredits: "none",
      skeletonCode: "\"*** YOUR CODE HERE ***\"",
      testForDisallowedUse: [],
    }
  };
}


export default App;
