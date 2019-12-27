const axios = require('axios').default;

const URL = {
  uploadAutograder: 'https://bdi091mwm2.execute-api.us-west-1.amazonaws.com/prod/uploadAutograder',
  uploadSolution: 'https://bdi091mwm2.execute-api.us-west-1.amazonaws.com/prod/uploadSolution',
};

export const uploadAutograder = (name, body) => {
  axios({
    method: 'post',
    url: URL.uploadAutograder,
    params: {
      name,
    },
    data: body,
  }).then((response) => {
    // console.log('fuck\n\n', response);

    alert(response.data.data.homeworkId);
  }).catch((err) => {
    if (err.response) {
      alert(`${err.response.status} Error: ${err.response.data.error}`);
      console.log(err.response.data.error);
    }
  });
};

export const uploadSolution = (homeworkId) => {
  axios.post(URL.uploadSolution, {
    homeworkId,
  }).then((response) => {
    console.log(response);

    return response.data;
  });
};
