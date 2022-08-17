import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import renderCharacterLength from '../../utils/renderCharacterLenght';
import Divider from '@mui/material/Divider';

/**
 * @author Lee Gould
 * @param {string} image - the imageurl of the movie
 * @param {string} title - the title of the movie
 * @param {string} tagline - the tagline of the movie
 * @param {string} releaseDate - the repease date of the movie  
 * @param {number} voteAverage - the vote average
 * @returns {JSX.Element} - MovieCard component 
 */
const MovieCard = ({
  image,
  title,
  tagline,
  releaseDate,
  voteAverage,
}) => {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(prevState => !prevState);
  };

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardHeader
        style={{ textAlign: 'left' }}
        titleTypographyProps={{ variant: 'body1' }}
        title={renderCharacterLength(title, 25, true)}
        subheader={releaseDate}
      />
      <Divider />
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={image}
      />
      <Divider />
      <CardContent style={{ textAlign: 'left', minHeight: '50px' }}>
        <Typography variant="body2" color="text.secondary">
          {tagline}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <IconButton onClick={toggleLike} aria-label="add to favorites">
          <ThumbUpIcon color={like ? 'primary' : 'error'} />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {voteAverage}
        </Typography>
      </CardActions>
    </Card>
  )
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired
};

export default MovieCard;