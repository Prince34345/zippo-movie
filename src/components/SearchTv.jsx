import React, { useEffect, useState } from "react";
import { MovieMedia, SearchMedia, TVMedia } from "../API/Fetches";
import {FaSearch } from "react-icons/fa"
import  { MovieCard } from "./MovieComponents";
import Footer from "./Footer";
import { TVCard } from "./TVComponent";

const SearchMovie = ({ loading }) => {
  const [InputValue, setInputValue] = useState("");
  const [Responses, setResponses] = useState([]);
  let page = 1
  const [Pages, setPages] = useState(2);
  async function GetResponse() {
    const res = await TVMedia("popular", page)
    setResponses(res.results);

  }
  async function fetchMore() {
      setPages((prev) => prev += 1)
      const res = await TVMedia("popular", Pages)
      let appendArr = []
      function Append () {
        res?.results?.forEach((curElem) => {
          appendArr.push(curElem)  
        })
        console.log(appendArr);
        return appendArr
      }
      let arr = Append()
      setResponses([ ...Responses , ...arr])
    // console.log("res",res);
  }
  async function SearchQuery () {
    const res = await SearchMedia(InputValue, "tv")
    let appendArr = []
    function Append () {
        res?.results?.forEach((curElem) => {
            if (curElem?.poster_path == null) {

            }else {
              appendArr.push(curElem)  
            }
        })
        console.log(appendArr);
        return appendArr
    }
    let arr = Append()
    setResponses([  ...arr ])
  }
  useEffect(() => {
    GetResponse() && loading(100);
    // console.log(Responses);
  }, []);
  
  return (
    <>
      <div className="rangeOuter:h-[100vh] left-0 top-0 absolute -z-50   w-full ">
        <img
          src={require("../assets/Zippo-Poster.png")}
          className=" bg-contain w-full"
          alt="poster"
        />
      </div>
      <div className="bg-black h-full w-full">
        <div className=" h-[10vh] flex justify-center items-center">
        <div className=" flex justify-center w-[40rem] h-1/2 bg-gren-700 items-center ">
                <input type="text" value={InputValue} onChange={(e) => setInputValue(e.target.value)} className="outline-none text-ellipsis searchfield w-2/3 h-full pl-[9%] placeholder:font-Sansita font-Sansita flex justify-center items-center bg-transparent rounded-tl-xl rounded-bl-xl  text-Alt-theme  border-2 border-theme  placeholder:text-theme   focus:placeholder:text-Alt-theme " placeholder="Enter any Movie Name" />
                <button onClick={() => SearchQuery()} className="text-Alt-theme  bg-theme h-full px-[3%] rounded-tr-xl rounded-br-xl cursor-pointer  "> <FaSearch/> </button>
        </div>
        </div>

          <div className="grid  grid-cols-4 max-lg:grid-cols-3  max-[325px]:grid-cols-2  ">
            {Responses?.map((curElem, ind, arr) => {
              return <TVCard data={curElem} isNotTvPage={false} />;
              })}
          </div>
          <div className="flex justify-center items-center">
            {
               InputValue ? null :  <button onClick={() => fetchMore()} className="px-20 py-2 md:text-xl font-bold  m-5 bg-theme text-Alt-theme font-Josefin-Sans">Click to Load more</button>
            }
              </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchMovie;