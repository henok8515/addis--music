const router = require("express").Router();
const { getMusics, createMusic } = require("../controllers/musicControler");
const musics = require("../model/musicSchema");
router.get("/", getMusics);
router.post("/music", createMusic);
router.patch("/music/:id", async (req, res) => {});
router.delete("/music/:id", async (req, res) => {
  try {
    await musics.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});
module.exports = router;
