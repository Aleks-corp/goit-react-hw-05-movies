import {
  Container,
  Title,
  VoteAverage,
  Overview,
  Genres,
  Description,
} from './MovieTab.styled';
import PropTypes from 'prop-types';

const MovieTab = ({ movieDetails }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;
  const genresArr = [];
  genres && genres.map(({ name }) => genresArr.push(name));
  return (
    <Container>
      {movieDetails.poster_path ? (
        <img
          width="250"
          height="375"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
      ) : (
        <img
          width="250"
          src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          alt={title}
        />
      )}
      <div>
        <Title>
          {title} {release_date && `(${release_date.slice(0, 4)})`}
        </Title>
        <VoteAverage>
          User Score:{' '}
          {vote_average ? (
            <span>{Math.round(vote_average * 10)}%</span>
          ) : (
            'Unavailable'
          )}
        </VoteAverage>
        {overview && (
          <Overview>
            Overview <Description>{overview}</Description>
          </Overview>
        )}
        {genres && (
          <Genres>
            Genres <Description>{genresArr.join(', ')}</Description>
          </Genres>
        )}
      </div>
    </Container>
  );
};

export default MovieTab;

MovieTab.propTypes = {
  movieDetails: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.string,
      overview: PropTypes.string,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ),
    })
  ),
};
