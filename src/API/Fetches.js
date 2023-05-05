import axiosClient from "axios";
import APIObject from "./APIObject";
import Instance from "./axios/axiosInstance";
import axios from "axios";

export async function HomeMedia(category, type) {
  try {
    const baseURL = `${Instance.defaults.baseURL}/${category}/${type}?api_key=bf4c074c437b81e1700a800748c358e0`;
    const res = await axios.get(baseURL);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function MovieMedia(type, page) {
  try {
    const baseURL = `${Instance.defaults.baseURL}/movie/${type}?api_key=bf4c074c437b81e1700a800748c358e0&page=${page}`;
    const res = await axios.get(baseURL);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}
export async function TVMedia(type, page) {
  try {
    const baseURL = `${Instance.defaults.baseURL}/tv/${type}?api_key=bf4c074c437b81e1700a800748c358e0&page=${page}`;
    const res = await axios.get(baseURL);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function SearchMedia(query,  category) {
    try {
      const baseUrl = `${Instance.defaults.baseURL}/search/${category}?api_key=bf4c074c437b81e1700a800748c358e0&query=${query}`
      const res = await axios.get(baseUrl)
      return res.data
    } catch (error) {
      throw new Error(error)
    }
}


export async function Detail(category, id) {
   try {
       const baseUrl = `${Instance.defaults.baseURL}/${category}/${id}?api_key=bf4c074c437b81e1700a800748c358e0` 
       const res = await axios.get(baseUrl);
       return res.data 
   } catch (error) {
       throw new Error(error)
   }
}