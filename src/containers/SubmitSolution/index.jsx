import React, { useState, useEffect } from 'react';
import {
  Navbar, NavbarBrand, NavItem, NavLink, InputGroup, InputGroupAddon, Input, Button, Form, FormGroup, Label, Table, Alert, Modal,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.scss';
import Pagination from 'react-js-pagination';
import { uploadSolution, listHomeworks, getSkeleton } from 'services/';
import moment from 'moment';
import LoadingOverlay from 'react-loading-overlay';
import HomeworkEntry from './HomeworkEntry';
import AttemptModal from './AttemptModal';
import SubmitStatus from './SubmitStatus';

const SubmitSolution = () => {
  const [currPage, setCurrPage] = useState(1);
  const [content, setContent] = useState([]);
  const [dateDescending] = useState(true);
  const [perPage, setPerPage] = useState(10);
  const [homeworkId, setHomeworkId] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  // const [submitModalHomeworkId, setSubmitModalHomeworkId] = useState('');
  // const [submitModalHomeworkName, setSubmitModalHomeworkName] = useState('');
  // const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const [attemptModalHomeworkId, setAttemptHomeworkId] = useState('');
  const [attemptModalHomeworkName, setAttemptModalHomeworkName] = useState('');
  const [attemptModalOpen, setAttemptModalOpen] = useState(false);
  const [homeworkIdToPost, setHomeworkIdToPost] = useState('');
  const [submitted, setSubmitted] = useState({});
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);
  const [overlayText, setOverlayText] = useState('LOADING...');
  const [overlaySpinner, setOverlaySpinner] = useState(true);
  const [attemptedHomeworks, setAttemptedHomeworks] = useState({});

  const updateList = () => {
    setOverlayText('LOADING...');
    setShowLoadingOverlay(true);
    setOverlaySpinner(true);
    listHomeworks({
      currPage, perPage, dateDescending, homeworkId: homeworkIdToPost,
    }).then((data) => {
      setTotalPages(data.total);
      const convertedContent = data.content.map((hw) => {
        hw.time = moment(hw.time).local().format('lll');
        return hw;
      });
      setContent(convertedContent);
      if (data.total === 0) {
        setOverlaySpinner(false);
        setOverlayText('No item found.');
      } else {
        setShowLoadingOverlay(false);
      }
    }).catch((msg) => {
      setOverlayText(msg);
      setOverlaySpinner(false);
    });
  };

  useEffect(() => {
    updateList();
  }, [currPage, dateDescending, perPage, homeworkIdToPost]);

  const handleChangePage = (newPageNumber) => {
    setCurrPage(newPageNumber);
  };

  const handlePerPageChange = (e) => {
    setPerPage(e.target.value);
    setCurrPage(1);
  };

  const handleSearch = () => {
    setHomeworkIdToPost(homeworkId);
  };

  const handleInputChange = (e) => {
    setHomeworkId(e.target.value);
  };

  // const handleOpenSubmitModal = (id, name) => {
  //   setSubmitModalHomeworkId(id);
  //   setSubmitModalHomeworkName(name);
  //   setSubmitModalOpen(true);
  // };
  const handleSetEditorValue = (id, value) => {
    setAttemptedHomeworks({
      ...attemptedHomeworks, [id]: value,
    });
  };
  const handleOpenAttemptModal = (id, name) => {
    setAttemptHomeworkId(id);
    setAttemptModalHomeworkName(name);
    if (!attemptedHomeworks.hasOwnProperty(id)) {
      handleSetEditorValue(id, '');
    }
    setAttemptModalOpen(true);
  };

  // const handleToggleSubmitModal = () => {
  //   setSubmitModalOpen(!submitModalOpen);
  // };

  const handleToggleAttemptModal = () => {
    setAttemptModalOpen(!attemptModalOpen);
  };


  const handleSubmit = (id, solutionString) => {
    setSubmitted({
      ...submitted,
      ...{
        [id]: {
          status: 'Submitting',
        },
      },
    });
    uploadSolution(id, solutionString).then((res) => {
      setSubmitted({
        ...submitted,
        ...{
          [id]: {
            status: 'Submitted', result: res,
          },
        },
      });
    }).catch((msg) => {
      setSubmitted({
        ...submitted,
        ...{
          [id]: {
            status: 'Failed', msg,
          },
        },
      });
    });
  };

  const createContentList = () => {
    const ret = [];

    content.map((hw) => {
      ret.push(<HomeworkEntry
        // onOpenSubmitModal={handleOpenSubmitModal}
        onOpenAttemptModal={handleOpenAttemptModal}
        homeworkId={hw.homeworkId}
        author={hw.author}
        name={hw.name}
        time={hw.time}
      />);
      if (submitted.hasOwnProperty(hw.homeworkId)) {
        ret.push(
          <SubmitStatus
            name={hw.name}
            homeworkId={hw.homeworkId}
            statusObj={submitted[hw.homeworkId]}
          />,
        );
      }
    });
    return ret;
  };

  return (
    <div>
      <AttemptModal
        isOpen={attemptModalOpen}
        toggle={handleToggleAttemptModal}
        homeworkId={attemptModalHomeworkId}
        name={attemptModalHomeworkName}
        onSubmit={handleSubmit}
        value={attemptedHomeworks[attemptModalHomeworkId]}
        setValue={handleSetEditorValue}
      />
      <Navbar light className="submit-bar">
        <NavbarBrand className="submit-brand">autoAG</NavbarBrand>
        <NavLink className="submit-publish">
          {' '}
          <Link to="/" className="submit-publish-link" target="_blank">Create and Publish My Homework</Link>
        </NavLink>
      </Navbar>
      <div className="submit-main">
        <div className="submit-form">
          <FormGroup>
            <Label>Homework ID:</Label>
            <Input onChange={handleInputChange} />
          </FormGroup>
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <LoadingOverlay
          active={showLoadingOverlay}
          fadeSpeed={200}
          className="submit-overlay"
          spinner={overlaySpinner}
          text={overlayText}
        >
          <div className="submit-table">
            {/* <Table content={content}> */}

            <Table className="submit-table-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Homework ID</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Skeleton Code</th>
                  <th>Attempt</th>
                </tr>
              </thead>
              {
                createContentList()
              }
            </Table>

          </div>
        </LoadingOverlay>

        <div className="submit-per-page">
          <div className="submit-per-page-label">Per page:</div>
          {' '}
          {/* <input type="range" min="10" value={perPage} onChange={handlePerPageChange} /> */}
          <Input type="select" value={perPage} onChange={handlePerPageChange}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>50</option>
          </Input>
        </div>
        <Pagination
          activePage={currPage}
          itemsCountPerPage={perPage}
          totalItemsCount={totalPages}
          pageRangeDisplayed={5}
          onChange={handleChangePage}
          innerClass="pagination"
          itemClass="page-item"
          linkClass="page-link"
        />


      </div>
    </div>
  );
};

export default SubmitSolution;
