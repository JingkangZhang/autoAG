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
import FormTestType from './FormTestType';
import FormTestName from './FormTestName';
import FormPartialCredits from './FormPartialCredits';
import FormSkeletonCode from './FormSkeletonCode';
import FormDisallowedUse from './FormDisallowedUse';

//props:{
//  formHandler:Function,
//  testIndex:Int,
//  pointsEnabled: Boolean,
//  functionName: String,
//  advancedSetting: {
//    fullScore: "1",
//    testType: "simple",
//    testName: "",
//    partialCredits: "none",
//    skeletonCode: "",
//    testForDisallowedUse: String,
//  }
//}
class FormAdvancedSetting extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      collapse: true
    };
  }
  handleToggle(e) {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <div class="advancedSetting">
        <Button className="advancedSettingHeader"
              color="dark"
              onClick={this.handleToggle}>
          Advanced Settings
        </Button>
        <Collapse  isOpen={!this.state.collapse}>
          <div class="advancedSettingGroup">
            {this.props.pointsEnabled &&
              <FormFullScore
                formHandler={this.props.formHandler}
                testIndex={this.props.testIndex}
                fullScore={this.props.advancedSetting.fullScore}/>
            }
            {this.props.pointsEnabled &&
              <FormPartialCredits
                formHandler={this.props.formHandler}
                testIndex={this.props.testIndex}
                partialCredits={this.props.advancedSetting.partialCredits}/>
            }
            <FormTestType
              formHandler={this.props.formHandler}
              testIndex={this.props.testIndex}
              testType={this.props.advancedSetting.testType} />
            <FormTestName
              formHandler={this.props.formHandler}
              testIndex={this.props.testIndex}
              functionName={this.props.functionName}
              testName={this.props.advancedSetting.testName} />
            <FormSkeletonCode
              formHandler={this.props.formHandler}
              testIndex={this.props.testIndex}
              skeletonCode={this.props.advancedSetting.skeletonCode} />
            <FormDisallowedUse
              formHandler={this.props.formHandler}
              testIndex={this.props.testIndex}
              disallowedUse={this.props.advancedSetting.disallowedUse} />
            <div class="advancedSettingBottomBorder"></div>
          </div>

        </Collapse>
      </div>
    )
  }
}
export default FormAdvancedSetting;
