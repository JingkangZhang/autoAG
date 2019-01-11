import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
//props:{formHandler:Function, testIndex:Int, fullScore:String}
class FormFullScore extends React.Component {
  render() {
    var scoreString = this.props.fullScore;
    var alertClassName="";
    var alertbox="";
    if (scoreString==="" || isNaN(scoreString)) {
      alertbox =
        <span class="labelAlert" id={"fullScoreAlert" + this.props.testIndex}>
          <UncontrolledTooltip
            placement="right"
            target={"fullScoreAlert" + this.props.testIndex}
            arrowClassName="AlertTooltipArrow"
            className="AlertTooltip">
            Please enter a valid number.
          </UncontrolledTooltip>
        </span>;
      alertClassName="alertBorder";
    }
    return (
      <FormGroup className="advancedSettingItem">
        <div className={alertClassName}>
          <Label for="fullScore">
            <span>Full Score:</span>
            {alertbox}
          </Label>
          <Input type="text" name="fullScore"
            className="forPlaceHolder"
            placeholder="1"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            value={scoreString} />
        </div>
      </FormGroup>
    )
  }
}
export default FormFullScore;
