import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Valorant','Team Heretics'])
  const onAddCategory =  () =>{
    setCategories(['Valorant',...categories]);v           
  }
  return (
    <>
    {/* título */}
    <h1>GifExpertApp</h1>
    {/* Input */}
    <AddCategory/>
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
