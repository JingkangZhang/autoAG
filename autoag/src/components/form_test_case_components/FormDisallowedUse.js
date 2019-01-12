import React from 'react';
import {
  FormGroup, Input, Button, Label, Alert,
  ListGroup, ListGroupItem,InputGroupText,InputGroupAddon,InputGroup,
  Container, Row, Col,
  Badge,
  Collapse, Table,
  UncontrolledTooltip, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import FilteredMultiSelect from 'react-filtered-multiselect';

//props:{formHandler:Function, testIndex:Int,
//  disallowedUse:String}
class FormDisallowedUse extends React.Component {
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
    var s = this.props.disallowedUse;
    var alertClassName="";
    var alertbox="";
    if (!s.match(/^(?:\s*(["'])(?:Add|And|Assert|Assign|AugAssign|BitAnd|BitOr|BitXor|Break|Recursion|ClassDef|Continue|Del|Delete|Dict|DictComp|Div|Ellipsis|Eq|ExceptHandler|ExtSlice|FloorDiv|For|FunctionDef|GeneratorExp|Global|Gt|GtE|If|IfExp|Import|ImportFrom|In|Index|Invert|Is|IsNot|LShift|Lambda|List|ListComp|Lt|LtE|Mod|Mult|Nonlocal|Not|NotEq|NotIn|Or|Pass|Pow|RShift|Raise|Return|Set|SetComp|Slice|Starred|Sub|Subscript|Try|Tuple|UAdd|USub|While|With|Yield|YieldFrom)\1\s*,\s*)*(?:\s*(["'])(?:Add|And|Assert|Assign|AugAssign|BitAnd|BitOr|BitXor|Break|Recursion|ClassDef|Continue|Del|Delete|Dict|DictComp|Div|Ellipsis|Eq|ExceptHandler|ExtSlice|FloorDiv|For|FunctionDef|GeneratorExp|Global|Gt|GtE|If|IfExp|Import|ImportFrom|In|Index|Invert|Is|IsNot|LShift|Lambda|List|ListComp|Lt|LtE|Mod|Mult|Nonlocal|Not|NotEq|NotIn|Or|Pass|Pow|RShift|Raise|Return|Set|SetComp|Slice|Starred|Sub|Subscript|Try|Tuple|UAdd|USub|While|With|Yield|YieldFrom)\2\s*)?$/)) {
      alertbox =
        <span class="labelAlert" id={"disallowedUseAlert"+ this.props.testIndex}>
          <UncontrolledTooltip
            placement="right"
            target={"disallowedUseAlert"+ this.props.testIndex}
            arrowClassName="AlertTooltipArrow"
            className="AlertTooltip">
            Please enter valid names (exactly as shown, case sensitive) surrounded by quotes and separated by commas.
          </UncontrolledTooltip>
        </span>;
      alertClassName="alertBorder";
    }
    return (
      <FormGroup className="advancedSettingItem">
        <div className={alertClassName}>
          <Label for="disallowedUse" >
            <span>
              Disallowed Use:
              <span
                class="disallowedUseModalLauncher"
                onClick={this.toggle}
                >?</span>
              <DisallowedUseModal
                modal={this.state.modal}
                toggle={this.toggle}/>
            </span>
            {alertbox}
          </Label>
          <Input type="text" name="disallowedUse" spellcheck="false"
            className="forPlaceHolder"
            placeholder="'While', 'For'"
            onChange={this.props.formHandler}
            data-testid={this.props.testIndex}
            value={this.props.disallowedUse} />
        </div>
      </FormGroup>

    )
  }

}
class DisallowedUseModal extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader>Construct Check For Disallowed Use</ModalHeader>
        <ModalBody>
          <p>Credits: Berkeley CS61A course staff.</p>
          <p>This amazing python module wrote by CS61A staff checks for certain usage patterns in a python file. Very useful, for example, when you want your testees write a recursive/iterative solution without using loops/recursive calls.</p>
          <p>To include these checks for disallowed usages, put the names on the left column in quotes and separate them with commas.</p>
          <p>e.g., 'Add', 'Pow'</p>
<Table size="sm"><thead><tr><th>Name</th><th>Pattern</th></tr></thead><tbody><tr><td>Add</td><td>+</td></tr><tr><td>And</td><td>and</td></tr><tr><td>Assert</td><td>assert</td></tr><tr><td>Assign</td><td>=</td></tr><tr><td>AugAssign</td><td>op=</td></tr><tr><td>BitAnd</td><td>&</td></tr><tr><td>BitOr</td><td>|</td></tr><tr><td>BitXor</td><td>^</td></tr><tr><td>Break</td><td>break</td></tr><tr><td>Recursion</td><td>recursive call</td></tr><tr><td>ClassDef</td><td>class</td></tr><tr><td>Continue</td><td>continue</td></tr><tr><td>Del</td><td>del</td></tr><tr><td>Delete</td><td>delete</td></tr><tr><td>Dict</td><td>{"{"}...{"}"}</td></tr><tr><td>DictComp</td><td>{"{"}...{"}"}</td></tr><tr><td>Div</td><td>/</td></tr><tr><td>Ellipsis</td><td>...</td></tr><tr><td>Eq</td><td>==</td></tr><tr><td>ExceptHandler</td><td>except</td></tr><tr><td>ExtSlice</td><td>[::]</td></tr><tr><td>FloorDiv</td><td>//</td></tr><tr><td>For</td><td>for</td></tr><tr><td>FunctionDef</td><td>def</td></tr><tr><td>GeneratorExp</td><td>(... for ...)</td></tr><tr><td>Global</td><td>global</td></tr><tr><td>Gt</td><td>&gt;</td></tr><tr><td>GtE</td><td>&gt;=</td></tr><tr><td>If</td><td>if</td></tr><tr><td>IfExp</td><td>...if...else...</td></tr><tr><td>Import</td><td>import</td></tr><tr><td>ImportFrom</td><td>from ... import ...</td></tr><tr><td>In</td><td>in</td></tr><tr><td>Index</td><td>...[...]</td></tr><tr><td>Invert</td><td>~</td></tr><tr><td>Is</td><td>is</td></tr><tr><td>IsNot</td><td>is not </td></tr><tr><td>LShift</td><td>&lt;&lt;</td></tr><tr><td>Lambda</td><td>lambda</td></tr><tr><td>List</td><td>[...]</td></tr><tr><td>ListComp</td><td>[...for...]</td></tr><tr><td>Lt</td><td>&lt;</td></tr><tr><td>LtE</td><td>&lt;=</td></tr><tr><td>Mod</td><td>%</td></tr><tr><td>Mult</td><td>*</td></tr><tr><td>Nonlocal</td><td>nonlocal</td></tr><tr><td>Not</td><td>not</td></tr><tr><td>NotEq</td><td>!=</td></tr><tr><td>NotIn</td><td>not in</td></tr><tr><td>Or</td><td>or</td></tr><tr><td>Pass</td><td>pass</td></tr><tr><td>Pow</td><td>**</td></tr><tr><td>RShift</td><td>&gt;&gt;</td></tr><tr><td>Raise</td><td>raise</td></tr><tr><td>Return</td><td>return</td></tr><tr><td>Set</td><td>{"{"} ... {"}"} (set)</td></tr><tr><td>SetComp</td><td>{"{"} ... for ... {"}"} (set)</td></tr><tr><td>Slice</td><td>[ : ]</td></tr><tr><td>Starred</td><td></td></tr><tr><td>Sub</td><td>-</td></tr><tr><td>Subscript</td><td>[]</td></tr><tr><td>Try</td><td>try</td></tr><tr><td>Tuple</td><td>(... , ... )</td></tr><tr><td>UAdd</td><td>+</td></tr><tr><td>USub</td><td>-</td></tr><tr><td>While</td><td>while</td></tr><tr><td>With</td><td>with</td></tr><tr><td>Yield</td><td>yield</td></tr><tr><td>YieldFrom</td><td>yield from</td></tr></tbody></Table>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
export default FormDisallowedUse;
