const ErrorHandlerMiddleware = (error, req, res, next) => {
  const { message, status } = error;
  return res.status(status | 500).send({
    success: false,
    message: message | "Internal Server Error",
  });
};

module.exports = {
  ErrorHandlerMiddleware,
};
