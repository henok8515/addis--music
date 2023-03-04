const router = require("express").Router();
const {
  getMusics,
  createMusic,
  deleteMusic,
  updateMusic,
} = require("../controllers/musicControllers");
const musics = require("../model/musicSchema");
router.get("/", getMusics);
router.post("/create", createMusic);
router.post("/update/", updateMusic);
router.post("/delete/", deleteMusic);
module.exports = router;
