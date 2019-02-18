import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
import FormFullScore from '../form_test_case_components/FormFullScore';
import FormUnitDisplay from './FormUnitDisplay';
//props:{
//  formHandler:Function,
//  testIndex:Int,
//  pointsEnabled: Boolean,
//  advancedSetting: {
//    fullScore: "1",
//    display: "show"
//    testType: "unit_test",
//  }
//}
class FormUnitAdvancedSetting extends React.Component {
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
        "#" + "formUnitTestCase"+ this.props.testIndex + ' .advancedSetting .alertBorder').length;

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
            {this.props.pointsEnabled &&
              <FormFullScore
                formHandler={this.props.formHandler}
                testIndex={this.props.testIndex}
                fullScore={this.props.advancedSetting.fullScore}/>
            }

            <FormUnitDisplay
              formHandler={this.props.formHandler}
              testIndex={this.props.testIndex}
              display={this.props.advancedSetting.display} />
            <div class="advancedSettingBottomBorder"></div>
          </div>

        </Collapse>
      </div>
    )
  }
}
export default FormUnitAdvancedSetting;
