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
class FormSkeletonCode extends React.Component {
  render() {
    return (
      <FormGroup className="advancedSettingItem">
        <Label for="skeletonCode">Skeleton Code:</Label>
        <Input type="textarea" name="skeletonCode"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            className="forPlaceHolder"
            placeholder="'*** YOUR CODE HERE ***'"
            value={this.props.skeletonCode} >
        </Input>
      </FormGroup>
    )
  }
}
export default FormSkeletonCode;
