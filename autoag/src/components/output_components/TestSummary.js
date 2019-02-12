import React from 'react';
import Highlight from 'react-highlight';
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
    return (
      <ul>
        {<li>Total Score: {totalPoints(formState.tests)}</li>}
      </ul>
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
