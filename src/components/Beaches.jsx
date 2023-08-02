import React,{useEffect,useState} from 'react'
import SearchBeaches from './SearchBeaches'

function Beaches() {
    const[data,setData]=useState([]) //state to hold the fetched data

    useEffect(()=>{
        fetch("https://travel-ke.onrender.com/hotels")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
  return (
    <>
        <SearchBeaches beaches={data}/>
    </>
   
  )
}

export default Beaches;
