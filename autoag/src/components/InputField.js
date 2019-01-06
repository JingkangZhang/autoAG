import React, { Component } from 'react';
import {
  Form, Label, FormGroup, Input, Button
} from 'reactstrap';
import FormTestCase from "./FormTestCase.js"
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

export default InputField
