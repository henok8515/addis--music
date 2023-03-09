import { useSelector } from "react-redux";
import NewMusic from "./components/NewMusic";

function App() {
  const music = useSelector((state) => state.music.music);
  return (
    <div>
      <h1>you have a total of {music.length} songs</h1>
      <NewMusic />
    </div>
  );
}

export default App;
