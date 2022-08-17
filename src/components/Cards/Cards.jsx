import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import { faker } from "@faker-js/faker";
import Grid from '@mui/material/Grid';
/**
 * @author Lee Gould
 * @param {object} data - the movie data 
 * @returns {JSX.Element} - cards
 */
const Cards = ({ data }) => (
  <React.Fragment>
    {data.map((data) => {
      return (
        <Grid key={data.id} item xl={2} lg={3} md={4} sm={6} xs={12}>
          <MovieCard
            key={data.id}
            image={faker.image.cats(250, 250, true)}
            title={data.title}
            tagline={data.tagline}
            releaseDate={data.release_date}
            voteAverage={data.vote_average}
            keywords={data.keywords}
          />
        </Grid>
      )
    }
    )}
  </React.Fragment>
);

Cards.propTypes = {
  data: PropTypes.array.isRequired
};

export default Cards;