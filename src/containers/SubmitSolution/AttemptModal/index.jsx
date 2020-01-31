import React, { useState, useEffect } from 'react';
import {
  Button, Modal, ModalBody, ModalHeader, ModalFooter, Input, FormText,
} from 'reactstrap';
import AceEditor from 'react-ace';
import LoadingOverlay from 'react-loading-overlay';
import { getSkeleton } from 'services/';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import './index.scss';

const AttemptModal = (props) => {
  const {
    isOpen, toggle, homeworkId, name, onSubmit, value, setValue,
  } = props;

  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);
  const [overlayText, setOverlayText] = useState('FETCHING DATA...');
  const [overlaySpinner, setOverlaySpinner] = useState(true);


  const handleResetClick = () => {
    setOverlayText('FETCHING DATA...');
    setShowLoadingOverlay(true);
    setOverlaySpinner(true);
    getSkeleton(homeworkId).then((response) => {
      setShowLoadingOverlay(false);
      setOverlaySpinner(false);
      setValue(homeworkId, response);
    }).catch((msg) => {
      setOverlaySpinner(false);
      setOverlayText(msg);
    });
  };

  const onLoad = () => {
    if (value === '') {
      handleResetClick();
    }
  };

  const handleSubmit = () => {
    const inputElement = document.getElementById('submit-file');
    const reader = new FileReader();
    reader.onload = (event) => {
      onSubmit(homeworkId, event.target.result);
    }; // desired file content
    if (inputElement.files[0]) {
      reader.readAsText(inputElement.files[0]); // you could also read images and other binaries
    } else {
      onSubmit(homeworkId, value);
    }
  };

  return (
    <Modal className="attempt-modal" isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        Attempting homework:
        {' '}
        <code>{name}</code>
        <Button className="attempt-modal-reset" color="secondary" onClick={handleResetClick}>Reset</Button>

        <FormText className="attempt-modal-instruction">
          You can either complete the homework online or upload the completed homework.py file.

        </FormText>

      </ModalHeader>
      <LoadingOverlay
        active={showLoadingOverlay}
        fadeSpeed={200}
        spinner={overlaySpinner}
        text={overlayText}
      >
        <ModalBody>
          <div>
            <AceEditor
              width="740px"
              onLoad={onLoad}
              onChange={(newValue) => {
                setValue(homeworkId, newValue);
              }}
              mode="python"
              theme="textmate"
              name="attempt-editor"
              fontSize={14}
              showPrintMargin
              showGutter
              highlightActiveLine
              value={value}

              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 4,
              }}
            />
          </div>
        </ModalBody>
      </LoadingOverlay>
      <ModalFooter className="attempt-modal-footer">
        <div className="attempt-modal-footer-div">
          <Input type="file" id="submit-file" />
          <FormText className="attempt-modal-instruction" color="muted">
            If you upload your homework.py file, you work in this editor will not be submitted.
          </FormText>
        </div>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        <Button color="secondary" onClick={() => { toggle(); handleSubmit(); }}>Submit</Button>
      </ModalFooter>
    </Modal>
  );
};

export default AttemptModal;
