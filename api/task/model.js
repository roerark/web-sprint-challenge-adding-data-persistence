const db = require("../../data/dbConfig");

const getAll = () => {
  return db("tasks")
    .select("tasks.*", "project_name", "project_description")
    .join("projects", "tasks.project_id", "projects.project_id");
};

const getById = (task_id) => {
  return db("tasks")
    .select("tasks.*", "project_name", "project_description")
    .join("projects", "tasks.project_id", "projects.project_id")
    .where({ task_id })
    .first();
};

const create = (task) => {
  return db("tasks")
    .insert(task)
    .then((id) => getById(id));
};

module.exports = {
  getAll,
  create,
};
