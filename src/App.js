import React from "react";
import TitleCard from "./components/TitleCard";
import About from "./pages/About";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Members from "./pages/Members";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";
import Images from "./pages/Images";
import IconButton from '@mui/material/IconButton';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { HashLink as Link } from 'react-router-hash-link';
import NotFound from "./pages/NotFound";
import './App.css';

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <section id=""><TitleCard /></section>
              <section id="about"><About /></section>
              <section id="projects"><Projects /></section>
              <section id="team"><Team /></section>
              <section id="sponsors"><Sponsors /></section>
              <IconButton aria-label="delete" size="large" smooth sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 10000, color: 'white', bgcolor: 'rgba(0, 0, 0, 0.5)' }} component={Link} to="/#">
                <KeyboardArrowUpIcon fontSize="inherit" />
              </IconButton>
            </>
          } 
        /> 
        <Route path="/members" element={<Members />} />
        <Route path="/images" element={<Images />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <section id="contact"><Footer sx={{ zIndex: 9999 }} /></section>
    </Router>
  );
}

export default App;
