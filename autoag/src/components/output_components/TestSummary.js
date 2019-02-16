import React from 'react';
import Highlight from 'react-highlight';
import TestSummaryQuestion from './TestSummaryQuestion';

//props: formState
// formState:{
//   pointsEnabled: false,
//   starterCode: "",
//   tests: [
//     {
    //   functionName: "",
    //   functionParams: "",
    //   description: "",
    //   testCases: [["", ""]],
    //   advancedSetting: {
    //     fullScore: "1",
    //     testType: "simple",
    //     testName: "",
    //     partialCredits: "none",
    //     skeletonCode: "'*** YOUR CODE HERE ***'",
    //     disallowedUse: "",
    //   }
    // };
//   ]
// },
class TestSummary extends React.Component {
  render() {
    var formState = this.props.formState;
    var questionList = [];
    var tests = formState.tests;
    for (var i = 0; i < tests.length; i++) {
      var currTest = tests[i];
      var isUnit = currTest.advancedSetting.testType === "unit_test";
      if (isUnit) {
        continue;
      }
      questionList.push(
        <TestSummaryQuestion
          testName={
            "Q" + (i + 1) + ": " +
            (
              currTest.advancedSetting.testName.replace(/\s/g, '') !== "" ?
              currTest.advancedSetting.testName
              :
              currTest.functionName
            )
          }
          disallowedUse={currTest.advancedSetting.disallowedUse}
          fullScore={currTest.advancedSetting.fullScore}
          testCases={currTest.testCases}
          pointsEnabled={formState.pointsEnabled}
          />
      );
    }
    return (
      <div class="testSummary">
        {formState.pointsEnabled ?
          <span id="TSTotalScore">Total Score: {totalPoints(formState.tests)}</span>
          :
          <span id="TSTotalScore">Score Disabled.</span>
        }
        {questionList}
     </div>
    )
  }
}

function totalPoints(tests) {
  var sum = 0;
  for (var i = 0; i < tests.length; i++) {
    sum += parseInt(tests[i].advancedSetting.fullScore);
  }
  return sum;
}
export default TestSummary;
