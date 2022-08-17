import * as React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

/**
 * @author Lee Gould
 * @param {func} onChange - change function 
 * @param {number} count - count of items
 * @param {number} page - page number  
 * @returns {JSX.Element} - pagination component
 */
const CardPagination = ({ onChange, count, page }) => (
  <Stack spacing={2}>
    <Pagination
      count={count}
      variant='outlined'
      page={page}
      onChange={onChange}
      color='primary'
      shape='rounded'
    />
  </Stack>
);

CardPagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default CardPagination;