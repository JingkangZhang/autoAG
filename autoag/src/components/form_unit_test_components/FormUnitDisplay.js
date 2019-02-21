import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse, Modal,ModalHeader, ModalFooter, ModalBody,
  UncontrolledTooltip
} from 'reactstrap';
//props:{formHandler:Function, testIndex:Int, display:String}
class FormUnitDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <FormGroup className="advancedSettingItem">
        <Label for="unitDisplay">
          Display:
          <span
            class="unitDisplayModalLauncher"
            onClick={this.toggle}
            >?</span>
          <UnitDisplayModal
            modal={this.state.modal}
            toggle={this.toggle}/>
        </Label>
        <Input type="select" name="unitDisplay"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            value={this.props.display} >
          <option value="show">show</option>
          <option value="hide">hide</option>
        </Input>
      </FormGroup>
    )
  }
}

class UnitDisplayModal extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader>Know your NAMESPACE</ModalHeader>
        <ModalBody>
          <p>As the name indicates, "show" option places your unit test function inside homework.py, so that the students can read it.</p>
          <p>"hide", on the other hand, places your test function inside the test file generated, making it not visible (easily).</p>
          <p>The pitfall, however, is when your test function is hidden and placed in test.py, it's in a different module than homework.py.
            Thus, you won't be able to directly call the functions you want to test on as you would in the same homework.py.
            Fortunately, homework.py has already been imported for you in test.py -- all you need to do is prepend "homework." to the names of
            functions you want to access in homework.py before calling them.</p>
          <p> e.g., <code>return student_function(input) == expected</code> when selected "show" would become <br/>
          <code>return homework.student_function(input) == expected</code> when selected "hide".</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default FormUnitDisplay;
