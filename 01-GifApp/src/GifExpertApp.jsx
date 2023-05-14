import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Valorant','Team Heretics'])
  const onAddCategory =  (newCategory) =>{
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);         
  }
  return (
    <>
    {/* título */}
    <h1>GifExpertApp</h1>
    {/* Input */}
    <AddCategory onNewCategory={onAddCategory} />
    {/* Listado de gif */}
    
    <ol>
      {categories.map(category =>{
        return <li key={category}>{category}</li>
      })}
    </ol>
    {/* título */}
    </>
  )
}
