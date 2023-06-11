module.exports = app => {
  const persons = require("../controllers/person.controller.js");

  const router = require("express").Router();

  router.post("/", persons.create);

  router.get("/", persons.findAll);

  router.get("/:id_pessoa", persons.findOne);

  router.put("/:id", persons.update);

  router.delete("/:id", persons.delete);

  router.delete("/", persons.deleteAll);

  app.use('/api/person', router);
};
