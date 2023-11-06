const sendErrorResponse = (res, status, message = null, error = null) => {
  console.error(error);
  const response = { status, message, error };
  res.status(status);
  res.json(response);
};

const sendOkResponse = (res, status, data, message = null) => {
  const response = { status, data, message };
  res.status(status);
  res.json(response);
};

module.exports = { sendErrorResponse, sendOkResponse };
