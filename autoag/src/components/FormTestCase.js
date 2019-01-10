import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
import {isValidArgList} from "./testArgs.js";
{
  // props:{
  //   testData:{
  //     testType: "simple",
  //     functionName: "Fibonacci",
  //     testName: "Fibonacci",
  //     functionParams: "",
  //     description: "",
  //     testCases: [["0, 0", "0"]],
  //     testForDisallowedUse: [],
  //     fullScore: null,
  //     partialCredits: "none",
  //     skeletonCode: ""
  //   },
  //   testIndex: Int,
  //   pointsEnabled: Bool,
  //   formHandler: Function
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
        {this.props.testData.testName==="" ?
          this.props.testData.functionName
          :
          this.props.testData.testName
        }
      </Button>
      <Collapse  isOpen={!this.state.collapse}>
        <div className="testCaseBody">
          {this.props.pointsEnabled &&
            <FormFullScore formHandler={this.props.formHandler}
              testIndex={this.props.testIndex}
              fullScore={this.props.testData.fullScore}/>
          }
          <FormTestCaseTestType formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            testType={this.props.testData.testType} />
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
        </div>
      </Collapse>

      </div>

    )
  }
}
//props:{formHandler:Function, testIndex:Int, fullScore:String}
class FormFullScore extends React.Component {
  render() {
    var scoreString = this.props.fullScore;
    var alertClassName="";
    var alertbox="";
    if (scoreString==="" || isNaN(scoreString)) {
      alertbox =
        <span class="labelAlert" id={"fullScoreAlert" + this.props.testIndex}>
          <UncontrolledTooltip
            placement="right"
            target={"fullScoreAlert" + this.props.testIndex}
            arrowClassName="AlertTooltipArrow"
            className="AlertTooltip">
            Please enter a valid number.
          </UncontrolledTooltip>
        </span>;
      alertClassName="alertBorder";
    }
    return (
      <FormGroup>
        <div className={alertClassName}>
          <Label for="fullScore">
            <span>Full Score:</span>
            {alertbox}
          </Label>
          <Input type="text" name="fullScore"
            // onFocus={e => e.target.select()}
            className="forPlaceHolder"
            placeholder="1"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            value={scoreString} />
        </div>
      </FormGroup>
    )
  }
}
//props:{formHandler:Function, testIndex:Int, testType:String}
class FormTestCaseTestType extends React.Component {
  render() {
    return (
      <FormGroup>
        <Label for="testType">Test Type:</Label>
        <Input type="select" name="testType"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            value={this.props.testType} >
          <option value="simple">simple function</option>
          <option value="unit">unit test</option>
        </Input>
      </FormGroup>
    )
  }
}
//props:{formHandler:Function, testIndex:Int, functionName:String}
class FormFunctionName extends React.Component {
  render() {
    var functionName = this.props.functionName;
    var alertClassName="";
    var alertbox="";
    if (!functionName.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)) {
      alertbox =
        <span class="labelAlert" id={"functionNameAlert"+ this.props.testIndex}>
          <UncontrolledTooltip
            placement="right"
            target={"functionNameAlert"+ this.props.testIndex}
            arrowClassName="AlertTooltipArrow"
            className="AlertTooltip">
            Please enter a valid Python function name.
          </UncontrolledTooltip>
        </span>;
      alertClassName="alertBorder";
    }
    return (
      <FormGroup>
        <div className={alertClassName}>
          <Label for="functionName" >
            <span>Function Name:</span>
            {alertbox}
          </Label>
          <Input type="text" name="functionName" spellcheck="false"
            // onFocus={e => e.target.select()}
            className="forPlaceHolder codeInput"
            placeholder="Fibonacci"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            value={functionName} />
        </div>
      </FormGroup>
    )
  }
}
//props:{formHandler:Function, testIndex:Int,
//      functionName:String, functionParams:String}
class FormFunctionParams extends React.Component {
  render() {
    var functionName = this.props.functionName;
    var functionParams = this.props.functionParams;
    var alertClassName="";
    var alertbox="";
    if (!functionParams.match(
        /^\s*((\*)?(\*)?[a-zA-Z_][a-zA-Z0-9_]*(\s*\=\s*[^ ]+?)?\s*,\s*)*((\*)?(\*)?[a-zA-Z_][a-zA-Z0-9_]*(\s*\=\s*[^ ]+?)?\s*,?\s*)?$/)) {
      alertbox =
        <span class="labelAlert" id={"functionNameAlert" + this.props.testIndex}>
          <UncontrolledTooltip
            placement="right"
            target={"functionNameAlert" + this.props.testIndex}
            arrowClassName="AlertTooltipArrow"
            className="AlertTooltip">
            Please enter a valid Python function parameter list.<br /> e.g., "arg1, arg2=None, *args, **kwargs".
          </UncontrolledTooltip>
        </span>;
      alertClassName="alertBorder";
    }
    return (
      <FormGroup>
        <div className={alertClassName}>
          {alert}
          <Label for="functionParams">
            <span>Function Parameters:</span>
            {alertbox}
          </Label>
          <Input type="text" name="functionParams" spellcheck="false"
            // onFocus={e => e.target.select()}
            className="forPlaceHolder codeInput"
            placeholder="arg1, arg2"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            value={functionParams} />
        </div>
      </FormGroup>
    )
  }
}
//props:{formHandler:Function, testIndex:Int, description:String}
class FormDescription extends React.Component {
  render() {
    return (
      <FormGroup>
          <Label for="exampleText">Question Description:</Label>
          <Input type="textarea" name="formDescription" spellcheck="false"
          id="formDescription"
          onChange={this.props.formHandler}
          // onFocus={e => e.target.select()}
          className="forPlaceHolder codeInput"
          data-testid={this.props.testIndex}
          placeholder="Return the Nth fibonacci number."
          value={this.props.description} />
        </FormGroup>
    )
  }
}
//props:{formHandler:Function, testIndex:Int, functionName:String,
//        functionParams:String, testCases:[["", ""],["", ""]]}
class FormTestCases extends React.Component {
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
    var testCases = [];
    for (var i = 0; i < this.props.testCases.length; i++) {
      testCases.push(
        <FormTestCaseInner testCaseData={this.props.testCases[i]}
          testCaseIndex={i}
          testIndex={this.props.testIndex}
          functionName={this.props.functionName}
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
        </Button>
        <Collapse  isOpen={!this.state.collapse}>
          <div class="testCasesGroup">
            {testCases}
            <Button name="addTestCase"
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
//props:{testCaseData:["",""], testIndex:Int, testCaseIndex:Int, functionName:scoreString,
//        functionParams:String, formHandler:Function}
class FormTestCaseInner extends React.Component {
  render() {
    var alertClassName="";
    var alertbox="";
    var validationResult = isValidArgList(this.props.functionParams,
      this.props.testCaseData[0]);
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
    var shouldDisableInput = validationResult.starPresents === false &&
        validationResult.numEqSigns === 0 && validationResult.numRegular === 0;
    return(
      <ListGroupItem className={alertClassName}>
        <div class="tg">
          <span class="tgAlert">{alertbox}</span>
          <span class="tgInput">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText >{this.props.functionName+" ("}</InputGroupText>
              </InputGroupAddon>
              <Input placeholder={this.props.functionParams} spellcheck="false"
                     className="forPlaceHolder"
                     name="testCaseInput"
                     data-testid={this.props.testIndex}
                     data-testcaseid={this.props.testCaseIndex}
                     onChange={this.props.formHandler}
                     value={this.props.testCaseData[0]}/>
              <InputGroupAddon addonType="append">
                <InputGroupText >)</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </span>
          <span class="tgArrow">
            <svg id="rightArrowSVG" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 408 408">
              <polygon id="rightArrowPath" points="204,102 204,0 408,204 204,408 204,306 0,306 0,102   "/>
            </svg>
          </span>
          <span class="tgOutput">
            <Input placeholder="expected output"
                   spellcheck="false"
                   className="forPlaceHolder"
                   name="testCaseOutput"
                   data-testid={this.props.testIndex}
                   data-testcaseid={this.props.testCaseIndex}
                   onChange={this.props.formHandler}
                   value={this.props.testCaseData[1]}/>
          </span>
        </div>
      </ListGroupItem>
    )
  }
}


export default FormTestCase
