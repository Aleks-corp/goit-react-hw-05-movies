import { useEffect, useState } from 'react';
import { fetchMoviesData } from '../axios';
import { Link, useLocation } from 'react-router-dom';
import Loader from 'components/Loader';

const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchMoviesData();
        setMoviesData(res.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {!isLoading ? (
        <ul>
          {moviesData.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}{' '}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
