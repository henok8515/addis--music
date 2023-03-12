import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { css } from "@emotion/css";

import NewMusic from "./components/NewMusic";
import { useSelector } from "react-redux";
function App() {
  const [query, setQuery] = useState("");

  const musics = useSelector((state) => state.musics);

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      `}
    >
      <TextField
        sx={{ m: 2, alignSelf: "center", fontSize: "12px" }}
        placeholder="Search  Music"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Typography sx={{ m: 3 }} variant="h4">
        We have {musics.length} Songs In The Collection{" "}
      </Typography>
      <NewMusic query={query} />
    </div>
  );
}

export default App;
