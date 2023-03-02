const Music = require("../model/musicSchema");

module.exports.getMusics = async (req, res) => {
  const musics = await Music.find();
  res.json(musics);
};

module.exports.createMusic = async (req, res) => {
  const music = new Music({
    artist: req.body.artist,
    genre: req.body.genre,
  });
  try {
    await music.save();
    res.json(music);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.updateMusic = async (req, res) => {
  const { _id, artist, genre } = req.body;
  Music.findByIdAndUpdate(_id, { artist, genre })
    .then(() => res.json("updated successfully"))
    .catch((err) => {
      res.json(err);
    });
};
module.exports.deleteMusic = async (req, res) => {
  const { _id } = req.body;
  Music.findByIdAndDelete(_id)
    .then(() => res.json("Deleted successfully"))
    .catch((err) => {
      res.json(err);
    });
};
