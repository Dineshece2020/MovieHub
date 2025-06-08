import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const News = () => {
  const newsArticles = [
    {
      title: "Dune: Part Two Dominates Box Office",
      description: "Dune: Part Two opens with a $180M global debut, setting the pace for summer blockbusters.",
      publishedAt: "2025-06-08T10:00:00Z",
      image: "https://preview.redd.it/dune-part-2-fan-art-poster-by-beenum-editz-v0-5r4cp9ehtkob1.jpg?auto=webp&s=6d62ef8fe13a644d9681779d95a43e8fef15e071",
      source: "CineWorld Daily"
    },
    {
      title: "Inside Out 2 Receives Standing Ovation",
      description: "Pixar’s sequel was met with emotional cheers and praise at its Los Angeles premiere.",
      publishedAt: "2025-06-07T14:30:00Z",
      image: "https://th.bing.com/th/id/OIP.f3fFjfWR24eLaPVMSH2GNgHaEK?w=291&h=181&c=7&r=0&o=7&pid=1.7&rm=3",
      source: "Pixar Insider"
    },
    {
      title: "Spider-Man 4 Confirmed for 2026",
      description: "Tom Holland to return in a multiverse-connected sequel under Sony and Marvel.",
      publishedAt: "2025-06-06T08:45:00Z",
      image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/spider-man-4-netflix-fan-poster.jpg",
      source: "Marvel Newswire"
    },
    {
      title: "Deadpool & Wolverine Trailer Breaks Internet",
      description: "Hugh Jackman's return as Wolverine causes a stir across the fanbase.",
      publishedAt: "2025-06-05T11:20:00Z",
      image: "https://assets-prd.ignimgs.com/2024/05/21/deadpool-and-wolverine-ver6-button-1716253322662.jpg",
      source: "HeroLeaks"
    },
    {
      title: "Oppenheimer Wins 6 Academy Awards",
      description: "Christopher Nolan’s biopic swept the Oscars, including Best Picture and Best Director.",
      publishedAt: "2025-06-04T09:10:00Z",
      image: "https://assets.voxcinemas.com/posters/P_HO00009486.jpg",
      source: "FilmWire"
    },
    {
      title: "Barbie 2 Announced by Warner Bros",
      description: "A colorful return to Barbieland is officially in the works with Greta Gerwig returning.",
      publishedAt: "2025-06-03T13:15:00Z",
      image: "https://www.looper.com/img/gallery/barbie-2-will-it-ever-happen/l-intro-1692107483.jpg",
      source: "Cinema Beat"
    },
    {
      title: "Fast X Part 2 Begins Filming",
      description: "The final chapter in the Fast saga begins production with Vin Diesel and family.",
      publishedAt: "2025-06-02T16:45:00Z",
      image: "https://tse2.mm.bing.net/th/id/OIP.m8rgIRCzmMGKbuFjhHrmAwHaEK?r=0&rs=1&pid=ImgDetMain",
      source: "AutoFilm Weekly"
    }
  ];

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Latest Movie News</h2>
        <div className="row g-4">
          {newsArticles.map((article, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="card bg-secondary text-white h-100 shadow news-card">
                <img
                  src={article.image}
                  className="card-img-top"
                  alt={article.title}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{article.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{new Date(article.publishedAt).toLocaleDateString()}</h6>
                  <p className="card-text flex-grow-1">{article.description}</p>
                  <div className="text-end text-light">
                    <small>Source: {article.source}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <style>{`
        .news-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
};

export default News;
