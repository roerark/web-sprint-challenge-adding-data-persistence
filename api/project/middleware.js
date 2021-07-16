const validateProjectPayload = (req, res, next) => {
  const { project_name } = req.body;
  if (!project_name) {
    res.status(400).json({ message: "Must include project name" });
  } else {
    next();
  }
};

module.exports = {
  validateProjectPayload,
};
