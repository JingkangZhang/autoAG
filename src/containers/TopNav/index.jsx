import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledTooltip,
  Input,
  Popover,
  PopoverHeader,
  PopoverBody,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import { uploadAutograder, uploadSolution } from 'services/';
import Spinner from 'components/Spinner';
import { generateTest } from 'containers/generateTest';
import { generateHomeworkText } from 'containers/generateHomeworkText';

import './index.css';

// import githubMark from '../GitHub-Mark-64px.png'

// props : {formHandler: Function}
class TopNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleImportPopover = this.toggleImportPopover.bind(this);
    this.togglePublishPopover = this.togglePublishPopover.bind(this);

    this.toggleHelp = this.toggleHelp.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.handlePublishChange = this.handlePublishChange.bind(this);
    this.handlePublishClick = this.handlePublishClick.bind(this);
    this.state = {
      navIsOpen: false,
      importPopoverOpen: false,
      publishPopoverOpen: false,
      helpOpen: false,
      publishName: '',
      emptyPublishNameWarning: ' ',
      publishing: false,
      publishStatusText: '',
      publishFailed: false,
    };
  }

  handlePublishChange(e) {
    this.setState({
      publishName: e.target.value,
    });
  }

  toggleNav() {
    this.setState({
      navIsOpen: !this.state.navIsOpen,
    });
  }

  toggleImportPopover() {
    this.setState({
      importPopoverOpen: !this.state.importPopoverOpen,
    });
  }

  togglePublishPopover() {
    this.setState({
      publishPopoverOpen: !this.state.publishPopoverOpen,
      emptyPublishNameWarning: ' ',
    });
  }

  toggleHelp() {
    this.setState({
      helpOpen: !this.state.helpOpen,
    });
  }

  clickHandler(...args) {
    this.props.formHandler(...args);
    this.setState({
      helpOpen: false,
    });
  }

  async handlePublishClick() {
    this.setState({ publishStatusText: '' });
    const { publishName } = this.state;
    if (publishName == false) {
      this.setState({
        emptyPublishNameWarning: 'Please enter a valid homework name',
      });
    } else {
      this.setState({
        emptyPublishNameWarning: ' ',
        publishing: true,
      });
      uploadAutograder(
        this.state.publishName,
        {
          agCode: generateTest(this.props.formState),
          hwCode: generateHomeworkText(this.props.formState),
        },
      ).then((result) => {
        this.setState({
          publishName: '',
          publishing: false,
          publishFailed: false,
          publishStatusText: `Your homework has been deployed. ID:\n${result}`,
        });
      }).catch((e) => {
        this.setState({
          publishing: false,
          publishFailed: true,
          publishStatusText:
            e,
        });
      });
    }
  }


  render() {
    const {
      publishing, publishStatusText, publishFailed, publishName, publishPopoverOpen,
    } = this.state;
    return (
      <Navbar className="topNav" color="light" light expand="sm">
        <NavbarBrand id="autoAGBrand">autoAG</NavbarBrand>
        <UncontrolledTooltip
          placement="right"
          trigger="hover"
          target="autoAGBrand"
          delay="{show:0, hide:0}"
          arrowClassName="CalTooltipArrow"
          className="CalTooltip"
        >
        Much Love For Cal!
        </UncontrolledTooltip>

        <span id="navbarPython">Python</span>
        <UncontrolledTooltip
          placement="bottom"
          trigger="hover"
          target="navbarPython"
        >
        Currently only available in Python. More languange support coming
        soon.
        </UncontrolledTooltip>

        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.navIsOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink onClick={this.toggleHelp}>Help and Usage</NavLink>
            </NavItem>
            <Modal
              isOpen={this.state.helpOpen}
              toggle={this.toggleHelp}
              className="modal-lg"
            >
              <ModalHeader toggle={this.toggleHelp}>
              Welcome to Jingkang Zhang's auto-auto-grader!
              </ModalHeader>
              <ModalBody>
                <p>
                This educational project was developed while I was teaching
                Python classes online. It's meant to make composing coding
                homework easy and fun for educators!
                </p>
                <h3>Overview</h3>
                <p>
                There are two types of tests you can created with autoAG:
                simple and unit. Simple questions are ones that ask students
                to write a pure function, i.e., the function is tested solely
                basing on input-output matchings. This should satisfy needs
                for most problems. When you click on "Add Question" button,
                the added question is "simple" by default. In this case, you
                specify the function signatures (name, parameters, skeleton
                code, etc) and tests in the same block.
                </p>
                <p>
                When writing a unit test, on the other hand, the question is
                separate from the tests. To make a question "unit", click on
                "Advanced Settings - Test Type - unit test". As you'll notice,
                this changes the current block, and adds a new test block
                (yellow). You may also add a unit test block using the yellow
                "Add Unit Test" button. The yellow test block is a unit test.
                It's not a question for students; it's a function for you to
                specify tests. Your unit test function, later, will be called
                  on the arguments you put in the test cases. Returning
                  {' '}
                  <code>True</code>
                  {' '}
makes the current test "PASS", while
                  {' '}
                  <code>False</code>
                  {' '}
will be "FAIL". This way, you have full
                control over the unit tests. Print error logs along the way as
                a courtesy to your students. Instead of returning False, you
                may also throw an error; autoAG will catch it. Thus, it's
                sometimes convenient to just write assert statements.
                </p>
                <p>
                When finished, click on export on the navbar. A zip file will
                be downloaded. Unzipped, the folder contains 2 files:
                homework.py and test. As the students are progressing through
                  homework.py, they may type
                  {' '}
                  <code>python3 test question_name</code>
                  {' '}
in terminal to run
                  tests on the current question, or
                  {' '}
                  <code>python3 test</code>
                  {' '}
to
                  run tests on all questions.
                  {' '}
                </p>
                <p>
                Save your sessions often, so that you can import them back.
                </p>
                <h3>Examples</h3>
                <ul>
                  <li>
                  Simple Questions
                    {' '}
                    <button
                      className="helpAddButton"
                      name="helpAddSimpleQuestions"
                      onClick={this.clickHandler}
                    >
                    add
                    </button>
                  </li>
                  <li>
                  Disallowed Uses
                    {' '}
                    <button
                      className="helpAddButton"
                      name="helpAddDisallowedUses"
                      onClick={this.clickHandler}
                    >
                    add
                    </button>
                  </li>
                  <li>
                  Unit Tests
                    {' '}
                    <button
                      className="helpAddButton"
                      name="helpAddUnitTests"
                      onClick={this.clickHandler}
                    >
                    add
                    </button>
                  </li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggleHelp}>
                Close
                </Button>
              </ModalFooter>
            </Modal>

            <NavItem>
              <NavLink onClick={this.togglePublishPopover}>Publish</NavLink>
            </NavItem>

            <Modal
              isOpen={publishPopoverOpen}
              toggle={this.togglePublishPopover}
            >
              <ModalHeader toggle={this.togglePublishPopover}>
                <div>Publish Homework to Server (beta)</div>
                <div className="disclaimer">
                This experimental feature allows you to publish the autograder
                to our server. Please do not include any sensitive
                information.
                </div>
              </ModalHeader>
              <ModalBody>
                <div
                  className={
                  publishFailed
                    ? 'publishStatusTextRed'
                    : 'publishStatusTextGreen'
                }
                >
                  {publishStatusText}
                </div>
                {publishStatusText ? <hr /> : ''}
                <div className="homeworkName">Homework Name:</div>
                <Input
                  value={publishName}
                  onChange={this.handlePublishChange}
                  placeholder="MyHomework"
                  id="publishName"
                />
                <div className="publishNameWarning">
                  {this.state.emptyPublishNameWarning}
                </div>
              </ModalBody>
              <ModalFooter>
                <Spinner
                  color="#0275D8"
                  size="25px"
                  loading={publishing}
                />
                <Button
                  color="primary"
                  name="Publish"
                  onClick={this.handlePublishClick}
                  disabled={publishing}
                >
                Publish
                </Button>
              </ModalFooter>
            </Modal>

            <NavItem>
              <NavLink onClick={this.toggleImportPopover}>Import</NavLink>
            </NavItem>

            <Modal
              isOpen={this.state.importPopoverOpen}
              toggle={this.toggleImportPopover}
            >
              <ModalHeader toggle={this.toggleImportPopover}>
              Select .autoag file to import
              </ModalHeader>
              <ModalBody>
                <Input type="file" name="file" id="importFile" />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggleImportPopover}>
                Cancel
                </Button>
                {' '}
                <Button
                  color="primary"
                  name="import"
                  onClick={(e) => {
                    this.toggleImportPopover();
                    this.props.formHandler(e);
                  }}
                >
                  Import
                </Button>
              </ModalFooter>
            </Modal>

            <NavItem>
              <NavLink name="save" onClick={this.props.formHandler}>
                Save Session
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink name="export" onClick={this.props.formHandler}>
                Export
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="githubNav"
                target="_blank"
                href="https://github.com/JingkangZhang/autoAG"
              >
                <svg
                  height="24"
                  className="octicon octicon-mark-github"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default TopNav;
