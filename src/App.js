
import React, { useState } from 'react';
import movieData from './data/tmdb_5000_movies.json';

import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Cards, CardPagination } from './components';
import usePagination from './hooks/Pagination';


const theme = createTheme({
  components: {
    MuiCardHeader: {
      title: {
        fontSize: '12px',
      },
    },
  },
});

function App() {
  const [page, setPage] = useState(1);

  const PER_PAGE = 24;
  const _DATA = usePagination(movieData, PER_PAGE);
  const count = Math.ceil(movieData.length / PER_PAGE);

  const handleChange = (event, page) => {
    setPage(page);
    _DATA.jump(page);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box
          style={{ padding: '30px' }}
          sx={{ flexGrow: 1 }}
        >
          <div style={{ paddingBottom: '15px' }}>
            <CardPagination
              count={count}
              page={page}
              onChange={handleChange}
            />
          </div>
          <Grid container spacing={4} direction="row">
            <Cards data={_DATA.currentData()} />
          </Grid>
          <div style={{ paddingTop: '15px' }}>
            <CardPagination
              count={count}
              page={page}
              onChange={handleChange}
            />
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
