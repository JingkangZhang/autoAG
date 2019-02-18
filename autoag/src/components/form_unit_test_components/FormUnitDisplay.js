import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
//props:{formHandler:Function, testIndex:Int, display:String}
class FormUnitDisplay extends React.Component {
  render() {
    return (
      <FormGroup className="advancedSettingItem">
        <Label for="unitDisplay">Display:</Label>
        <Input type="select" name="unitDisplay"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            value={this.props.display} >
          <option value="show">show</option>
          <option value="hide">hide</option>
        </Input>
      </FormGroup>
    )
  }
}
export default FormUnitDisplay;
