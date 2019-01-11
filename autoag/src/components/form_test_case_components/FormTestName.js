import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
//props:{formHandler:Function, testIndex:Int,
//  functionName:String, testName:String}
class FormTestName extends React.Component {
  render() {
    return (
      <FormGroup className="advancedSettingItem">
        <Label for="testName" >
          Test Name:
        </Label>
        <Input type="text" name="testName" spellcheck="false"
          className="forPlaceHolder codeInput"
          placeholder={"Default: " + this.props.functionName}
          onChange={this.props.formHandler}
          data-testid={this.props.testIndex}
          value={this.props.testName} />
      </FormGroup>
    )
  }
}
export default FormTestName;
