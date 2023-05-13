import React, { useState } from 'react'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Valorant','Team Heretics'])
  const onAddCategory =  () =>{
    console.log('soy el valorant');
  }
  return (
    <>
    {/* título */}
    <h1>GifExpertApp</h1>
    {/* Input */}
    {/* Listado de gif */}
    <button onClick={onAddCategory}> Agregar </button>
    <ol>
      {categories.map(category =>{
        return <li key={category}>{category}</li>
      })}
    </ol>
    {/* título */}
    </>
  )
}
