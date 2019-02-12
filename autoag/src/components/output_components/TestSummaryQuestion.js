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
    var length = this.props.testCases.length;
    // var colorSeed = Math.floor(Math.random() * 360);
    for (var i = 0; i < length; i++) {
      var hue = 360 / length * i ;
      var style = {backgroundColor: "hsl(" + hue + ", 40%, 93%)"};
      testCasesList.push(
        <li class="testSummaryTestCase" style={style}>
          <span class="testSummaryInput">{testCases[i][0]}</span>
          <span>{"=>"}</span>
          <span class="testSummaryOutput">{testCases[i][1]}</span>
        </li>
      );
    }
    return (
      <ul class="testSummaryQuestion">
        <li class="testSummaryTestName">
         {testName + (pointsEnabled ? ("  (" + fullScore + " Pts)") : "") }
        </li>


        {disallowedUse.replace(/\s/g, '') !== "" ?
          <li class="testSummaryDisallowedUse"> {"Disallowed Usages: " + disallowedUse} </li>
          :
          ""
        }
        <span class="TSTestCases">Test Cases: </span>
        <ul class="testSummaryTestCases">
          {testCasesList}
        </ul>
      </ul>
    )
  }
}


export default TestSummaryQuestion;
