import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
import FormFullScore from './FormFullScore';
import FormTestCaseTestType from './FormTestCaseTestType';
//props:{
//  formHandler:Function,
//  testIndex:Int,
//  pointsEnabled: Boolean,
//  advancedSetting: {
//    fullScore: "1",
//    testType: "simple",
//    testName: "",
//    partialCredits: "none",
//    skeletonCode: "",
//    testForDisallowedUse: [],
//  }
//}
class FormAdvancedSetting extends React.Component {
  render() {
    return (
      <div class="advancedSetting">
        {this.props.pointsEnabled &&
          <FormFullScore
            formHandler={this.props.formHandler}
            testIndex={this.props.testIndex}
            fullScore={this.props.advancedSetting.fullScore}/>
        }
        <FormTestCaseTestType
          formHandler={this.props.formHandler}
          testIndex={this.props.testIndex}
          testType={this.props.advancedSetting.testType} />
      </div>
    )
  }
}
export default FormAdvancedSetting;
