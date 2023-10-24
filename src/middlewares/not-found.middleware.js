const NotFoundMiddleware = (req, res, error) => {
  return res.status(404).send({
    success: false,
    message: "Resource not found",
  });
};

module.exports = {
  NotFoundMiddleware,
};
