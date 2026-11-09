const express = require("express");
const redis = require("../redis");
const router = express.Router();

const configs = require("../util/config");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

router.get("/statistics", async (req, res) => {
  const currentCount = await redis.get("added_todos");

  const addedTodos = Number(currentCount) || 0;

  res.json({
    added_todos: addedTodos,
  });
});

module.exports = router;
