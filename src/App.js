import { TextField } from "@mui/material";
import { useState } from "react";
import { css } from "@emotion/css";
import NewMusic from "./components/NewMusic";
import GetStats from "./components/stats";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <TextField
        sx={{ m: 2, alignSelf: "center", fontSize: "12px" }}
        placeholder="Search  Music"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <Typography sx={{ m: 3 }} letiant="h4">
        We have {musics.length} Songs In The Collection{" "}
      </Typography> */}

      <NewMusic query={query} />

      <GetStats />
    </div>
  );
}

export default App;
