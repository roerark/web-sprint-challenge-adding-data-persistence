const validateTaskPayload = (req, res, next) => {
  const { task_description } = req.body;
  if (!task_description) {
    res.status(400).json({ message: "task_description is required" });
  } else {
    next();
  }
};

module.exports = {
  validateTaskPayload,
};
