import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade}from "swiper"
import Instance from '../API/axios/axiosInstance'
import "swiper/css/effect-fade";
import Carousel from './Carousel';
import { HomeMedia, fetchCarouselAPI } from '../API/Fetches';
import "swiper/css/effect-fade";


function Header() {
  const [APIData, setAPIData] = useState([]);

  function randomGenerator(max) {
     let arr = []
     while(arr.length < 3){
         var r = Math.floor(Math.random() * max) + 1;
         if(arr.indexOf(r) === -1) arr.push(r);
     }
     return arr;
   }

     
  let random = randomGenerator(18);
   const  response = async () => {
      const res = await HomeMedia("movie", "popular")
      setAPIData(res.results)
   }
  useEffect(() => {
      response()
  },[])
  return (      
    <div className='h-full'>
       <Swiper
           autoplay={{
             delay:1500,
             disableOnInteraction: false
           }}
           effect={"fade"}
           modules={[Autoplay, EffectFade]}
           className="swiper"
        >
        <SwiperSlide>
           <Carousel Data={APIData?.[random[0]]}/>
        </SwiperSlide>
        <SwiperSlide>
           <Carousel Data={APIData?.[random[1]]} />
        </SwiperSlide>
        <SwiperSlide>
           <Carousel Data={APIData?.[random[2]]}/>
        </SwiperSlide>
       </Swiper>
    </div>
  )
}

export default Header