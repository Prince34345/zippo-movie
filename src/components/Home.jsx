import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import MovieComponents from "./MovieComponents";
import TVComponents from "./TVComponent";
import Footer from "./Footer";
import TabNavigation from "./TabNavigation";
import { HomeMedia } from "../API/Fetches";

const Home = ({loading}) => {
   const [responses, setResponses] = useState({
      upcoming: [],
      top_rated: [],
      popular: [],
      popularTV: [],
      top_ratedTV: [],
    })
   async function GetResponses ()  {
    setResponses({ 
      ...responses,
      upcoming: await HomeMedia("movie", "upcoming"),
      top_rated:await HomeMedia("movie", "top_rated"),
      popular:await HomeMedia("movie", "popular"),
      popularTV: await HomeMedia("tv", "popular"),
      top_ratedTV: await HomeMedia("tv", "top_rated"),
 
    })
   }
   const loadRef = useRef(null)
   useEffect(() => {
     GetResponses() && loading(100)
   }, []);

   return (
    <>
      <div className="absolute top-0 left-0 -z-10  w-full">
          <Header />
          <div className="bg-black w-full h-full text-white static shadow-lg shadow-theme ">
            <MovieComponents
              key={1}
              APIData={responses.upcoming?.results}
              heading={"Upcoming"}
              />
            <MovieComponents
              key={2}
              APIData={responses.top_rated?.results}
              heading={"Top Rated"}
              />
            <MovieComponents
              key={3}
              heading={"Popular"}
              APIData={responses.popular?.results}
              />
            <TVComponents
              key={5}
              heading={"Popular TV's"}
              APIData={responses.popularTV?.results}
              />
            <TVComponents
              key={7}
              heading={"Top Rated TV's"}
              APIData={responses.top_ratedTV?.results}
              />
          </div>
        <Footer/> 
        </div>
     </>
  );
};

export default Home;
