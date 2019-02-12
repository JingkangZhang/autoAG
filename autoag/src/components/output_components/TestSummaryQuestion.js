import React from 'react';
import Highlight from 'react-highlight';

// props:{
//   testName: "",
//   disallowedUse: "",
//   fullScore: "",
//   pointsEnabled: false,
//   testCases: [
//     ["", ""],
//     ["", ""]
//   ]
// }
class TestSummaryQuestion extends React.Component {
  render() {
    var testCases = this.props.testCases;
    var testName = this.props.testName;
    var fullScore = this.props.fullScore;
    var disallowedUse = this.props.disallowedUse;
    var pointsEnabled = this.props.pointsEnabled;

    var testCasesList = [];
    for (var i = 0; i < this.props.testCases.length; i++) {
      testCasesList.push(
        <li class="testSummaryTestCase">
          <span class="testSummaryInput">{testCases[i][0]}</span>
          <span>{"=>"}</span>
          <span class="testSummaryOutput">{testCases[i][1]}</span>
        </li>
      );
    }
    return (
      <ul class="testSummaryQuestion">
        <li class="testSummaryTestName"> {testName} </li>
        {disallowedUse.replace(/\s/g, '') !== "" ?
          <li class="testSummaryDisallowedUse"> {"Disallowed Usages: " + disallowedUse} </li>
          :
          ""
        }
        {pointsEnabled ?
          <li class="testSummaryFullScore"> {"Full Score: " + fullScore}</li>
          :
          ""
        }
        <ul class="testSummaryTestCases">
          <li>Test Cases: </li>
          {testCasesList}
        </ul>
      </ul>
    )
  }
}


export default TestSummaryQuestion;
