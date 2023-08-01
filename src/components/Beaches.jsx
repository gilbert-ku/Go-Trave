import React,{useEffect,useState} from 'react'


function Beaches() {
    const[data,setData]=useState([])

    useEffect(()=>{
        fetch("https://travel-ke.onrender.com/hotels")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
            console.log(data)
        })
    },[])

    const displayBeaches=data.map((item)=>{
      return(
        <div>
          <img src={item.image_url}/>
          <div>
            <h4>{}</h4>
          </div>
        </div>
      )

    })
  return (
    <>
      <displayBeaches/>
    </>
  )
}

export default Beaches;
