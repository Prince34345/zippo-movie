import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import { FreeMode } from "swiper";
import APIObject from "../API/APIObject";
import "swiper/css/free-mode";
import {  Link, useNavigate } from "react-router-dom";

export function MovieCard({ data, isNotMoviePage }) {
  
  const [Hovered, setHovered] = useState(false);
  return (
    <>
     <Link  to={`/api/movie/${data.id}`}> <div className="bg-black m-10 border-none  hover:outline-theme outline  w-[20vw] opacity-75  " onMouseLeave={() => setHovered(false)} onMouseEnter={() => setHovered(true)}>
        {
         isNotMoviePage ?  <div
          className={`bg-black opacity-70 transform-up-down max-lg:hidden text-white h-[30%] max-rangeOuter:w-[60%] left-10 absolute bottom-10  ${Hovered ? "block" : "hidden" } `}
          >
          <div className="flex justify-between items-center m-2">
            <h1 className=" text-theme  Mobile:text-[25%] sm:text-[45%] md:text-[55%]  lg:text-[85%] xl:text-[110%]  font-Josefin-Sans  font-semibold  ">
              {data?.original_title}
            </h1>
            <span className=" text-slate-500 opacity-50 Mobile:text-[25%] font-black sm:text-[45%] md:text-[55%]  lg:text-[85%] xl:text-[110%]">
              {data?.vote_average}/10
            </span>
          </div>
          <div className="bg-yelow-500 h-[70%] m-2">
            <div>
              <span className="text-[55%] max-xl:hidden  font-Sansita">
              {data?.overview ?  data.overview.substring(0, data?.overview.length / 3):"This Movie Having Not Despcrition"}
                {"."}
              </span>

            </div>
          </div>
        </div> : null
      }
        <img
          className=" 3xl:h-[60vh]  w-full  cursor-pointer"
          src={APIObject.original(data?.poster_path) || APIObject.original(data?.backdrop_path)}
          alt="movies"
        />
      </div>
      </Link>
    </>
  );
}

function MovieComponents({ APIData, heading }) {
  const navigate  = useNavigate();
  async function getThatPage(typeData) {
      try {
         navigate("/movie/search")
      } catch (error) {
         throw new Error(error)
      }
  }
  useEffect(() => {
    
  }, [])

  return (
    <div className=" w-full  rangeOuter:h-[50vh]">
      <div className="flex items-center justify-between relative max-lg:top-5 mx-10">
      <h1 className="relative xl:text-4xl lg:text-3xl capitalize text-2xl max-sm:text-lg max-Mobile:text-sm text-Alt-theme  ml-5 font-Sansita  font-black  ">
        {heading}
      </h1>
      
      </div>
      <Swiper slidesPerView={3} spaceBetween={1} modules={[FreeMode]} className="swiper">
        {APIData?.map((curElem, ind, arr) => {
          return (
            <SwiperSlide className="cursor-pointer ml-10 swiper">
              <MovieCard data={curElem} isNotMoviePage={true} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MovieComponents;
