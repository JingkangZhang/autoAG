import React, { Component } from 'react';
import {
  Form, Label, FormGroup, Input, Button, Collapse
} from 'reactstrap';
import FormTestCase from "./FormTestCase.js"
//props:{
//  formState:{
//    pointsEnabled: Bool,
//    starterCode:String,
//    tests:[{},{}]
//  },
//  formHandler:Function
//}
class InputField extends React.Component {
  render() {
    var testList = [];
    for (var i = 0; i < this.props.formState.tests.length; i++) {
      testList.push(
        <FormTestCase testData={this.props.formState.tests[i]}
          testIndex={i}
          pointsEnabled={this.props.formState.pointsEnabled}
          formHandler={this.props.formHandler}/>
      )
    }
    return (
      <Form className="InputField">
        <FormPointsEnabled formHandler={this.props.formHandler}
              pointsEnabled={this.props.formState.pointsEnabled} />
        <FormStarterCode formHandler={this.props.formHandler}
          starterCode={this.props.formState.starterCode} />
        {testList}
        <Button name="addTest" onClick={this.props.formHandler}
          color="secondary" size="sm">Add Question</Button>
      </Form>
    )
  }
}
//props:{pointsEnabled:Bool, formHandler:Function}
class FormPointsEnabled extends React.Component {
  render() {
    return (
      <FormGroup className="pointsEnabledGroup" check>
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
//props:{starterCode:String, formHandler:Function}
class FormStarterCode extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      collapse: true
    };
  }
  handleToggle(e) {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <div class="starterCodeForm">
        <Button className="starterCodeHeader" onClick={this.handleToggle}>
          Starter Code
        </Button>
        <Collapse  isOpen={!this.state.collapse}>
          <div>
            <Form >
              <FormGroup id="starterFormGroup">
                <Label for="starterCodeTextarea">To be placed at the beginning of the homework file. </Label>
                <Input type="textarea"
                  value={this.props.starterCode}
                  onChange={this.props.formHandler}
                  name="starterCode"
                  id="starterCodeTextarea"
                  className="codeInput forPlaceHolder"
                  placeholder="from math import *">
                </Input>
              </FormGroup>
            </Form>
          </div>
        </Collapse>

      </div>

    )
  }
}
export default InputField
