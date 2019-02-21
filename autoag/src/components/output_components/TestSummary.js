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
      var testType = currTest.advancedSetting.testType;

      questionList.push(
        testType !== "unit" &&
        <TestSummaryQuestion
          testName={
            testType === "unit_test" ?
              "Unit Test: " + currTest.functionName
              :
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
          functionParams={tests[i].functionParams}
          testType={testType}
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
    if (tests[i].advancedSetting.testType !== "unit") {
      sum += parseInt(tests[i].advancedSetting.fullScore);
    }
  }
  return sum;
}
export default TestSummary;
