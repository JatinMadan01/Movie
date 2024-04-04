import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetail } from '../slices/movieDetailSlice';

function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieDetail.movie);
  const loading = useSelector((state) => state.movieDetail.loading);

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          {/* Render other movie details */}
        </div>
      )}
    </div>
  );
}

export default MovieDetail;