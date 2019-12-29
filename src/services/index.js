const axios = require("axios").default;

const URL = {
  uploadAutograder:
    "https://bdi091mwm2.execute-api.us-west-1.amazonaws.com/prod/uploadAutograder",
  uploadSolution:
    "https://bdi091mwm2.execute-api.us-west-1.amazonaws.com/prod/uploadSolution"
};

export const uploadAutograder = async (name, body) => {
  try {
    const response = await axios({
      method: "post",
      url: URL.uploadAutograder,
      params: {
        name
      },
      data: body
    });
    return response.data.data.homeworkId;
  } catch (err) {
    return err;
  }
};

export const uploadSolution = homeworkId => {
  axios
    .post(URL.uploadSolution, {
      homeworkId
    })
    .then(response => {
      console.log(response);

      return response.data;
    });
};
