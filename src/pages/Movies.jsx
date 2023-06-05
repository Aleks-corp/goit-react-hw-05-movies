import { useEffect, useState } from 'react';
import { fetchMoviesData } from '../axios';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import Loader from 'components/Loader';

export const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchMoviesData(
          `/search/movie?query=${searchParams.get('query')}`
        );
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
  }, [searchParams]);

  const onSubmit = e => {
    e.preventDefault();
    if (!e.target[0].value) {
      return;
    }
    setSearchParams({ query: e.target[0].value });
  };

  return (
    <>
      <SearchBar
        onSubmit={onSubmit}
        query={searchParams.get('query')}
      ></SearchBar>
      {!isLoading ? (
        <ul>
          {moviesData.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
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

export default Movies;
