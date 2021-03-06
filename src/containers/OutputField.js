import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import HomeworkPreview from './output_components/HomeworkPreview';
import TestSummary from './output_components/TestSummary';
//props: formState
class OutputField extends React.Component {
  // render() {
  //   return (
  //     // <textarea value={JSON.stringify(this.props.formState)}></textarea>
  //
  //   )
  // }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div class="gcd">
        <div class="outputField">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              homework.py
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              test summary
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent
          activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <HomeworkPreview
                  className="homeworkPreview"
                  formState={this.props.formState}
                  />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
                <TestSummary
                 formState={this.props.formState}
                  />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
      </div>
    );
  }
}
export default OutputField
