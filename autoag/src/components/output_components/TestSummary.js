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
      questionList.push(
        <TestSummaryQuestion
          testName={
            tests[i].advancedSetting.testName.replace(/\s/g, '') !== "" ?
            tests[i].advancedSetting.testName
            :
            tests[i].functionName
          }
          disallowedUse={tests[i].advancedSetting.disallowedUse}
          fullScore={tests[i].advancedSetting.fullScore}
          testCases={tests[i].testCases}
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
