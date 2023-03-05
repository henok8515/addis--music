import axios from "axios";
import React, { useEffect, useState } from "react"; 
import NewMusic from "./components/NewMusic";

function App() {
  const [musics, setMusics] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => setMusics(res.data))
      .catch((err) => console.error(err));
  }, [musics]);
  return (
    <div>
      <NewMusic musics={musics} />
    </div>
  );
}

export default App;
