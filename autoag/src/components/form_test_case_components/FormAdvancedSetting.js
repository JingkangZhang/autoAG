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
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.state = {
      collapse: true,
      numErrors: 0,
      status: 'Closed'
    };
  }
  handleToggle(e) {
    this.setState({ collapse: !this.state.collapse });
  }
  onExiting() {
   this.setState({ status: 'Closing...' });
  }
  onExited() {
    this.setState({ status: 'Closed' });
  }
  componentDidUpdate(prevProps, prevState) {
    var currNumErrors =
      document.querySelectorAll(
        "#" + "formTestCase"+ this.props.testIndex + ' .advancedSetting .alertBorder').length;

    if (prevState.numErrors !== currNumErrors) {
      this.setState({numErrors: currNumErrors});
    }
  }
  render() {
    return (
      <div class="advancedSetting">
        <Button className="advancedSettingHeader"
              color="dark"
              onClick={this.handleToggle}>
          Advanced Settings
          {this.state.numErrors !== 0 && this.state.collapse && this.state.status === 'Closed'?
            <Badge className="numErrorBadge" color="danger" pill>{this.state.numErrors}</Badge>
            :
            ""
          }
        </Button>
        <Collapse  isOpen={!this.state.collapse}
          onExiting={this.onExiting}
          onExited={this.onExited}>
          <div class="advancedSettingGroup">
            {this.props.pointsEnabled && this.props.testType === "simple" &&
              <FormFullScore
                formHandler={this.props.formHandler}
                testIndex={this.props.testIndex}
                fullScore={this.props.advancedSetting.fullScore}/>
            }
            {this.props.pointsEnabled && this.props.testType === "simple" &&
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
              skeletonCode={this.props.advancedSetting.skeletonCode}
              placeholder="'*** YOUR CODE HERE ***'"
              type="simple"/>
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
