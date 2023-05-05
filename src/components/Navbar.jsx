import React, { useEffect, useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
// import Searchbar from "./searchbar";
const Navbar = ({isSearch}) => {
  const [Accord, setAccord] = useState(true);
  function setAccordtion() {
    if (Accord) {
      setAccord(false);
    } else {
      setAccord(true);
    }
  }


  return (
    <>
      <div
        className={`flex w-full  ${
          Accord ? "" : "bg-opacity-50  bg-black"
        } z-10  transition-all duration-500  justify-between  ${"items-center max-sm:items-start"} ${"max-sm:flex-col"}`}
      >
        <div className={`flex  justify-center items-center `}>
          <img
            className="h-[4rem] md:h-[5rem] xl:h-[6rem] 2xl:h-[6.8rem] Mobile:h-[3.5rem] "
            src={require("../assets/Zippo-Movie.png")}
            alt="logo"
            />
          <h1 className="text-2xl md:text:3xl lg:text-4xl xl:text-5xl font-Jockey-One max-sm:hidden text-Alt-theme">
            Zippo Movie
          </h1>
          </div>
      </div>
  
    </>
  );
};

// // button

// // bars

export default Navbar;
