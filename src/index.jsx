import React from "react";
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";
import Project6 from "./components/Project6";
import Project7 from "./components/Project7";
import Project8 from "./components/Project8";
import { GlobalStyle } from "./utils/style";


const root = ReactDOM.createRoot(document.getElementById('root'));
const isProd = process.env.NODE_ENV === "production";
root.render(
    // <React.StrictMode>
    // <Router>
        <Router>
            <GlobalStyle />     
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/projects" element={ <Projects /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/projects/project1" element={ <Project1 /> } />
                <Route path="/projects/project2" element={ <Project2 /> } />
                <Route path="/projects/project3" element={ <Project3 /> } />
                <Route path="/projects/project4" element={ <Project4 /> } />
                <Route path="/projects/project5" element={ <Project5 /> } />
                <Route path="/projects/project6" element={ <Project6 /> } />
                <Route path="/projects/project7" element={ <Project7 /> } />
                <Route path="/projects/project8" element={ <Project8 /> } />
            </Routes>
        </Router>
)