import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const HomeworkEntry = (props) => {
  const {
    homeworkId, author, name, time,
  } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{author}</td>
      <td>{time}</td>
      <td><Button>Get Skeleton</Button></td>
      <td><Button>Submit</Button></td>
    </tr>
  );
};

export default HomeworkEntry;
