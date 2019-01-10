import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
//props:{formHandler:Function, testIndex:Int, description:String}
class FormDescription extends React.Component {
  render() {
    return (
      <FormGroup>
          <Label for="exampleText">Question Description:</Label>
          <Input type="textarea" name="formDescription" spellcheck="false"
          id="formDescription"
          onChange={this.props.formHandler}
          // onFocus={e => e.target.select()}
          className="forPlaceHolder codeInput"
          data-testid={this.props.testIndex}
          placeholder="Return the Nth fibonacci number."
          value={this.props.description} />
        </FormGroup>
    )
  }
}
export default FormDescription;
