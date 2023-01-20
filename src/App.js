import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";

import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Feed />}></Route>
        <Route path="/video/:id" element={<VideoDetail />}></Route>
        <Route path="/channel/:id" element={<ChannelDetail />}></Route>
        <Route path="/search/: searchTerm" element={<SearchFeed />}></Route>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;