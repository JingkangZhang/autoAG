import React from 'react';
import Highlight from 'react-highlight';
import {generateHomeworkText} from '../generateHomeworkText.js';
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
class HomeworkPreview extends React.Component {
  render() {
    let text = generateHomeworkText(this.props.formState);
    return (
      <Highlight className={"python " + this.props.className}>
        {text}
      </Highlight>
    )
  }

}
export default HomeworkPreview;
