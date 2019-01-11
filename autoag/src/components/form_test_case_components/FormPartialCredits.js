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
//  partialCredits:String}
class FormPartialCredits extends React.Component {
  render() {
    return (
      <FormGroup className="advancedSettingItem">
        <Label for="partialCredits">Partial Credits:</Label>
        <Input type="select" name="partialCredits"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            value={this.props.partialCredits} >
          <option value="none">none</option>
          <option value="linear">linear</option>
        </Input>
      </FormGroup>
    )
  }
}
export default FormPartialCredits;
