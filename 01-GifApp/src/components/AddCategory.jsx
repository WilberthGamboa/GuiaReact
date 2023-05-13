import React, { useState } from 'react'

export const AddCategory = () => {
  const [inputValue, setinputValue] = useState("Valorant");
  const onInputChange = ({target}) =>{
    setinputValue(target.value);
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    console.log(inputValue);
  }
 
  return (
    <form onSubmit={onSubmit} >
   <input onChange={onInputChange}
    type='text'
    placeholder="Buscar gifs"
    value={inputValue}
   >
   
   </input>
   </form>
  )
}
