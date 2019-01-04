import React, { Component } from 'react';
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
  UncontrolledTooltip} from 'reactstrap';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm">
          <NavbarBrand id="autoAGBrand">autoAG</NavbarBrand>
          <UncontrolledTooltip placement="right" trigger="hover"
            target="autoAGBrand" delay="{show:0, hide:0}" arrowClassName="CalTooltipArrow" className="CalTooltip">
            Much Love For Cal!
          </UncontrolledTooltip>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Import</NavLink>
              </NavItem>
              <NavItem>
                <NavLink><span>Save Session</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Export</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/JingkangZhang/autoAG">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNav
