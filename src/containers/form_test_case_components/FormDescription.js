import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
//props:{formHandler:Function, testIndex:Int, description:String, placeholder: String}
class FormDescription extends React.Component {
  render() {
    return (
      <FormGroup>
          <Label for="exampleText">
            {this.props.type == "simple" ?
              "Question Description:"
              :
              "Test Description:"
            }
          </Label>
          <Input type="textarea" name="formDescription" spellcheck="false"
          id="formDescription"
          onChange={this.props.formHandler}
          className="forPlaceHolder codeInput"
          data-testid={this.props.testIndex}
          placeholder={this.props.placeholder}
          value={this.props.description} />
        </FormGroup>
    )
  }
}
export default FormDescription;
