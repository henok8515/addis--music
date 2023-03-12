import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import Card from "./Card";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_MUSIC, GET_MUSICS } from "../redux/types";

function NewMusic() {
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
  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center; ;
      `}
    >
      {musics.length === 0 ? (
        <CircularProgress />
      ) : (
        musics.map(({ _id, ...others }) => (
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
          height: 300px;
          width: 200px;
          border-radius: 10px;
          border: 1px solid black;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          padding: 10px;
          flex-direction: column;
          -webkit-box-shadow: 10px -4px 18px 4px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 10px -4px 18px 4px rgba(0, 0, 0, 0.75);
          box-shadow: 10px -4px 18px 4px rgba(0, 0, 0, 0.75);
          transition: all 1s ease-in-out;
        `}
      >
        {creteMode ? (
          <form
            className={css`
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center; ;
            `}
            onSubmit={handleSubmit}
          >
            <Typography variant="h5">Create Music</Typography>
            <TextField
              name="title"
              onChange={handleChange}
              required
              type="text"
              placeholder="Title"
              value={newMusic.title}
            />
            <TextField
              name="artist"
              onChange={handleChange}
              type="text"
              required
              placeholder="Artist"
              value={newMusic.artist}
            />
            <TextField
              name="album"
              onChange={handleChange}
              type="text"
              required
              placeholder="Album"
              value={newMusic.album}
            />
            <TextField
              name="genre"
              onChange={handleChange}
              required
              placeholder="Genre"
              value={newMusic.genre}
            />
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
