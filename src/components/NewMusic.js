import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import Card from "./Card";
import axios from "axios";
import { Button, TextField, Typography } from "@mui/material";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getMusicFetch } from "../features/music/musicSlice";

function NewMusic() {
  const [creteMode, setCreateMode] = useState(false);
  const [addMusic, setAddMusic] = useState({
    title: "",
    artist: "",
    genre: "",
    album: "",
  });
  const [music, setMusic] =useState([])

  const handleChange = (e) => {
    setAddMusic({
      ...addMusic,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();



  useEffect(() => {
    axios.get('https://addis-music.onrender.com/').then((res) => {
      setMusic(res.data)
    } )
  
    dispatch(getMusicFetch());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [music]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post();
    console.log(addMusic);
    setAddMusic({
      ...addMusic,
      title: "",
      artist: "",
      genre: "",
      album: "",
    });

    axios
      .post("http://localhost:5000/create", {
        title: addMusic.title,
        artist: addMusic.artist,
        genre: addMusic.genre,
        album: addMusic.album,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
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
      {music.map(({ _id, ...others }) => (
        <Card
          setAddMusic={setAddMusic}
          addMusic={addMusic}
          id={_id}
          key={_id}
          {...others}
        />
      ))}
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
              value={addMusic.title}
            />
            <TextField
              name="artist"
              onChange={handleChange}
              type="text"
              required
              placeholder="Artist"
              value={addMusic.artist}
            />
            <TextField
              name="album"
              onChange={handleChange}
              type="text"
              required
              placeholder="Album"
              value={addMusic.album}
            />
            <TextField
              name="genre"
              onChange={handleChange}
              required
              placeholder="Genre"
              value={addMusic.genre}
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
