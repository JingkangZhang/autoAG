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
        <Label for="skeletonCode">
          {this.props.type === "simple" ?
            "Skeleton Code:"
            :
            "Test Code:"
          }

        </Label>
        <Input type="textarea" name="skeletonCode"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            className="forPlaceHolder"
            placeholder={this.props.placeholder}
            value={this.props.skeletonCode} >
        </Input>
      </FormGroup>
    )
  }
}
export default FormSkeletonCode;
