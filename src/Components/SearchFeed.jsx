import React, { useState,useEffect } from 'react'
import { Box,Typography} from '@mui/material';
import {Videos} from './';
import { FetchfromAPi } from '../utils/FetchfromAPi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  
  const {searchTerm} = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchfromAPi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error('Error fetching videos:', error));
  }, [searchTerm]);

  return (
    <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          marginBottom={2}
          sx={{ color: 'white' }}
        >
          Search results for:  <span style={{ color: 'red' }}>{searchTerm} videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
  );
};


export default SearchFeed