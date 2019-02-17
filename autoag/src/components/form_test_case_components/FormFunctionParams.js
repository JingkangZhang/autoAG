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
//      functionName:String, functionParams:String,
//      placeholder:String}
class FormFunctionParams extends React.Component {
  render() {
    var functionName = this.props.functionName;
    var functionParams = this.props.functionParams;
    var alertClassName="";
    var alertbox="";
    if (!functionParams.match(
        /^\s*((\*)?(\*)?[a-zA-Z_][a-zA-Z0-9_]*(\s*\=\s*[^ ]+?)?\s*,\s*)*((\*)?(\*)?[a-zA-Z_][a-zA-Z0-9_]*(\s*\=\s*[^ ]+?)?\s*,?\s*)?$/)) {
      alertbox =
        <span class="labelAlert" id={"functionNameAlert" + this.props.testIndex}>
          <UncontrolledTooltip
            placement="right"
            target={"functionNameAlert" + this.props.testIndex}
            arrowClassName="AlertTooltipArrow"
            className="AlertTooltip">
            Please enter a valid Python function parameter list.<br /> e.g., "arg1, arg2=None, *args, **kwargs".
          </UncontrolledTooltip>
        </span>;
      alertClassName="alertBorder";
    }
    return (
      <FormGroup>
        <div className={alertClassName}>
          {alert}
          <Label for="functionParams">
            <span>Function Parameters:</span>
            {alertbox}
          </Label>
          <Input type="text" name="functionParams" spellcheck="false"
            // onFocus={e => e.target.select()}
            className="forPlaceHolder codeInput"
            placeholder={this.props.placeholder}
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            value={functionParams} />
        </div>
      </FormGroup>
    )
  }
}
export default FormFunctionParams;
