import React from 'react';


const Footer = () => {
  return (
    <footer
      className="bg-dark text-white py-3 fixed-bottom shadow border-top border-white"
      style={{ borderWidth: '2px' }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center">

        {/* Left Section */}
        <div className="mb-2 mb-md-0">
          <strong>🎬 MovieHub</strong> — Your movie companion
        </div>

        {/* Center Section */}
        <div className="mb-2 mb-md-0">
          &copy; {new Date().getFullYear()} MovieHunt. @reserved
        </div>

        {/* Right Section */}
        <div>
          <a href="https://facebook.com" className="text-white me-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" className="text-white me-3">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-white me-3">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="mailto:support@moviehunt.com" className="text-white">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
