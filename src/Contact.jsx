import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        <h2 className="text-center mb-4">Suggest a Movie</h2>
        <form className="bg-secondary p-4 rounded shadow-lg">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="movie" className="form-label">Movie Suggestion</label>
            <textarea className="form-control" id="movie" rows="3" placeholder="Suggest a movie..." required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Suggestion</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
