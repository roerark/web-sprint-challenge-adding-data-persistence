const Resource = require("./model");

const validateResourcePayload = (req, res, next) => {
  const { resource_name } = req.body;
  if (!resource_name) {
    res.status(400).json({ message: "resource_name is required" });
  } else {
    Resource.getByName(resource_name).then((resource) => {
      if (resource) {
        res
          .status(400)
          .json({
            message: `resource with name ${resource_name} already exists`,
          });
      } else {
        next();
      }
    });
  }
};

module.exports = {
  validateResourcePayload,
};
