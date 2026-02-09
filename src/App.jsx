import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Matcher from "./pages/Matcher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/match" element={<Matcher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
