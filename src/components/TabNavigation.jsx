import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom';

const TabNavigation = () => {
  const [Tabs, setTab] = useState(0);
  return (
    <div className=' h-[10%] flex justify-center  absolute w-full'>
        <div className='flex justify-center max-xl:text-2xl max-[300px]:text-[0.750rem] max-[300px]:ml-3 text max-md:text-xl max-sm:text-lg max-Mobile:text-sm     text-3xl font-Sansita  items-center'>
        <div>
            <button onClick={() => setTab(0) } className={`m-5 py-5 ${Tabs == 0 ? 'text-theme' : "text-Alt-theme" }`} ><NavLink to={"/"} >Home</NavLink></button>
          </div>
          <div>
        <button onClick={() => setTab(1) } className={`m-5 py-5 ${ Tabs == 1  ? 'text-theme' : 'text-Alt-theme'}`} ><NavLink to={"/movie/search"}>Movie</NavLink></button>
            </div>
            <div>
        <button onClick={() => setTab(2) } className={`m-5 py-5 ${ Tabs == 2 ? 'text-theme' : 'text-Alt-theme'}`} ><NavLink to={"/tv/search"}>TV's</NavLink></button>
            </div>
        </div>
    </div>
    
  )
}

export default TabNavigation