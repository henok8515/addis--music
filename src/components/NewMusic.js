import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import Card from "./Card";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_MUSIC, GET_MUSICS } from "../redux/types";

function NewMusic({ query }) {
  const [creteMode, setCreateMode] = useState(false);
  const [newMusic, setNewMusic] = useState({
    title: "",
    artist: "",
    genre: "",
    album: "",
  });

  const dispatch = useDispatch();
  const musics = useSelector((state) => state.musics);
  const handleChange = (e) => {
    setNewMusic({
      ...newMusic,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    dispatch({ type: GET_MUSICS });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewMusic({
      ...newMusic,
      title: "",
      artist: "",
      genre: "",
      album: "",
    });
    dispatch({ type: CREATE_MUSIC, music: newMusic });

    setCreateMode(false);
  };

  console.log();
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        justify-content: center;
      `}
    >
      {musics.length === 0 ? (
        <CircularProgress sx={{ ml: 1 }} />
      ) : (
        musics
          .filter((music) =>
            music.title.toLowerCase().includes(query.toLowerCase())
          )
          .map(({ _id, ...others }) => (
            <Card
              setNewMusic={setNewMusic}
              newMusic={newMusic}
              id={_id}
              key={_id}
              {...others}
            />
          ))
      )}
      <div
        className={css`
          margin: 10px 10px;
          width: 200px;
          border-radius: 10px;
          border: 1px solid black;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          padding: 10px;
          flex-direction: column;
          -webkit-box-shadow: 4px -4px 4px 4px rgba(0, 0, 0, 0.1);
          -moz-box-shadow: 10px -4px 18px 4px rgba(0, 0, 0, 0.55);
          box-shadow: 5px -4px 8px 4px rgba(0, 0, 0, 0.35);
        `}
      >
        {creteMode ? (
          <form
            className={css`
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              text-transform: capitalize;
            `}
            onSubmit={handleSubmit}
          >
            <Typography variant="h5">Create Music</Typography>
            <TextField
              sx={{ m: 1 }}
              name="title"
              onChange={handleChange}
              required
              type="text"
              placeholder="Title"
              value={newMusic.title}
            />
            <TextField
              sx={{ m: 1 }}
              name="artist"
              onChange={handleChange}
              type="text"
              required
              placeholder="Artist"
              value={newMusic.artist}
            />
            <TextField
              sx={{ m: 1 }}
              name="album"
              onChange={handleChange}
              type="text"
              required
              placeholder="Album"
              value={newMusic.album}
            />
            <FormControl sx={{ mr: 2, minWidth: 180 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Genre
              </InputLabel>
              <Select
                sx={{ m: 1 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="genre"
                label="Age"
                onChange={handleChange}
                required
                placeholder="Genre"
                value={newMusic.genre}
                fullWidth
              >
                <MenuItem value="Rock">Rock</MenuItem>

                <MenuItem value="Pop music">Pop music</MenuItem>
                <MenuItem
                  value="Jazz
"
                >
                  Jazz
                </MenuItem>
                <MenuItem value="Blues">Blues</MenuItem>
                <MenuItem value="Country music">Country music</MenuItem>
                <MenuItem value="Hip hop music">Hip hop music</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit">Create</Button>
          </form>
        ) : (
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            `}
          >
            <AiOutlinePlusCircle onClick={setCreateMode(true)} size={100} />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewMusic;
