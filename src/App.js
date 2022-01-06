import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import AnimeDetails from "./components/AnimeDetails/AnimeDetails";
import Home from './components/Home/Home'
import Navbar from "./components/Navbar/Navbar";
import Manga from "./Pages/Manga";
import Contact from "./Pages/Contact";

function App() {
  const [data, setData] = useState([])
  const [clickedId, setClickedId] = useState(null);

  const handleData = (res) => {
    setData(res);
}
  console.log(data);
const handleClickedId = (id) => {
  setClickedId(id)
}

  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home handleClickedId={handleClickedId} handleData={handleData} />} />
        <Route path={`/anime/:id`} element={<AnimeDetails clickedId={clickedId} data={data} />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}



export default App;
