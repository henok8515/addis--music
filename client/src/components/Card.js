import React, { useState } from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteMusicSlice } from "../features/music/musicSlice";

const MusicCard = styled.div`
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
  &:hover {
    transform: scale(1.05);
  }
`;
const Circe = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  /* border: 1px solid black; */
  align-self: center;
  background-image: url("https://cdn-icons-png.flaticon.com/512/3756/3756763.png");
  background-size: cover;
`;

function Card({ title, artist, genre, id, album }) {
  const [editMode, setEditMode] = useState(false);
  const [updatedMusic, setUpdatedMusic] = useState({
    title: title,
    artist: artist,
    genre: genre,
    id: id,
    album: album,
  });

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    alert("are you sure you want to delete");

    dispatch(deleteMusicSlice(id));
    // axios
    //   .post("http://localhost:5000/delete", {
    //     id: id,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data);
    //   });
  };
  const handleEdit = (id) => {
    console.log(id);
    setEditMode(!editMode);
  };
  const handleChange = (e) => {
    setUpdatedMusic({
      ...updatedMusic,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updatedMusic, id);
    axios
      .post("http://localhost:5000/update", updatedMusic)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    setEditMode(false);
  };
  return (
    <div>
      <MusicCard>
        {editMode ? null : (
          <div
            className={css`
              display: flex;
              width: 100%;
              justify-content: space-between;
              cursor: pointer;
            `}
          >
            <GrEdit onClick={() => handleEdit(id)} size={20} />
            <AiFillDelete onClick={() => handleDelete(id)} size={20} />
          </div>
        )}
        {editMode ? null : <Circe />}
        <div
          className={css`
            text-align: center;
          `}
        >
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <TextField
                label="artist"
                variant="standard"
                name="artist"
                onChange={handleChange}
                required
                value={updatedMusic.artist}
              />

              <TextField
                required
                label="title"
                variant="standard"
                name="title"
                onChange={handleChange}
                value={updatedMusic.title}
              />
              <TextField
                required
                label="genre"
                variant="standard"
                name="genre"
                onChange={handleChange}
                value={updatedMusic.genre}
              />
              <TextField
                required
                label="album"
                variant="standard"
                name="album"
                onChange={handleChange}
                value={updatedMusic.album}
              />
              <Button type="submit">updateMusic</Button>
            </form>
          ) : (
            <div>
              <Typography>
                Name :
                <span
                  className={css`
                    font-weight: 700;
                  `}
                >
                  {artist}
                </span>
              </Typography>
              <Typography>
                Genre{" "}
                <span
                  className={css`
                    font-weight: 700;
                  `}
                >
                  {genre}
                </span>
              </Typography>
              <Typography>
                Title :
                <span
                  className={css`
                    font-weight: 700;
                  `}
                >
                  {title}
                </span>
              </Typography>
              <Typography>
                Album:
                <span
                  className={css`
                    font-weight: 700;
                  `}
                >
                  {album}
                </span>
              </Typography>
            </div>
          )}
        </div>
      </MusicCard>
    </div>
  );
}

export default Card;
