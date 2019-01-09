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
          className="formTestCase"
          pointsEnabled={this.props.formState.pointsEnabled}
          formHandler={this.props.formHandler}/>
      )
    }
    return (
      <Form>
        <FormPointsEnabled formHandler={this.props.formHandler}
              pointsEnabled={this.props.formState.pointsEnabled}/>
        {testList}
        <Button name="addTest" onClick={this.props.formHandler}
          color="secondary" size="sm">Add Test</Button>
      </Form>
    )
  }
}
//props:{pointsEnabled:Bool, formHandler:Function}
class FormPointsEnabled extends React.Component {
  render() {
    return (
      <FormGroup className="pointsEnabledGroup" check
        data-color={
          this.props.pointsEnabled ?
          "#E5F4E9"
          :
          "#F1F1F1"
        }>
        <Label check>
            <span class="pointsEnabledButtonGroup"
              data-content= {
                this.props.pointsEnabled ?
                "Scored"
                :
                "Unscored"
              }>
              <input class="tgl tgl-light pointsEnabled" id="cb1"
                   type="checkbox" name="pointsEnabled"
                   onChange={this.props.formHandler}
                   checked={this.props.pointsEnabled}/>
              <label class="tgl-btn" for="cb1"></label>
            </span>
        </Label>

      </FormGroup>
    )
  }
}

export default InputField
