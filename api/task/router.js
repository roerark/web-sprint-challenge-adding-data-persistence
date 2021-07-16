const express = require("express");
const { validateTaskPayload } = require("./middleware");
const Task = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Task.getAll()
    .then((tasks) => {
      res.json(
        tasks.map((task) => ({
          ...task,
          task_completed: !!task.task_completed,
        }))
      );
    })
    .catch(next);
});

router.post("/", validateTaskPayload, (req, res, next) => {
  Task.create(req.body)
    .then((task) => {
      res.json({
        ...task,
        task_completed: !!task.task_completed,
      });
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
