import React from "react";
import APIObject from "../API/APIObject";
import Query from "query-string";
function Carousel({ Data }) {
  // console.log(Data);
  return (
    <>
      <div className=" bg-contain ">
        <img
          className="w-full rangeAny:h-[100vh] "
          src={APIObject.original(Data?.backdrop_path)}
          alt="bg"
        />
      </div>
      <div className="  absolute top-0 left-0 h-full w-full z-50 flex">
        <div className="  w-1/2 max-sm:hidden flex justify-end items-center">
          <img
            className="m-5  3xl:h-[40vw] max-2xl:h-[37.5vw] xl:h-[34.5vw] lg:h-[30vw] md:h-[28.5vw] sm:h-[25vw] Mobile:   border-Alt-theme border-2    rounded-md bg-contain"
            src={APIObject.original(Data?.poster_path)}
            alt="poster"
          />
        </div>
        <div className="h-full  w-2/3 max-sm:w-full flex justify-center max-sm:justify-end  items-center flex-col ">
          <div className="text-7xl  max-xl:text-5xl font-Sansita max-lg:text-4xl  max-md:text-3xl max-sm:text-xl max-Mobile:text-lg text-theme text-shadow-theme-Alt">
            {Data?.title}
          </div>
          <div className="text-lg font-medium  max-md:text-sm  text-Alt-theme opacity-50">
            {Data?.release_date}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Carousel;
