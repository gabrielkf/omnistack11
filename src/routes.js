const { Router } = require("express");

const routes = Router();

routes.get("/users", (req, res) => {
  return res.json({
    evento: "Omnistack 11",
    aluno: "Gabriel Paiva"
  });
});

module.exports = routes;
