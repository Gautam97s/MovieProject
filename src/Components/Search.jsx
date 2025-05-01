import React from 'react'
import searchIcon from '../Assets/search.svg'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src= {searchIcon} alt="Search" />

            <input type="text" placeholder='Search Thousands of movies' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
        </div>
    </div>
  )
}

export default Search