import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
// import styled from "@emotion/styled";
import Select from "react-select";
import Card from "./Card";

const options = [
  { value: "Rock", label: "Rock" },
  { value: "Pop music", label: "Pop music" },
  { value: "Hip hop music", label: "Hip hop music" },
  { value: "Rhythm and blues", label: "Rhythm and blues" },
  { value: "Blues", label: "Blues" },
  { value: "Jazz", label: "Jazz" },
  { value: "Classical music", label: "Classical music" },
  { value: "Reggae", label: "Reggae" },
  { value: "Funk", label: "Funk" },
];
function NewMusic() {
  const [addMusic, setAddMusic] = useState({
    title: "",
    artist: "",
    genre: "",
    album: false,
  });
  useEffect(() => {}, []);
  const handleChange = (e) => {
    setAddMusic({
      ...addMusic,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addMusic);
    setAddMusic({
      ...addMusic,
      title: "",
      artist: "",
      genre: "",
      album: false,
    });
  };
  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center; ;
      `}
    >
      <Card />
      <Card />

      <form
        className={css`
          display: flex;
          flex-direction: column;
        `}
        onSubmit={handleSubmit}
      >
        <input
          name="title"
          onChange={handleChange}
          required
          type="text"
          placeholder="Title"
          value={addMusic.title}
        />
        <input
          name="artist"
          onChange={handleChange}
          type="text"
          required
          placeholder="Artist"
          value={addMusic.artist}
        />
        <input
          name="genre"
          onChange={handleChange}
          type="text"
          required
          placeholder="Genre"
          value={addMusic.genre}
          options={options}
        />
        <input
          name="album"
          onChange={handleChange}
          type="checkbox"
          placeholder="Genre"
          required
          value={addMusic.album}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewMusic;
