const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get("/cool", function (req, res, next) {
  res.send("You're so cool");
});

module.exports = router;

/*
mongodb+srv://hansiganter:hykdut6syvBifivqap@cluster0.bzb0bdz.mongodb.net/local_library?retryWrites=true&w=majority
*/