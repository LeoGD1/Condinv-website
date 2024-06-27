import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
 

/* SCREENS */
import NavBar from './screens/NavBar';
import Home from './pages/Home';
import Prices from './pages/Prices';

function App() {

  return (
    <div className='app'>
      <Router>
          <div className='app__max'>
            <NavBar 
              instagram='https://www.instagram.com/codinv_/' />
          </div>
        <Routes>
          <Route path='/' element={ <Navigate  to='/Inicio' replace /> }/>
          <Route path='/inicio' element={ <Home /> }/>
          <Route path='/precios' element={ <Prices /> }/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
