import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Layout from './Layout';
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import ErrorPage from 'pages/ErrorPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
