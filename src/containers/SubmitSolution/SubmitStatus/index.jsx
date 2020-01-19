import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './index.scss';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const SubmitStatus = (props) => {
  const { name, homeworkId, statusObj } = props;
  const [resultModalOpen, setResultModalOpen] = useState();
  const handleToggle = () => {
    setResultModalOpen(!resultModalOpen);
  };

  return (
    <tr className="submit-status">
      <Modal modalClassName="submit-status-modal" isOpen={resultModalOpen} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>
            Autograder Result
        </ModalHeader>
        <ModalBody>
          <div className="submit-status-result">{statusObj.result}</div>
        </ModalBody>
      </Modal>
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
              ? <span onClick={handleToggle}>View Result</span>
              : statusObj.status === 'Failed'
                ? statusObj.msg : ''}
          </div>
        </div>
      </td>
    </tr>
  );
};
export default SubmitStatus;
