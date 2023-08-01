import React,{useEffect,useState} from 'react'


function Beaches() {
    const[data,setData]=useState([]) //state to hold the fetched data
    const[searchTerm,setSearchTerm]=useState("")//state to hold the users' input
//filtering the beaches based on the search term
const filteredBeaches=data.filter((location)=>{
return(
  location.description.toLowerCase().includes(searchTerm).toLowerCase()
)  //checking to see if the description includes  the search term
})
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
          <div className='beach-details'>
            <h4>{item.name}</h4>
            <p>Location: {item.location}</p>
            <p>Avg Price Per Night: ${item.avg_price_per_night}</p>
            <p>Rating:{item.rating}</p>
          </div>
        </div>
      )

    })
  return (
    <>
    <div className='beach-form-container'>
        <form action="">
          <input placeholder='search' className='search-beaches'/>
        </form>
    </div>
    
        <div className='main-container'>
          {displayBeaches}
        </div>
    </>
   
  )
}

export default Beaches;
