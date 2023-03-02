import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [musics, setMusics] = useState([]);
  console.log(musics, "musics");
  useEffect(() => {
    axios
      .get("http://localhost:5001")
      .then((res) => setMusics([...res.data]))
      .catch((err) => {
        console.log(err, "errr");
      });
  }, []);

  const handleClick = (id) => {
    console.log(id, "id");
    // axios.delete(`http://localhost:5001/music${id}`);
  };

  return (
    <div>
      {musics.map((music) => {
        return (
          <div>
            <div>
              <p onClick={() => console.log(music._id)}>{music.artist}</p>
              <button onClick={handleClick(music._id)}>X</button>
            </div>
            <p>{music.genre}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
