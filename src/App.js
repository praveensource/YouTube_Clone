import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './Components';

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }} >
        <NavBar />
        <Routes>

            <Route path='/' exact element={<Feed />} />;
            <Route path='/video/:id'  element={<VideoDetail />}></Route>;
            <Route path='/channel/:id'  element={<ChannelDetail />}></Route>;
            <Route path='/search/:searchTerm'  element={<SearchFeed />}></Route>;

        </Routes>
        </Box>
    </BrowserRouter>
)


export default App