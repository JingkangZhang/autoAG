import React, { Component } from 'react';
import {
  Form, Label, CustomInput, FormGroup, Input
} from 'reactstrap';
class InputField extends React.Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    // this.state = {
    //   isOpen: false
    // };
  }

  render() {
    return (
      <Form>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Points enabled
        </Label>
      </FormGroup>
      </Form>
    )
  }
}
export default InputField
