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
        <div key={item.id} className='beach-item'>
          <img className="beach-image"src={item.image_url}/>
          <div>
            <h4>{item.name}</h4>
            <p>{item.location}</p>
            <p>{item.avg_price_per_night}</p>
            <p>{item.rating}</p>
          </div>
        </div>
      )

    })
  return (
    <div className='main-container'>
      {displayBeaches}
    </div>
   
  )
}

export default Beaches;
