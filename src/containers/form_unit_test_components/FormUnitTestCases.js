import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
import {isValidArgList} from "../testArgs.js";
//props:{formHandler:Function, testIndex:Int, functionName:String,
//        functionParams:String, testCases:[["", ""],["", ""]]}
class FormUnitTestCases extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.state = {
      collapse: false,
      numErrors: 0,
      status: 'Opened'
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
        "#" + "formUnitTestCase"+ this.props.testIndex + ' .alertTestCaseBorder').length;

    if (prevState.numErrors !== currNumErrors) {
      this.setState({numErrors: currNumErrors});
    }
  }
  render() {
    var testCases = [];
    for (var i = 0; i < this.props.testCases.length; i++) {
      testCases.push(
        <FormTestCaseInner testCaseData={this.props.testCases[i]}
          testCaseIndex={i}
          testIndex={this.props.testIndex}
          functionParams={this.props.functionParams}
          formHandler={this.props.formHandler}/>
      )
    }
    return (
      <ListGroup>
        <Button className="testCaseHeader"
              color="dark"
              onClick={this.handleToggle}>
          Test Cases
          {this.state.numErrors !== 0 && this.state.collapse && this.state.status === 'Closed'?
            <Badge className="numErrorBadge" color="danger" pill>{this.state.numErrors}</Badge>
            :
            ""
          }
        </Button>
        <Collapse  isOpen={!this.state.collapse}
          onExiting={this.onExiting}
          onExited={this.onExited}>
          <div class="testCasesGroup">
            {testCases}
            <Button name="addUnitTestCase"
              className="addTestCaseButton"
              data-testid={this.props.testIndex}
              onClick={this.props.formHandler}
              color="secondary"
              size="sm">Add Test Case</Button>
            <div class="testCaseBottomBorder"></div>
          </div>
        </Collapse>
      </ListGroup>
    )
  }
}
//props:{testCaseData:"", testIndex:Int, testCaseIndex:Int,
//        functionParams:String, formHandler:Function}
class FormTestCaseInner extends React.Component {
  render() {
    var alertClassName="";
    var alertbox="";
    var validationResult = isValidArgList(this.props.functionParams,
      this.props.testCaseData);
    if (!validationResult.result) {
      var alertContent="";
      if (validationResult.error) {
        alertContent = "You have an unmatched symbol error in your No."+
          validationResult.count + " argument.";
      } else {
        if (validationResult.starPresents === true) {
          alertContent = "You are supposed to pass in at least " +
            validationResult.numRegular +" arguments. Found " +
            validationResult.realCount + ".";
        } else {
          if (validationResult.numEqSigns === 0) {
            alertContent = "You are supposed to pass in " +
            validationResult.numRegular + " arguments. Found " +
            validationResult.realCount + ".";
          } else {
            alertContent = "You are supposed to pass in " +
            validationResult.numRegular + " required arguments, " +
            validationResult.numEqSigns +" optional arguments. Found " +
            validationResult.realCount + ".";
          }
        }
      }
      alertbox =
        <span class="testCaseAlert"
          id={"testCaseAlert" +
          this.props.testIndex + "_" +
          this.props.testCaseIndex} >
          <UncontrolledTooltip
            placement="right"
            target={"testCaseAlert" +
                    this.props.testIndex + "_" +
                    this.props.testCaseIndex}
            arrowClassName="AlertTooltipArrow"
            className="AlertTooltip">
            {alertContent}
          </UncontrolledTooltip>
        </span>;
      alertClassName="alertTestCaseBorder";
    }
    // var shouldDisableInput = validationResult.starPresents === false &&
    //     validationResult.numEqSigns === 0 && validationResult.numRegular === 0;
    return(
      <ListGroupItem className={alertClassName}>
        <div class="tgUnit">
          <span class="tgAlertUnit">{alertbox}</span>
          <span class="tgInputUnit">
            <InputGroup>
              <Input placeholder={this.props.functionParams} spellcheck="false"
                     className="forPlaceHolder"
                     name="unitTestCaseInput"
                     data-testid={this.props.testIndex}
                     data-testcaseid={this.props.testCaseIndex}
                     onChange={this.props.formHandler}
                     value={this.props.testCaseData} />
            </InputGroup>
          </span>
          <button
            class="testCaseDelete"
            name="testCaseDelete"
            data-testid={this.props.testIndex}
            data-testcaseid={this.props.testCaseIndex}
            onClick={this.props.formHandler}
            >

          </button>
        </div>
      </ListGroupItem>
    )
  }
}
export default FormUnitTestCases;
