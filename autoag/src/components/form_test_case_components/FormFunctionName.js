import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
//props:{formHandler:Function, testIndex:Int, functionName:String}
class FormFunctionName extends React.Component {
  render() {
    var functionName = this.props.functionName;
    var alertClassName="";
    var alertbox="";
    if (!functionName.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)) {
      alertbox =
        <span class="labelAlert" id={"functionNameAlert"+ this.props.testIndex}>
          <UncontrolledTooltip
            placement="right"
            target={"functionNameAlert"+ this.props.testIndex}
            arrowClassName="AlertTooltipArrow"
            className="AlertTooltip">
            Please enter a valid Python function name.
          </UncontrolledTooltip>
        </span>;
      alertClassName="alertBorder";
    }
    return (
      <FormGroup>
        <div className={alertClassName}>
          <Label for="functionName" >
            <span>Function Name:</span>
            {alertbox}
          </Label>
          <Input type="text" name="functionName" spellcheck="false"
            className="forPlaceHolder codeInput"
            placeholder="Fibonacci"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            value={functionName} />
        </div>
      </FormGroup>
    )
  }
}
export default FormFunctionName;
