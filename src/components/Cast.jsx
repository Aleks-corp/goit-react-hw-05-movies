import { fetchMoviesData } from '../axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, LiCast, Title } from 'components/CastReviews.styled';
import Loader from './Loader';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchMoviesData(`/movie/${id}/credits`);
        setCast(res.cast);
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
    <div>
      {!isLoading ? (
        <Container>
          {cast.length !== 0 ? (
            cast.map(({ id, name, character, profile_path }) => (
              <LiCast key={id}>
                {profile_path ? (
                  <img
                    width="100"
                    src={`https://image.tmdb.org/t/p/original${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <img
                    width="100"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                    alt={name}
                  />
                )}
                <Title>{name}</Title>
                <Title>
                  <strong>Character:</strong> {character}
                </Title>
              </LiCast>
            ))
          ) : (
            <p>We don't have any cast for this movie</p>
          )}
        </Container>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Cast;
