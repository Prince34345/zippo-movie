import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Detail } from "../API/Fetches";
import APIObject from "../API/APIObject";
import Footer from "./Footer";
import axios from "axios";

function MovieDetail({ loading }) {
  const [Response, setResponse] = useState([]);
  const [Creds, setCreds] = useState([]);
  const { id } = useParams();

  const GetResponse = async () => {
    try {
      let res = await Detail("movie", id);
      //  console.log("res",res)
      setResponse(res);
      let cred = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=bf4c074c437b81e1700a800748c358e0`)
      setCreds(cred.data)
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    GetResponse() && loading(100);
  }, []);
  console.log(Response, Creds);
  return (
    <>
      <div className="rangeOuter:h-[100vh] left-0 top-0 absolute -z-50   w-full ">
        <img
          src={require("../assets/Zippo-Poster.png")}
          className=" bg-contain w-full"
          alt="poster"
        />
      </div>
      <div className="bg-black h-full w-full ">
        <div className="flex max-[1000px]:flex-col">
          <div className="w-2/3 justify-center items-center flex bg-gry-50 relative bottom-1  max-[1000px]:w-full ">
            <img
              src={APIObject.original(Response?.poster_path)}
              className="h-[40vw] mx-[35%] rounded-sm  "
              alt=""
            />
          </div>
          <div className="w-2/3 bg-green-0  max-[1000px]:w-full">
            <div className="max-[1000px]:flex justify-center items-center flex-col">
              <h1 className="text-white text-3xl font-semibold   font-Josefin-Sans  ">
                {Response?.title}
                {`(${new Date(Response?.release_date).getFullYear()})`}
              </h1>
              <div className="text-yellow-50 text-sm m-5 w-1/2 font-Poppins  text-center  ">{Response?.overview}</div>
              <div className="flex max-[1180px]:flex-col  w-1/2 max ">
                {Response?.genres?.map((curElem) => {
                  return <p className="text-white max-rangeOuter:px-4 py-2 max-xl:px-3 rounded-lg  max-xl:py-1 text-center flex justify-center items-center max-xl:bg-transparent   bg-theme mx-5 font-Josefin-Sans font-black     ">{curElem.name}</p>;
                })}
              </div>
              <div className="flex m-5 justify-between  w-2/3 font-semibold font-Sansita max-[1000px]:w-1/2">
                <div className="text-slate-400 bg-opacity-30  ">{Response?.runtime}m</div>
                <div className="text-slate-400 bg-opacity-40">{Math.round(Response?.vote_average * 10) / 10}</div>
              </div>
              <div className="flex">
                 {
                    Creds?.cast?.slice(0, 4).map((curElem) => {
                        if (curElem.profile_path == null) {
                          
                        }else{
                          return <div className="">
                            <img src={APIObject.original(curElem.profile_path)} className='h-[15vw]' alt="" srcset="" />
                            <p className=" max-[1000px]:hidden text-white relative bottom-5 font-Josefin-Sans">{curElem.original_name}</p>
                        </div>
                        }
                    })
                 }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MovieDetail;
