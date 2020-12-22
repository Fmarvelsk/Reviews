import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function SimpleRating(props) {

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="read-only"
          precision={0.5}
          value={props.rating}
        readOnly/>
      </Box>
      </div>
      )
      
      }
