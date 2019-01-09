import React from 'react';
// import githubMark from '../GitHub-Mark-64px.png'
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
  Popover,PopoverHeader, PopoverBody,
  Button,
  Modal, ModalBody, ModalFooter, ModalHeader
  } from 'reactstrap';

class TopNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleImportPopover = this.toggleImportPopover.bind(this);
    this.toggleHelp = this.toggleHelp.bind(this);
    this.state = {
      navIsOpen: false,
      importPopoverOpen: false,
      helpOpen: false
    };
  }

  toggleNav() {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    });
  }

  toggleImportPopover() {
    this.setState({
      importPopoverOpen: !this.state.importPopoverOpen
    })
  }

  toggleHelp() {
    this.setState({
      helpOpen: !this.state.helpOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar className="topNav" color="light" light expand="sm">

          <NavbarBrand id="autoAGBrand">autoAG</NavbarBrand>
          <UncontrolledTooltip placement="right" trigger="hover"
            target="autoAGBrand" delay="{show:0, hide:0}" arrowClassName="CalTooltipArrow" className="CalTooltip">
            Much Love For Cal!
          </UncontrolledTooltip>

          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.navIsOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggleHelp}>Help and Usage</NavLink>
              </NavItem>
              <Modal isOpen={this.state.helpOpen} toggle={this.toggleHelp}>
                <ModalHeader toggle={this.toggleHelp}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggleHelp}>Close</Button>
                </ModalFooter>
              </Modal>
              <NavItem>
                <NavLink onClick={this.toggleImportPopover}>Import</NavLink>
              </NavItem>

              <Modal isOpen={this.state.importPopoverOpen} toggle={this.toggleImportPopover}>
                <ModalHeader toggle={this.toggleImportPopover}>Select .autoag file to import</ModalHeader>
                <ModalBody>
                  <Input type="file" name="file" id="exampleFile" />
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggleImportPopover}>Cancel</Button>{' '}
                  <Button color="primary" onClick={this.toggleImportPopover}>Do Something</Button>
                </ModalFooter>
              </Modal>

              <NavItem>
                <NavLink><span>Save Session</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Export</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="githubNav" href="https://github.com/JingkangZhang/autoAG"><svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNav
