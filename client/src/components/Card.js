import React, { useState } from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

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
  border: 1px solid black;
  align-self: center;
  /* background-image: url("https://i.discogs.com/aG7IGbJKg03ax8ssKvbgaFN7c5kYMTOQ-KTr7Fs72GE/rs:fit/g:sm/q:90/h:341/w:352/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ1NDUy/My0xMjk3ODk1NTk5/LmpwZWc.jpeg"); */
  background-size: cover;
`;

function Card({ title, artist, genre, id }) {
  const [editMode, setEditMode] = useState(false);
  const [updatedMusic, setUpdatedMusic] = useState({
    title: title,
    artist: artist,
    genre: genre,
    id: id,
  });
  const handleDelete = (id) => {
    alert("are you sure you want to delete");
    axios
      .post("http://localhost:5000/delete", {
        id: id,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
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
        <Circe />
        <div
          className={css`
            text-align: center;
          `}
        >
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <input
                name="artist"
                onChange={handleChange}
                value={updatedMusic.artist}
              />
              <input
                name="title"
                onChange={handleChange}
                value={updatedMusic.title}
              />
              <input
                name="genre"
                onChange={handleChange}
                value={updatedMusic.genre}
              />
              <button type="submit">updateMusic</button>
            </form>
          ) : (
            <div>
              <p>Name :{artist}</p>
              <p>Genre {genre}</p>
              <p>Title :{title}</p>
            </div>
          )}
        </div>
      </MusicCard>
    </div>
  );
}

export default Card;
