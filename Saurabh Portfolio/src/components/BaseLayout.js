import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Contact from './Contact/Contact'
import Projects from './Projects/Projects';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import ParticlesBg from './particles/ParticlesBg';
import { logGa } from '../utils/log';


export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
    logGa('dark_mode_toggle', oppositeOfCurrentDarkMode ? 'dark' : 'light');
  }

  useEffect(() => {
    let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    const osDarkModeQuery = window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)')
      : null;

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem('darkMode', `${!!osDarkModeQuery?.matches}`);
    }

    const updateDarkMode = (e) => {
      setDarkMode(e.matches);
    };

    if (osDarkModeQuery) {
      osDarkModeQuery.addEventListener('change', updateDarkMode);
    }
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <ParticlesBg darkMode={darkMode.valueOf()} />
      <Grid
        container
        display={'flex'}
        flexDirection={'column'}
        minHeight={'100vh'}
        justifyContent={'space-between'}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
        </Grid>
        <Grid item flexGrow={1}>
        <Home darkMode={darkMode} />
        <div id='aboutss'>
          
        </div>
        <About />
        <div id='projectss'>
          
        </div>
        <Projects darkMode={darkMode} />
        <div id='contactss'>
          
        </div>
        <Contact darkMode={darkMode} />
          {/* <Routes>
            <Route exact path={'/'} element={<Home darkMode={darkMode} />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/projects'} element={<Projects darkMode={darkMode} />} />
            <Route exact path={'/contact'} element={<Contact darkMode={darkMode} />} />
          </Routes> */}
        </Grid>
        {/* <Grid item>
          <Box
            component={'footer'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            py={'1.5rem'}
            sx={{ opacity: 0.7 }}
            width={'100%'}
          >
           
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
}