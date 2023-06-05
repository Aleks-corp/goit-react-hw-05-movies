import { fetchMoviesData } from '../axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LiReview, Name } from 'components/CastReviews.styled';
import Loader from './Loader';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchMoviesData(`/movie/${id}/reviews`);
        setReviews(res.results);
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
        <ul>
          {reviews.length !== 0 ? (
            reviews.map(({ id, author, content, created_at }) => (
              <LiReview key={id}>
                <Name>{author}</Name>
                <p>{content}</p>
                <p>{created_at.slice(0, 10)}</p>
              </LiReview>
            ))
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Reviews;
