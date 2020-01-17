/* eslint-disable no-throw-literal */
const axios = require('axios').default;

const URL = {
  uploadAutograder:
    'https://bdi091mwm2.execute-api.us-west-1.amazonaws.com/prod/uploadAutograder',
  uploadSolution:
    'https://bdi091mwm2.execute-api.us-west-1.amazonaws.com/prod/uploadSolution',
  listHomeworks: 'https://bdi091mwm2.execute-api.us-west-1.amazonaws.com/prod/listHomeworks',
};

export const uploadAutograder = (name, body) => new Promise((resolve, reject) => {
  axios({
    method: 'post',
    url: URL.uploadAutograder,
    params: {
      name,
    },
    data: body,
  }).then((response) => resolve(response.data.data.homeworkId)).catch((error) => {
    if (error.response) {
      reject(`${error.response.status}: ${error.response.data.error}`);
    } else {
      reject(error.message);
    }
  });
});

export const listHomeworks = (data) => new Promise((resolve, reject) => {
  const {
    homeworkId, perPage, currPage, dateDescending,
  } = data;
  axios({
    method: 'post',
    url: URL.listHomeworks,
    params: {
      homeworkId,
      perPage,
      currPage,
      dateDescending,
    },
  }).then((response) => resolve(response.data)).catch((error) => {
    if (error.response) {
      reject(`${error.response.status}: ${error.response.error}`);
    } else {
      reject(error.message);
    }
  });
});

export const uploadSolution = (homeworkId) => {
  axios
    .post(URL.uploadSolution, {
      homeworkId,
    })
    .then((response) => {
      console.log(response);

      return response.data;
    });
};
