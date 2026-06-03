import { BrowserRouter, Routes, Route } from "react-router-dom";

import Scoreboard from "./pages/Scoreboard";
import Hasil from "./pages/Hasil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Scoreboard />} />
        <Route path="/hasil" element={<Hasil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;