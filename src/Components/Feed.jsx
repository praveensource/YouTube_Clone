import React, { useState,useEffect } from 'react'
import {Stack, Box,Typography} from '@mui/material';
import {SideBar , Videos} from './';
import { FetchfromAPi } from '../utils/FetchfromAPi';

const Feed = () => {
  const [selectcategory, setselectedcategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchfromAPi(`search?part=snippet&q=${selectcategory}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error('Error fetching videos:', error));
  }, [selectcategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '90vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectcategory={selectcategory}
          setselectedcategory={setselectedcategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          CopyRight 2024 JOHNWICK
        </Typography>
      </Box>

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
          {selectcategory} <span style={{ color: 'red' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};


export default Feed