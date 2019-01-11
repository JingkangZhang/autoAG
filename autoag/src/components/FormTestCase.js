import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
import FormFunctionName from './form_test_case_components/FormFunctionName';
import FormFunctionParams from './form_test_case_components/FormFunctionParams';
import FormDescription from './form_test_case_components/FormDescription';
import FormTestCases from './form_test_case_components/FormTestCases';
import FormAdvancedSetting from './form_test_case_components/FormAdvancedSetting';
// import FormFunctionName from './form_test_case_components/FormFunctionName';
// import FormFunctionName from './form_test_case_components/FormFunctionName';
// import FormFunctionName from './form_test_case_components/FormFunctionName';
{
//  props:{
//     testData: {
//       functionName: "",
//       functionParams: "",
//       description: "",
//       testCases: [["", ""]],
//       advancedSetting: {
//         fullScore: "1",
//         testType: "simple",
//         testName: "",
//         partialCredits: "none",
//         skeletonCode: "",
//         testForDisallowedUse: [],
//       }
//     },
//     testIndex: Int,
//     className: String,
//     pointsEnabled: Boolean,
//     formHandler: Function
// }
}
class FormTestCase extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      collapse: false
    };
  }
  handleToggle(e) {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <div className={this.props.className}>
      <Button className="testHeader" onClick={this.handleToggle}>
        {"Q" + (this.props.testIndex + 1) + " : "}
        {this.props.testData.advancedSetting.testName!=="" ?
          this.props.testData.advancedSetting.testName
          :
          this.props.testData.functionName==="" ?
            "Untitled"
            :
            this.props.testData.functionName
        }
      </Button>
      <Collapse  isOpen={!this.state.collapse}>
        <div className="testCaseBody">
          <FormFunctionName formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            functionName={this.props.testData.functionName} />
          <FormFunctionParams formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            functionName={this.props.testData.functionName}
            functionParams={this.props.testData.functionParams} />
          <FormDescription formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            description={this.props.testData.description} />
          <FormTestCases formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            functionName={this.props.testData.functionName}
            functionParams={this.props.testData.functionParams}
            testCases={this.props.testData.testCases} />
          <FormAdvancedSetting formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            pointsEnabled={this.props.pointsEnabled}
            functionName={this.props.testData.functionName}
            advancedSetting={this.props.testData.advancedSetting} />
        </div>
      </Collapse>
      </div>
    )
  }
}

export default FormTestCase;
