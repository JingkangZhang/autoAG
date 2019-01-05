import React, { Component } from 'react';
import {
  Form, Label, CustomInput, FormGroup, Input, Button
} from 'reactstrap';

//props:{formState:{pointsEnabled: Bool, tests:[{},{}]}, formHandler:Function}
class InputField extends React.Component {
  render() {
    var testList = [];
    for (var i = 0; i < this.props.formState.tests.length; i++) {
      testList.push(
        <FormTestCase testData={this.props.formState.tests[i]} testIndex={i}
          pointsEnabled={this.props.formState.pointsEnabled} formHandler={this.props.formHandler}/>
      )
    }
    return (
      <Form>
        <FormPointsEnabled formHandler={this.props.formHandler}
              pointsEnabled={this.props.formState.pointsEnabled}/>
        {testList}
        <Button name="addTestButton" onClick={this.props.formHandler}
          color="secondary" size="sm">Add Test</Button>
      </Form>
    )
  }
}
//props:{pointsEnabled:Bool, formHandler:Function}
class FormPointsEnabled extends React.Component {
  render() {
    return (
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="pointsEnabled"
              onChange={this.props.formHandler} checked={this.props.pointsEnabled}/>{' '}
          Points enabled
        </Label>
      </FormGroup>
    )
  }
}

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
        <FormTestCaseTestType formHandler={this.props.formHandler}
          testIndex={this.props.testIndex}
          testType={this.props.testData.testType} />
      </div>

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
export default InputField
