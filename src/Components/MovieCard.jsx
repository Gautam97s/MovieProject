import React from "react";
import StarIcon from "../Assets/star.svg"; // Import as component
import NoPoster from "../Assets/No-Poster.png"; // Import as URL

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : NoPoster // Use imported image
        }
        alt={title || "Movie poster"}
        className="movie-poster"
        onError={(e) => {
          e.target.src = NoPoster; // Fallback to local image
        }}
      />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <div className="content">
          <div className="rating">
            <img 
              src={StarIcon} 
              alt="Star" 
              className="star-icon"
            />
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>

          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">
            {release_date ? release_date.split('-')[0]: 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;