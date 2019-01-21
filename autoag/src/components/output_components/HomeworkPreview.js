import React from 'react';
class HomeworkPreview extends React.Component {
  render() {

    return (
        <textarea value={JSON.stringify(this.props.formState)}></textarea>
    )
  }
}
export default HomeworkPreview;
