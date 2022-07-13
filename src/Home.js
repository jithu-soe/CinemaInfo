import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("India");
  }, []); 

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);  
    console.log(data.Search);   
  };

  return (

    <div className="app">
     <div className="apptitle">
      
      <span className="app1">C</span>
      <span className="app2">I</span>
      <span className="app3">N</span>
      <span className="app4">E</span>
      <span className="app5">M</span>
      <span className="app6">A</span>
      <span >                 </span>
      <span className="app7">I</span>
      <span className="app8">N</span>
      <span className="app9">F</span>
      <span className="app0">O</span>
     
      
      
    
  </div> 
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

     <div className="footer">
        <div className="l">
        <h4 className="about"> About Me</h4>
        <p>My name is G.jithender</p><p> I am full stack (MERN) developer </p>
        </div>
        <div className="r">
          <ul>
             <li><h4 className="social" > Social Media</h4></li>
             <li><a href="https://github.com/jithu-soe/" target="_blank" rel="noopener noreferrer"> Github</a></li>
             <li><a href="https://in.linkedin.com/in/guguloth-jithender-2730a2245" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;