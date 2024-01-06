// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Experience from './Pages/Experience/Experience';
import Project from './Pages/Projects/Projects';
import NavBar from './components/NavBar/NavBar';

// styles
import styles from './App.module.css';

const App = () => {
  return (
    <section className={styles.App}>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </section>
  );
};

export default App;
