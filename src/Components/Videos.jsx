import React from 'react';
import { Stack, Box, CircularProgress, Typography } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos = [], direction = 'row' }) => {
  if (!videos.length)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="95vh">
        <CircularProgress color="secondary" />
        <Typography variant="body1" color="textSecondary" ml={2}>
          Loading...
        </Typography>
      </Box>
    );

  return (
    <Stack direction={direction} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id?.videoId && <VideoCard video={item} />}
          {item.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos