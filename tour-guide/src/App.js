import './App.css';
import Navbar from './components/Navbar';
import Beaches from './pages/Beaches';
import Home from './pages/Home';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Ranches from './pages/Ranches';
import Park from './pages/Park';
import Hotel from './pages/Hotel';
function App() {
return(
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/beaches' element={<Beaches/>}/>
                <Route exact path='/ranches' element={<Ranches/>}/>
                <Route exact path='/parks' element={<Park/>}/>
                <Route exact path='/hotels' element={<Hotel/>}/>
            </Routes>
        </BrowserRouter>
        
    </>
)

}

export default App;
