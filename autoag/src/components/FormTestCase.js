import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse
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
    var alert="";
    if (scoreString==="" || isNaN(scoreString)) {
      alert =
        <Alert color="warning">
          Please enter a valid number for full score for current test.
        </Alert>
    }
    return (
      <FormGroup>
        {alert}
        <Label for="fullScore">Full Score:</Label>
        <Input type="text" name="fullScore"
          // onFocus={e => e.target.select()}
          className="forPlaceHolder"
          placeholder="1"
          onChange={this.props.formHandler}
          data-testid={this.props.testIndex}
          value={scoreString} />
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
    var alert="";
    if (!functionName.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)) {
      alert =
        <Alert color="warning">
          Please enter a valid Python function name.
          Also, avoid using Python keywords (not checked here).
        </Alert>
    }
    return (
      <FormGroup>
        {alert}
        <Label for="functionName">Function Name:</Label>
        <Input type="text" name="functionName"
          // onFocus={e => e.target.select()}
          className="forPlaceHolder"
          placeholder="Fibonacci"
          onChange={this.props.formHandler}
          data-testid={this.props.testIndex}
          value={functionName} />
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
    var alert="";
    if (!functionParams.match(
        /^\s*((\*)?(\*)?[a-zA-Z_][a-zA-Z0-9_]*(\s*\=\s*[^ ]+?)?\s*,\s*)*((\*)?(\*)?[a-zA-Z_][a-zA-Z0-9_]*(\s*\=\s*[^ ]+?)?\s*,?\s*)?$/)) {
      alert =
        <Alert color="warning">
          Please enter a valid Python function parameter list.<br /> e.g., "arg1, arg2=None, *args, **kwargs".
        </Alert>
    }
    return (
      <FormGroup>
        {alert}
        <Label for="functionParams">Function Parameters:</Label>
        <Input type="text" name="functionParams"
          // onFocus={e => e.target.select()}
          className="forPlaceHolder"
          placeholder="arg1, arg2"
          onChange={this.props.formHandler}
          data-testid={this.props.testIndex}
          value={functionParams} />
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
          <Input type="textarea" name="formDescription" id="formDescription"
          onChange={this.props.formHandler}
          // onFocus={e => e.target.select()}
          className="forPlaceHolder"
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
        {testCases}
        <Button name="addTestCase"
                data-testid={this.props.testIndex}
                onClick={this.props.formHandler}
                color="secondary"
                size="sm">Add Test Case</Button>
      </ListGroup>
    )
  }
}
//props:{testCaseData:["",""], testIndex:Int, testCaseIndex:Int, functionName:scoreString,
//        functionParams:String, formHandler:Function}
class FormTestCaseInner extends React.Component {
  render() {
    var alert="";
    var validationResult = isValidArgList(this.props.functionParams,
      this.props.testCaseData[0]);
    if (!validationResult.result) {
      if (validationResult.error) {
        alert =
          <Alert color="warning">
            You have an unmatched symbol error in your No.{validationResult.count} argument.
          </Alert>
      } else {
        if (validationResult.starPresents === true) {
          alert =
            <Alert color="warning">
              You are supposed to pass in at least {validationResult.numRegular} arguments. Found {validationResult.realCount}.
            </Alert>
        } else {
          if (validationResult.numEqSigns === 0) {
            alert =
              <Alert color="warning">
                You are supposed to pass in {validationResult.numRegular} arguments. Found {validationResult.realCount}.
              </Alert>
          } else {
            alert =
              <Alert color="warning">
                You are supposed to pass in {validationResult.numRegular} required arguments, {validationResult.numEqSigns} optional arguments. Found {validationResult.realCount}.
              </Alert>
          }
        }
      }
    }
    var shouldDisableInput = validationResult.starPresents === false &&
        validationResult.numEqSigns === 0 && validationResult.numRegular === 0;
    return(
      <ListGroupItem>
        <Container fluid="true">
          <Row>
            {alert}
          </Row>
          <Row>
            <Col sm="7">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>{this.props.functionName+" ("}</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={this.props.functionParams}
                       className="forPlaceHolder"
                       name="testCaseInput"
                       data-testid={this.props.testIndex}
                       data-testcaseid={this.props.testCaseIndex}
                       onChange={this.props.formHandler}
                       value={this.props.testCaseData[0]}/>
                <InputGroupAddon addonType="append">
                  <InputGroupText>)</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col sm="1">
              <svg id="rightArrowSVG" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 408 408">
                <polygon id="rightArrowPath" points="204,102 204,0 408,204 204,408 204,306 0,306 0,102   "/>
              </svg>
            </Col>
            <Col sm="4">
              <Input placeholder="expected output"
                     className="forPlaceHolder"
                     name="testCaseOutput"
                     data-testid={this.props.testIndex}
                     data-testcaseid={this.props.testCaseIndex}
                     onChange={this.props.formHandler}
                     value={this.props.testCaseData[1]}/>
            </Col>
          </Row>
        </Container>
      </ListGroupItem>
    )
  }
}


export default FormTestCase
