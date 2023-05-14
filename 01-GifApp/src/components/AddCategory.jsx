import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
  /*Definimos el useState del inputValue, recordemos que
  react funciona con estados así que si queremos modificar
  el estado de un componente debemos manejarlo con el useState*/
  const [inputValue, setinputValue] = useState("Valorant");
  const onInputChange = ({target}) =>{
    setinputValue(target.value);
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    if(inputValue.trim().length<=1) return;
    onNewCategory(inputValue.trim());
    setinputValue('');
  }
 
  //Input donde escribimos para agregar a la lista
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
