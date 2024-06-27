import React from 'react'

/* SCREENS */
import AboutUs from '../screens/AboutUs';
import Process from '../screens/Process';
import OurWork from '../screens/OurWork';
import Benefits from '../screens/Benefits';
import Comments from '../screens/Comments';
import Final from '../screens/Final';
import Main from '../screens/Main';

import '../../src/App.css'

/* IMAGES */
import mockups from '../assets/cap-4.png';

const Home = () => {
  return (
    <>
        <div className='app__max'>
            <Main />
        </div>
        <div className='app__mockups'>
            <img className='app__mockup' src={mockups} alt="invitaciones digitales web" />
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
    </>
  )
}

export default Home
