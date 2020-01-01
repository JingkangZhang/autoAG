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
class UnitTestCode extends React.Component {
  render() {
    return (
      <FormGroup className="advancedSettingItem">
        <Label for="unitTestCode">
            Test Code:
        </Label>
        <Input type="textarea" name="unitTestCode" spellCheck="false"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            className="forPlaceHolder"
            placeholder={this.props.placeholder}
            value={this.props.unitTestCode} >
        </Input>
      </FormGroup>
    )
  }
}
export default UnitTestCode;
