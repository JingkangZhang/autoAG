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
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.state = {
      collapse: false,
      numErrors: 0,
      status: 'Closed'
    };
  }
  handleToggle(e) {
    this.setState({ collapse: !this.state.collapse });
  }
  onExiting() {
   this.setState({ status: 'Closing...' });
  }
  onExited() {
    this.setState({ status: 'Closed' });
  }
  componentDidUpdate(prevProps, prevState) {
    var currNumErrors =
      document.querySelectorAll(
        "#" + "formTestCase"+ this.props.testIndex + ' .alertBorder').length +
      document.querySelectorAll(
        "#" + "formTestCase"+ this.props.testIndex + ' .alertTestCaseBorder').length;

    if (prevState.numErrors !== currNumErrors) {
      this.setState({numErrors: currNumErrors});
    }
  }
  render() {
    return (
      <div class="formTestCase"
        id={"formTestCase"+ this.props.testIndex}>
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

        {this.state.numErrors !== 0 && this.state.collapse && this.state.status === 'Closed'?
          <Badge className="numErrorBadge" color="danger" pill>{this.state.numErrors}</Badge>
          :
          ""
        }
        <span className="headerButtonGroup">
          <Button
            className="headerButton"
            name="headerButtonUp"
            data-testid={this.props.testIndex}
            onClick={this.props.formHandler}
            >
            up
          </Button>
          <Button
            className="headerButton"
            name="headerButtonDown"
            data-testid={this.props.testIndex}
            onClick={this.props.formHandler}
            >
            down
          </Button>
          <Button
            className="headerButton"
            name="headerButtonDelete"
            data-testid={this.props.testIndex}
            onClick={this.props.formHandler}
            >
            delete
          </Button>
          <Button
            className="headerButton"
            name="headerButtonDuplicate"
            data-testid={this.props.testIndex}
            onClick={this.props.formHandler}
            >
            duplicate
          </Button>
        </span>
      </Button>

      <Collapse  isOpen={!this.state.collapse}
        onExiting={this.onExiting}
        onExited={this.onExited}>
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
