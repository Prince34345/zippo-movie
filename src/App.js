import React, { useState } from "react";
import {  Route, Routes  } from "react-router-dom";
import Detail from "./components/MovieDetail";
import Home from "./components/Home";
import SearchMovie from "./components/SearchMovie";
import SearchTv from "./components/SearchTv";
import TabNavigation from "./components/TabNavigation";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import TvDetail from "./components/TvDetail";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [Progress, setProgress] = useState(0);
  return (
     <>
     <LoadingBar color="#4bb7d3" height={2} progress={Progress} onLoaderFinished={() => setProgress(0)} />
     <TabNavigation/>
     <Navbar />
    <Routes>
            <Route path="/" index element={<Home loading={setProgress} />} />
            <Route path="/tv/search" element={<SearchTv loading={setProgress}/>} />
            <Route path="/movie/search" element={<SearchMovie loading={setProgress} />} />
            <Route path="/api/movie/:id" element={<MovieDetail loading={setProgress} />} />
            <Route path="/api/tv/:id" element={<TvDetail loading={setProgress} />} />
    </Routes>
     </>
  );
}

export default App;
