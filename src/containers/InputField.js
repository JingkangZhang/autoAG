/* eslint-disable max-classes-per-file */
import React, { Component } from 'react';
import {
  Form, Label, FormGroup, Input, Button, Collapse,
} from 'reactstrap';
import FormTestCase from './FormTestCase.js';
import FormUnitTestCase from './FormUnitTestCase.js';

// props:{
//  formState:{
//    pointsEnabled: Bool,
//    starterCode:String,
//    tests:[{},{}]
//  },
//  formHandler:Function
// }
class InputField extends React.Component {
  render() {
    let testList = [];
    let questionIndex = 0;
    for (let i = 0; i < this.props.formState.tests.length; i++) {
      let test = this.props.formState.tests[i];
      if (test.advancedSetting.testType === 'unit_test') {
        testList.push(
          <FormUnitTestCase
testData={test}
            testIndex={i}
            pointsEnabled={this.props.formState.pointsEnabled}
            formHandler={this.props.formHandler} 
          />,
        );
      } else {
        testList.push(
          <FormTestCase
testData={test}
            testIndex={i}
            questionIndex={questionIndex}
            pointsEnabled={this.props.formState.pointsEnabled}
            formHandler={this.props.formHandler} 
          />,
        );
        questionIndex++;
      }
    }
    return (
      <Form className="InputField">
        <FormPointsEnabled
formHandler={this.props.formHandler}
          pointsEnabled={this.props.formState.pointsEnabled}
        />
        <FormStarterCode
formHandler={this.props.formHandler}
          starterCode={this.props.formState.starterCode}
        />
        {testList}
        <Button
name="addTest"
onClick={this.props.formHandler}
          color="secondary"
size="sm"
        >
Add Question

        </Button>
        <Button
name="addUnitTest"
onClick={this.props.formHandler}
          className="addUnitTestButton"
color="warning"
size="sm"
        >
Add Unit Test

        </Button>
      </Form>
    );
  }
}
// props:{pointsEnabled:Bool, formHandler:Function}
class FormPointsEnabled extends React.Component {
  render() {
    return (
      <FormGroup className="pointsEnabledGroup" check>
        <Label check>
          <span
className="pointsEnabledButtonGroup"
              data-content={
                this.props.pointsEnabled
                ? 'Scored'
                :                'Unscored'
              }
            >
              <input
className="tgl tgl-light pointsEnabled" id="cb1"
                type="checkbox"
name="pointsEnabled"
                onChange={this.props.formHandler}
                checked={this.props.pointsEnabled} 
              />
              <label className="tgl-btn" htmlFor="cb1" />
            </span>
        </Label>

      </FormGroup>
    );
  }
}
// props:{starterCode:String, formHandler:Function}
class FormStarterCode extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      collapse: true,
    };
  }

  handleToggle(e) {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="starterCodeForm">
        <Button className="starterCodeHeader" onClick={this.handleToggle}>
          Starter Code
        </Button>
        <Collapse isOpen={!this.state.collapse}>
          <div>
            <Form>
              <FormGroup id="starterFormGroup">
                <Label for="starterCodeTextarea">To be placed at the beginning of the homework file. </Label>
                <Input
type="textarea"
                  value={this.props.starterCode}
                  onChange={this.props.formHandler}
                  name="starterCode"
                  id="starterCodeTextarea"
                  className="codeInput forPlaceHolder"
                  placeholder="from math import *"
                >
                </Input>
              </FormGroup>
            </Form>
          </div>
        </Collapse>

      </div>

    );
  }
}
export default InputField;
