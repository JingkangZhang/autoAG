import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert
} from 'reactstrap';

{
  // props:{
  //   testData:{
  //     testType: "simple",
  //     functionName: null,
  //     testName: null,
  //     testArgument: null,
  //     description: null,
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
        <FormFullScore formHandler={this.props.formHandler}
          testIndex={this.props.testIndex}
          fullScore={this.props.testData.fullScore}/>
        <FormTestCaseTestType formHandler={this.props.formHandler}
          testIndex={this.props.testIndex}
          testType={this.props.testData.testType} />
        <FormFunctionName formHandler={this.props.formHandler}
          testIndex={this.props.testIndex}
          functionName={this.props.testData.functionName} />
      </div>

    )
  }
}

//props:{formHandler:Function, testIndex:Int, fullScore:String}
class FormFullScore extends React.Component {
  render() {
    var scoreString = this.props.fullScore;
    alert="";
    if (isNaN(scoreString)) {
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
          onFocus={e => e.target.select()}
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
    // console.log(this.props);
    var functionName = this.props.functionName;
    alert="";
    if (!functionName.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)) {
      alert =
        <Alert color="warning">
          Please enter a valid Python function name. Also, avoid using Python keywords (not checked here).
        </Alert>
    }
    return (
      <FormGroup>
        {alert}
        <Label for="functionName">Function Name:</Label>
        <Input type="text" name="functionName"
          onFocus={e => e.target.select()}
          className="forPlaceHolder"
          placeholder="Fibonacci"
          onChange={this.props.formHandler}
          data-testid={this.props.testIndex}
          value={functionName} />
      </FormGroup>
    )
  }
}
export default FormTestCase
