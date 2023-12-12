import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react';
import {movies} from './cont/Data'
import { useState } from 'react';
import Movie from './cont/Movie';
import MovieAdd from './cont/MovieAdd';
function App() {
  //react states 
  const  [filt, setfilt] = useState("");
  //input value
  const filtter = (e) => {
    setfilt(e.target.value)
  } 
  //search evant
  const search = (movies) =>{
    return movies.filter(elm => 
    elm.name.toLowerCase().includes(filt) 
    || 
    elm.rate.includes(filt));
  }
  //add new movie
  const [mov, setmov] = useState(movies);
  console.log(mov)
  const addNewMovie = (x) =>{
    setmov({...mov,x});
    
  }
  
return (
    <div> 
      <h1 className='header'>TunFlix</h1>
      <MovieAdd funt={addNewMovie} />
      <div className='form'>
            <input 
              className='search-bar'
              type='search'
              onChange={filtter} 
              />
            <label className='Search-label'>Search.......</label>
          
      </div>
    <Movie  movies={search(movies)}/>
    
    </div>
  );
}

export default App;
