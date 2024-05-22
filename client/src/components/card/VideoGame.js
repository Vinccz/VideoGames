// components/VideoGameCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const VideoGameCard = ({ game }) => {
  return (
    <Link to={`/videogame/${game.id}`} className="video-game-card">
      <img src={game.image} alt={game.name} />
      <h3>{game.name}</h3>
      <p>Géneros: {game.genres.join(', ')}</p>
    </Link>
  );
};

export default VideoGameCard;
