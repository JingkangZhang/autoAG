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
import FormSkeletonCode from './form_test_case_components/FormSkeletonCode';
import FormUnitTestCases from './form_unit_test_components/FormUnitTestCases';
import FormUnitAdvancedSetting from './form_unit_test_components/FormUnitAdvancedSetting';

{
//  props:{
//     testData: {
//       functionName: "list_pop_test",
      // functionParams: "setup, inputs, expected",
      // description: "Unit test for list_pop. \n1. Creates a list object lst from setup['originalList']\n 2. Calls pop_list on the lst object (pop_list(lst, *inputs))\n 3.Checks if the resulting list is desired. (lst == expected)",
      // testCases: ["{'originalList': [1,2,3,4]}, [0], [2,3,4]"],
    //   testCode: "",
      // advancedSetting: {
      //   fullScore: "1",
      //   display: "show",
      //   testType: "unit_test",
      // }
//     },
//     testIndex: Int,
//     className: String,
//     pointsEnabled: Boolean,
//     formHandler: Function
// }
}
class FormUnitTestCase extends React.Component {
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
        "#" + "formUnitTestCase"+ this.props.testIndex + ' .alertBorder').length +
      document.querySelectorAll(
        "#" + "formUnitTestCase"+ this.props.testIndex + ' .alertTestCaseBorder').length;

    if (prevState.numErrors !== currNumErrors) {
      this.setState({numErrors: currNumErrors});
    }
  }
  render() {
    return (
      <div class="formUnitTestCase"
        id={"formUnitTestCase"+ this.props.testIndex}>
      <Button className="unitTestHeader" color="warning" onClick={this.handleToggle}>
        {"Unit Test: " + this.props.testData.functionName}

        {this.state.numErrors !== 0 && this.state.collapse && this.state.status === 'Closed'?
          <Badge className="numErrorBadge" color="danger" pill>{this.state.numErrors}</Badge>
          :
          ""
        }
      </Button>
      <span className="headerButtonGroupUnit">
        <Button
          className="headerButtonUnit"
          color="warning"
          name="headerButtonUp"
          data-testid={this.props.testIndex}
          onClick={this.props.formHandler}
          >
          up
        </Button>
        <Button
          className="headerButtonUnit"
          color="warning"
          name="headerButtonDown"
          data-testid={this.props.testIndex}
          onClick={this.props.formHandler}
          >
          down
        </Button>
        <Button
          className="headerButtonUnit"
          color="warning"
          name="headerButtonDelete"
          data-testid={this.props.testIndex}
          onClick={this.props.formHandler}
          >
          delete
        </Button>
        <Button
          className="headerButtonUnit"
          color="warning"
          name="headerButtonDuplicate"
          data-testid={this.props.testIndex}
          onClick={this.props.formHandler}
          >
          duplicate
        </Button>
      </span>

      <Collapse  isOpen={!this.state.collapse}
        onExiting={this.onExiting}
        onExited={this.onExited}>
        <div className="unitTestCaseBody">
          <FormFunctionName formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            functionName={this.props.testData.functionName}
            placeholder="list_pop_test"/>
          <FormFunctionParams formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            functionName={this.props.testData.functionName}
            functionParams={this.props.testData.functionParams}
            placeholder="setup, input, expected" />
          <FormDescription formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            description={this.props.testData.description}
            placeholder="Unit test for list_pop."
            type="unit"/>
          <FormSkeletonCode
            formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            skeletonCode={this.props.testData.testCode}
            placeholder="return True #test passed, False otherwise"
            type="unit"/>
          <FormUnitTestCases formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            functionParams={this.props.testData.functionParams}
            testCases={this.props.testData.testCases} />
          <FormUnitAdvancedSetting formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            pointsEnabled={this.props.pointsEnabled}
            advancedSetting={this.props.testData.advancedSetting} />
        </div>
      </Collapse>
      </div>
    )
  }
}

export default FormUnitTestCase;
