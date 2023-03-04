import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";

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
  background-image: url("https://i.discogs.com/aG7IGbJKg03ax8ssKvbgaFN7c5kYMTOQ-KTr7Fs72GE/rs:fit/g:sm/q:90/h:341/w:352/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ1NDUy/My0xMjk3ODk1NTk5/LmpwZWc.jpeg");
  background-size: cover;
`;

function Card() {
  return (
    <div>
      <MusicCard>
        <div
          className={css`
            display: flex;
            width: 100%;
            justify-content: space-between;
          `}
        >
          <GrEdit size={20} />
          <AiFillDelete size={20} />
        </div>
        <Circe />
        <div
          className={css`
            text-align: center;
          `}
        >
          <p>Aster Aweka</p>
          <p>Soul-Jazz</p>
          <p>Album</p>
        </div>
      </MusicCard>
    </div>
  );
}

export default Card;
