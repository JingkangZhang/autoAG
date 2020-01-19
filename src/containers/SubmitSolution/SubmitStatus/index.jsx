import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './index.scss';

const SubmitStatus = (props) => {
  const { name, homeworkId, statusObj } = props;

  return (
    <tr className="submit-status">
      <td className="submit-status-td" colSpan={6}>
        <div className={classnames('submit-status-td-div', {
          'submit-status-td-div-green': statusObj.status === 'Submitted',
          'submit-status-td-div-yellow': statusObj.status === 'Submitting',
          'submit-status-td-div-red': statusObj.status === 'Failed',
        })}
        >
          <div className="submit-status-left">{statusObj.status}</div>
          <div className="submit-status-right">
            {statusObj.status === 'Submitted'
              ? 'View Result'
              : statusObj.status === 'Failed'
                ? statusObj.msg : ''}
          </div>
        </div>
      </td>
    </tr>
  );
};
export default SubmitStatus;
