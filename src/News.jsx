import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = '4d154b2afe414b849aa4e781d4ee20eb'; 

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=entertainment&language=en&pageSize=6&apiKey=${apiKey}`
      );
      const data = await response.json();
      if (data.articles) {
        setArticles(data.articles);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Latest Movie News</h2>
        <div className="row g-4">
          {articles.map((article, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="card bg-secondary text-white h-100 shadow">
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/500x250?text=No+Image'}
                  className="card-img-top"
                  alt={article.title}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </h6>
                  <p className="card-text">
                    {article.description || 'No summary available.'}
                  </p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
          ))}
          {articles.length === 0 && (
            <p className="text-center">No news articles available at this time.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
