const db = require("../../data/dbConfig");

const getAll = () => {
  return db("resources");
};

const getById = (resource_id) => {
  return db("resources").where({ resource_id }).first();
};

const getByName = (resource_name) => {
  return db("resources").where({ resource_name }).first();
};

const create = (resource) => {
  return db("resources")
    .insert(resource)
    .then((id) => getById(id));
};

module.exports = {
  getAll,
  getByName,
  create,
};
