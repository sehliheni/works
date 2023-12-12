import React, { useState } from 'react'

const MovieAdd = ({funt}) => {
    const [addNew,setAddnew] = useState({name:"",rate:"",Imag:""});

return (
    <div className='mov'>
    <input type='text' onChange={(e)=>setAddnew({...addNew,name:e.target.value})}></input>
    <input type='text'onChange={(e)=>setAddnew({...addNew,rate:e.target.value})}></input>
    <input type='text'onChange={(e)=>setAddnew({...addNew,Imag:e.target.value})}></input>
    <button onClick={()=>funt(addNew)}>MovieAdd</button>
    </div>
)
}

export default MovieAdd
