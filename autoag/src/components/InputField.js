import React, { Component } from 'react';
import {
  Form, Label, CustomInput, FormGroup, Input, Button
} from 'reactstrap';
class InputField extends React.Component {
  render() {
    var testList = this.props.formState.tests.map(function(d) {
      return <FormTestCase testData={d}/>
    })
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

class FormTestCase extends React.Component {
  render() {
    return (
      <textarea value={this.props.testData.partialCredits}></textarea>
    )
  }
}
export default InputField
