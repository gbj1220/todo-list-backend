const express = require("express");
const router = express.Router();

const { signUp, login } = require("./controller/usersController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/api/sign-up", signUp);

router.post("/api/login", login);

module.exports = router;
