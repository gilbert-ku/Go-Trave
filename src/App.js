import './App.css';
import Hotels from "./components/Hotels";
import AddHotelForm from './components/AddHotelForm';

    return(
        <div>
            <AddHotelForm />
            <Hotels />
            <Beaches />
        </div>
        
    )



    


<<<<<<< HEAD
export default App;
=======
  return (
    <div className='main-container'>
      <Home />
      <AddHotelForm />
      <Hotels />
      <Beaches />
      <Search ranches={ranches} onSearch={handleSearch} />
      <RanchList ranches={filteredRanches.length > 0 ? filteredRanches : ranches} />
      <BookingForm onBooking={handleBooking} />
    </div>
  );
}

export default App
>>>>>>> b84149c (add merged work)
