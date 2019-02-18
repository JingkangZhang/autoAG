import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
//props:{formHandler:Function, testIndex:Int, testType:String}
class FormTestType extends React.Component {
  render() {
    return (
      <FormGroup className="advancedSettingItem">
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
export default FormTestType;
