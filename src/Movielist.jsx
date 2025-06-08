import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movielist.css'

const MovieApp = ({ search }) => {
  const [movies, setMovies] = useState([]);
  

  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=ef2e60a3&s=${search}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [search]);

  return (
    <div className="bg-dark text-white min-vh-100">
      <div className="container py-4">
        

       

        <div className="row g-4">
          {movies.map((movie, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div
                className="card bg-dark text-white h-100 movie-card"
                style={{ cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s' }}
              >
                <img
                  src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
                  className="card-img-top"
                  alt={movie.Title}
                  style={{ height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      
    </div>
  );
};

export default MovieApp;
