import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/top-rated" className="nav-link">Top Rated</Link></li>
        <li><Link to="/upcoming" className="nav-link">Upcoming</Link></li>
      </ul>
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder="Search..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
