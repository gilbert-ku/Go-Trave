import React,{useEffect,useState} from 'react'
import SearchBeaches from '../components/SearchBeaches';
import Maps from '../components/Map';
import './Beaches.css'

function Beaches() {
    const[data,setData]=useState([]) 
    const [showMap, setShowMap] = useState(false); 

    useEffect(()=>{
        fetch("https://travel-ke.onrender.com/hotels")
        .then(res=>res.json())
        .then(data=>{

            console.log(data)
            setData(data)
        })
    },[])
 
    function handleView(){
        setShowMap(!showMap) 
    }
  return (
    <>
   
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