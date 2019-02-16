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
//       functionName: "list_pop_test",
      // functionParams: "setup, inputs, expected",
      // description: "Unit test for list_pop. \n1. Creates a list object lst from setup['originalList']\n 2. Calls pop_list on the lst object (pop_list(lst, *inputs))\n 3.Checks if the resulting list is desired. (lst == expected)",
      // testCases: ["{'originalList': [1,2,3,4]}, [0], [2,3,4]"],
      // advancedSetting: {
      //   fullScore: "1",
      //   testType: "unit_test",
      //   skeletonCode: "",
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

        </div>
      </Collapse>
      </div>
    )
  }
}

export default FormUnitTestCase;
