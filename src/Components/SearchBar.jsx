import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper,IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';


const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      navigate(`search/${searchTerm}`);
      setsearchTerm('');
    }
  }

  return (
    <Paper
    component="form"  onSubmit={handleSubmit} sx={{border:"1px solid #c3c3c3",boxShadow:"None", borderRadius:20,pl:2,mr:{sm:5}}}>
        <input className='search-bar'  placeholder='Search.....' value ={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} />
        <IconButton type='submit'  onSubmit={(e)=>{}} sx={{color:"red"}}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar