const express = require("express");
const { validateResourcePayload } = require("./middleware");
const Resource = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Resource.getAll()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

router.post("/", validateResourcePayload, (req, res, next) => {
  Resource.create(req.body)
    .then((resource) => {
      res.json(resource);
    })
    .catch(next);
});

router.use((err, req, res) => {
  if (process.env.NODE_ENV === "development") {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  } else {
    res.status(500).json({
      message: "data cannot be retrieved from server",
    });
  }
});

module.exports = router;
