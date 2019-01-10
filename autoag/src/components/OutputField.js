import React, { Component } from 'react';
class OutputField extends React.Component {
  render() {
    return (
      <textarea value={JSON.stringify(this.props.formState)}></textarea>
    )
  }
}
export default OutputField
