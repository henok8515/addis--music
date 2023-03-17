import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
function GetStats() {
  const [stats, setStats] = useState({
    title: 0,
    Rock: 0,
    Pop: 0,
    Jazz: 0,
    Blues: 0,
    CountryMusic: 0,
    Hiphop: 0,
    artist: 0,
    album: 0,
    musics: 0,
  });
  const musics = useSelector((state) => state.musics);
  let countRock = 0;
  let countJazz = 0;
  let countPop = 0;
  let countBlues = 0;
  let countCountyMusic = 0;
  let countHiphop = 0;
  useEffect(() => {
    let data = {};
    musics.forEach((m) => {
      console.log(m.genre);
      if (m.genre === "Rock") {
        countRock++;
        data.Rock = countRock;
      } else if (m.genre === "Jazz") {
        countJazz++;
        data.Jazz = countJazz++;
      } else if (m.genre === "Pop") {
        countPop++;
        data.Pop = countPop;
      } else if (m.genre === "Blues") {
        countBlues++;
        data.Blues = countBlues;
      } else if (m.genre === "Country") {
        countCountyMusic++;
        data.CountryMusic = countCountyMusic;
      } else if (m.genre === "Hiphop") {
        countHiphop++;
        data.Hiphop = countHiphop;
      }
      setStats(data);
    });
    //eslint-disable-next-line
  }, [musics]);

  const data = [
    {
      name: "Rock",

      pv: stats.Rock,
    },
    {
      name: "Jazz",

      pv: stats.Jazz,
    },
    {
      name: "Pop",

      pv: stats.Pop,
    },
    {
      name: "Country Music",

      pv: stats.CountryMusic,
    },
    {
      name: "Hiphop",

      pv: stats.Hiphop,
    },
    {
      name: "Blues",

      pv: stats.Blues,
    },
  ];

  return (
    <div
      className={css`
        display: flex;
        background-color: "red";
        height: 100%;
      `}
    >
      {musics.length === 0 ? null : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center ",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Typography sx={{ m: 5 }} variant="h3">
            {" "}
            Statistics
          </Typography>

          <BarChart
            width={730}
            height={350}
            data={data}
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"></XAxis>
            <YAxis />
            <Bar dataKey="pv" fill="#8884d8"></Bar>
            <Bar dataKey="uv" fill="#82ca9d">
              <LabelList dataKey="uv" position="top" />
            </Bar>
          </BarChart>
        </div>
      )}
    </div>
  );
}

export default GetStats;
