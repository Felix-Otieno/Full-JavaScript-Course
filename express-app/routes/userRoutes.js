const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.getUsernames);
router.get("/delete", controller.deleteAllUsernames);
router.get("/create", controller.createUsernameGet);
router.post("/create", controller.createUsernamePost);

module.exports = router;
