import React,{useEffect,useState} from 'react'
import SearchBeaches from './SearchBeaches'
import Maps from "./Maps"

function Beaches() {
    const[data,setData]=useState([]) //state to hold the fetched data
    const [showMap, setShowMap] = useState(false); // state to show the map
//fetching the data using the useffect hook
    useEffect(()=>{
        fetch("https://travel-ke.onrender.com/hotels")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
      })
    },[])
    // function to toggle the view map 
    function handleView(){
        setShowMap(!showMap) // setting the opposite 
    }
  return (
    <>
    {/* conditional rendering to show the map */}
    {
        !showMap? (
            <>
               <button className="button-map"onClick={handleView}>View Map Locations</button>
               <SearchBeaches beaches={data} />
            </>
        ):
        <>
        <button onClick={handleView} className="button-map">Hide Map</button >
          <Maps />
        </>
    }
    </>
   
  )
}

export default Beaches;
