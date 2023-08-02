import React,{useEffect,useState} from 'react'
import SearchBeaches from './SearchBeaches'
import Maps from "./Maps"

function Beaches() {
    const[data,setData]=useState([]) //state to hold the fetched data
//fetching the data using the useffect hook
    useEffect(()=>{
        fetch("https://travel-ke.onrender.com/hotels")
        .then(res=>res.json())
        .then(data=>{
            setData(data) // using the function to set the data 
            console.log(data)
        })
    },[])
  return (
    <>
        <SearchBeaches beaches={data}/>
        <Maps/>
    </>
   
  )
}

export default Beaches;
