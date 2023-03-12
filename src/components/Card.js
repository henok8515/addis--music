import React, { useState } from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

import { Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { DELETE_MUSIC, UPDATE_MUSIC } from "../redux/types";

const MusicCard = styled.div`
  margin: 10px 10px;
  padding: 10px 10px;
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
  transition: all 200ms ease-in-out;
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

  // const handleDelete = (id) => {
  //   console.log(id);

  //   // axios
  //   //   .post("https://addis-music.onrender.com/delete", {
  //   //     id: id,
  //   //   })
  //   //   .then((response) => {
  //   //     setTimeout(() => {
  //   //       alert(response.data);
  //   //     }, 2000);
  //   //     console.log(response.data);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err.response.data);
  //   //   });
  // };

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
    dispatch({ type: UPDATE_MUSIC, music: updatedMusic });
    // axios
    //   .post("https://addis-music.onrender.com/update", updatedMusic)
    //   .then((response) => {
    //     alert(response.data);
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data);
    //   });
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
            <AiFillDelete
              onClick={() => dispatch({ type: DELETE_MUSIC, id: id })}
              size={20}
            />
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
              <Typography> Updating Music </Typography>
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
