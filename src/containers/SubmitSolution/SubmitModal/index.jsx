import React, { useState, useEffect } from 'react';
import {
  Button, Modal, ModalBody, ModalHeader, ModalFooter, Input,
} from 'reactstrap';

const SubmitModal = (props) => {
  const {
    isOpen, toggle, homeworkId, name, onSubmit,
  } = props;

  const handleSubmit = () => {
    const inputElement = document.getElementById('submit-file');
    const reader = new FileReader();
    reader.onload = (event) => {
      onSubmit(homeworkId, event.target.result);
    }; // desired file content
    if (inputElement.files[0]) {
      reader.readAsText(inputElement.files[0]); // you could also read images and other binaries
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        Submit to homework:
        {' '}
        <code>{name}</code>
      </ModalHeader>
      <ModalBody>
        Please upload homework.py:
        <Input type="file" id="submit-file" />

      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        {' '}
        <Button color="primary" onClick={() => { toggle(); handleSubmit(); }}>Submit</Button>
      </ModalFooter>
    </Modal>
  );
};

export default SubmitModal;
