import './index.css';
import './App.css';

/* SCREENS */
import NavBar from './screens/NavBar';
import Main from './screens/Main';
import AboutUs from './screens/AboutUs';
import Process from './screens/Process';
import OurWork from './screens/OurWork';
import Benefits from './screens/Benefits';
import Comments from './screens/Comments';
import Final from './screens/Final';

/* IMAGES */
import mockups from './assets/cap-4.png';

function App() {

  return (
    <div className='app'>

      <div className='app__max'>
        <NavBar 
          instagram='https://www.instagram.com/codinv_/'
          whatsapp='https://api.whatsapp.com/send?phone=+527227785391&text=%C2%A1Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20invitaciones%20digitales%20web!' />
        <Main />
        <div className='app__mockups'>
          <img className='app__mockup' src={mockups} alt="invitaciones digitales web" />
        </div>
      </div>
      <div className='app__AboutUs'>
        <div className='app__max'>
          <AboutUs />
        </div>
      </div>
      <div className="app__max">
        <Process />
      </div>
      <div className="app__OurWork">
        <div className="app__max">
          <OurWork />
        </div>
      </div>

      <div className="app__max">
        <Benefits />
      </div>

      <div className="app__comments">
        <div className='app__max'>
          <Comments />
        </div>
      </div>

      <div className="app_max">
        <Final />
      </div>
    </div>
  )
}

export default App;
