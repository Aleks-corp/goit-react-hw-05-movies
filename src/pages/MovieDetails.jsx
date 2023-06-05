import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMoviesData } from '../axios';
import { useState } from 'react';
import { useEffect } from 'react';
import MovieTab from 'components/MovieTab';
import { Link, AddWrapper } from 'components/Layout.styled';
import Loader from 'components/Loader';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchMoviesData(`/movie/${id}`);
        setMovieDetails(res);
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
  }, [id]);

  return (
    <>
      <Link to={backLinkHref}>Go Back</Link>
      {!isLoading ? <MovieTab movieDetails={movieDetails} /> : <Loader />}
      <AddWrapper>
        <p>Additional information</p>
        <Link to="cast" state={{ from: backLinkHref }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: backLinkHref }}>
          Reviews
        </Link>
      </AddWrapper>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
