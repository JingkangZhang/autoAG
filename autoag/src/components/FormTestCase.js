import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
} from 'reactstrap';

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
  render() {
    return (
      <div>
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

    )
  }
}

//props:{formHandler:Function, testIndex:Int, fullScore:String}
class FormFullScore extends React.Component {
  render() {
    var scoreString = this.props.fullScore;
    alert="";
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
    alert="";
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
    alert="";
    if (!functionParams.match(
        /^\s*((\*)?(\*)?[a-zA-Z_][a-zA-Z0-9_]*(\=.+?)?\s*,?\s*)*$/)) {
      alert =
        <Alert color="warning">
          Please enter a valid Python function parameter list. e.g., "arg1, arg2=None, *args, **kwargs".
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
          functionName={this.props.functionName}
          functionParams={this.props.functionParams}
          formHandler={this.props.formHandler}/>
      )
    }
    return (
      <ListGroup>
        {testCases}
        <Button name="addTestCaseButton" onClick={this.props.formHandler}
          color="secondary" size="sm">Add Test Case</Button>
      </ListGroup>
    )
  }
}
//props:{testCaseData:["",""], testCaseIndex:Int, functionName:scoreString,
//        functionParams:String, formHandler:Function}
class FormTestCaseInner extends React.Component {
  render() {
    return(
      <ListGroupItem>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>{this.props.functionName+"("}</InputGroupText>
          </InputGroupAddon>
          <Input placeholder={this.props.functionParams}
                  className="forPlaceHolder"/>
          <InputGroupAddon addonType="append">
            <InputGroupText>)</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </ListGroupItem>
    )
  }
}

export default FormTestCase
