import React, { Component } from 'react';
class OutputField extends React.Component {
  render() {
    return (
      <textarea value={this.props.formState.pointsEnabled}></textarea>
    )
  }
}
export default OutputField
