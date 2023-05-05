import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {FreeMode} from "swiper";
import APIObject from "../API/APIObject";
import "swiper/css/free-mode";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";


export function TVCard({data, isNotTvPage}) {
  const [Hovered, setHovered] = useState(false);
    return <>
      <Link to={`/api/tv/${data.id}`}> <div className="bg-black  m-10 border-none  hover:outline-theme outline  w-[20vw] opacity-75  " onMouseLeave={() => setHovered(false)} onMouseEnter={() => setHovered(true)}>
    {
       isNotTvPage ? 
      <div
      className={`bg-black opacity-70  text-white h-[30%] w-[60%] left-10 absolute bottom-10  ${Hovered ? "block" : "hidden" } `}
      >
          <div className="flex justify-between items-center bg-urple-400 m-2">
            <h1 className=" text-theme  Mobile:text-[25%] sm:text-[45%] md:text-[55%]  lg:text-[85%] xl:text-[110%]  font-Josefin-Sans  font-semibold  ">
              {data?.name}
            </h1>
            <span className=" text-slate-500 opacity-50 Mobile:text-[25%] font-black sm:text-[45%] md:text-[55%]  lg:text-[85%] xl:text-[110%] ">
              {data?.vote_average}/10
            </span>
          </div>
          <div className="h-[70%] m-2">
            <div>
              <span className="text-[55%] max-xl:hidden  font-Sansita">
                 {data?.overview ?  data.overview.substring(0, data?.overview.length / 3):"This Show Having Not Despcrition"}
                {"."}
              </span>
            </div>
          </div>
        </div>
        : null
        }
            <img className=" 3xl:h-[60vh]   w-full " src={APIObject.original(data?.poster_path)} alt="TVs" />
       </div>
       </Link>
    </>;
  }

  function TVComponents({APIData, heading}) {
  
    return (
      <div className='w-full rangeOuter:h-[50vh]'>
      <div className="flex items-center justify-between relative max-lg:top-5 mx-10">
           <h1 className=" xl:text-4xl  lg:text-3xl text-2xl max-sm:text-lg max-Mobile:text-sm  text-Alt-theme  ml-5 font-Sansita  font-black  ">{heading}</h1>
       
      </div>
          <Swiper
             spaceBetween={30}
             slidesPerView={3}
             modules={[FreeMode]}
             className="swiper"
          >
           {
              APIData?.map((curElem, ind, arr) => {
                 return <SwiperSlide className="ml-10 cursor-pointer swiper">
                        <TVCard data={curElem} isNotTvPage={true}/>
                  </SwiperSlide>
              }) 
           }
          </Swiper>
     </div>
     );
  }
  
  export default TVComponents