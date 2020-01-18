import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { getSkeleton } from 'services/';
import { save } from 'utils/';

const HomeworkEntry = (props) => {
  const {
    homeworkId, author, name, time, onOpenSubmitModal,
  } = props;

  const handleGetSkeleton = () => {
    getSkeleton(homeworkId).then((res) => {
      save('homework.py', res);
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{author}</td>
      <td>{time}</td>
      <td><Button onClick={handleGetSkeleton}>Get Skeleton</Button></td>
      <td><Button onClick={() => { onOpenSubmitModal(homeworkId, name); }}>Submit</Button></td>
    </tr>
  );
};

export default HomeworkEntry;
