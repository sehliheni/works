import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react';
import {movies} from './cont/Data'
import { useState } from 'react';
import Movie from './cont/Movie';

function App() {
  //react states
  const  [filt, setfilt] = useState("");
  //input value
  const oks = (e) => {
    setfilt(e.target.value)
  } 
  //search evant
  const search = (movies) =>{
    return movies.filter(elm => 
    elm.name.toLowerCase().includes(filt) 
    || 
    elm.rate.includes(filt));
  }
return (
    <div>
      <h1 className='header'>TunFlix</h1>
      <div className='form'>
            <input 
              className='search-bar'
              type='search'
              onChange={oks} 
              />
            
            <label className='Search-label'>Search.......</label>
      </div>
    <Movie  movies={search(movies)}/>
    </div>
  );
}

export default App;
