import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoGames, fetchGenres } from '../../redux/actions';
import SearchBar from '../searchbar/SearchBar';
import VideoGameCard from '../card/VideoGame';
import Pagination from '../pagination/Pagination';
import './HomePage.css';
//import { searchVideoGames } from '../../redux/actions';





const HomePage = () => {
  const dispatch = useDispatch();
  const videoGames = useSelector(state => state.videoGames);
//  const genres = useSelector(state => state.genres);
  const [currentPage, setCurrentPage] = React.useState(1);
  const gamesPerPage = 15;

  useEffect(() => {
    dispatch(fetchVideoGames());
    dispatch(fetchGenres());
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = videoGames ? videoGames.slice(indexOfFirstGame, indexOfLastGame) : [];

  return (
    <div className="home-page">
      <SearchBar />
      <div className="filter-sort-options">

      </div>
      <div className="video-game-list">
        {currentGames.map(game => (
          <VideoGameCard key={game.id} game={game} />
        ))}
      </div>
      <Pagination
  gamesPerPage={gamesPerPage}
  totalGames={videoGames ? videoGames.length : 0} // Comprobación añadida
  paginate={handlePageChange}
/>

    </div>
  );
};

export default HomePage;
