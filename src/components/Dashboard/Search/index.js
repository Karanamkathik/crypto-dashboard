import React, { useState } from 'react'
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";

function Search( {search , onSearchChange}) {
    // const [search, setSearch] =useState ("");
  return (
    <div className='search-flex'>
        <SearchIcon />
        <input placeholder='search' type='text'
         value={search} 
         onChange={(e) => onSearchChange(e)}
        />
        
    </div>
  )
}

export default Search